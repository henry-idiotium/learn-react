import delay, {
	AuthInfo,
	initialAuthInfoState,
	LocalStorageNames as localKeys,
	PathNames as Path,
} from 'common'
import { Button } from 'components'
import { SplitWrapper } from 'components/form'
import FormError from 'components/form/FormError'
import { Form, FormikProvider, useFormik } from 'formik'
import { useLoginMutation } from 'generated/graphql'
import useLocalStorage from 'hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import InputField from './InputField'
import TickBox from './TickBox'

type FormState = {
	email: string
	password: string
	remember: boolean
}

const initialFormState: FormState = {
	email: '',
	password: '',
	remember: false,
}

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Email must be a valid email address')
		.required('Email is required'),
	password: Yup.string().required('Password is required'),
})

// ----------------------------------------------------------------
export default function LoginForm() {
	const navigate = useNavigate()
	const [login, { called }] = useLoginMutation()
	const [, setAuth] = useLocalStorage<AuthInfo>(
		localKeys.AUTH_INFO,
		initialAuthInfoState,
	)
	const [showPassword, setShowPassword] = useState(false)
	const [isRemember, setIsRemember] = useState(false)
	const [disable, setDisable] = useState(true)

	let formik = useFormik({
		initialValues: initialFormState,
		validationSchema: LoginSchema,
		onSubmit: async (values, { setStatus }) => {
			try {
				const { data, errors } = await login({
					variables: {
						request: { email: values.email, password: values.password },
					},
					onError: async ({ message }) => {
						setStatus('')
						await delay(400)
						setStatus(message)
					},
				})

				await delay(400)

				const response = data?.login?.data
				const userInfo = data?.login?.data?.userInfo

				if (!errors && called && response) {
					setAuth({
						id: userInfo!.id!,
						token: {
							accessToken: response?.accessToken?.token!,
							refreshToken: response?.refreshToken!,
						},
					})
					navigate(Path.HOME, { replace: true })
					return
				}
			} catch {
				setStatus('Something went wrong')
				return
			}
		},
	})
	const {
		handleSubmit,
		getFieldProps,
		errors,
		touched,
		values,
		status,
		isSubmitting,
	} = formik

	useEffect(() => {
		return setDisable(!(values.email.trim() && values.password.trim()))
	}, [values.email, values.password, disable])

	const handleShowPassword = () => setShowPassword((show) => !show)
	const handleIsRemember = () => {
		values.remember = !values.remember
		setIsRemember((remember) => !remember)
	}

	return (
		<FormikProvider value={formik}>
			{!!status && <FormError message={status} />}
			<Form
				onSubmit={handleSubmit}
				autoComplete='off'
				className='space-y-6'
				noValidate
			>
				<InputField
					type='email'
					label='Email'
					{...getFieldProps('email')}
					isWarning={Boolean(touched.email && errors.email)}
					helperText={touched.email ? errors.email : undefined}
				/>
				<InputField
					type={showPassword ? 'text' : 'password'}
					label='Password'
					isWarning={Boolean(touched.password && errors.password)}
					helperText={touched.password ? errors.password : undefined}
					{...getFieldProps('password')}
					fieldAdornment={
						<Button
							type='button'
							class='absolute top-0 right-0 rounded-l-none btn btn-ghost hover:bg-transparent'
							onClickFunc={handleShowPassword}
							label={
								showPassword ? (
									<i className='fas fa-eye'></i>
								) : (
									<i className='fas fa-eye-slash'></i>
								)
							}
						/>
					}
				/>
				<SplitWrapper
					right={
						<TickBox
							text='Remember me?'
							checked={isRemember}
							onChangeFunc={handleIsRemember}
						/>
					}
					left={
						<Link to='/' className='text-sm font-medium link link-hover'>
							Forgot password?
						</Link>
					}
				/>
				<Button
					type='submit'
					label='Log in'
					class='btn btn-block btn-primary'
					isDisable={disable}
					isLoading={isSubmitting}
				/>
			</Form>
		</FormikProvider>
	)
}
