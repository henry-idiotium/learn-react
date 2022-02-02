import { Button } from 'components'
import { SplitWrapper } from 'components/form'
import { Form, FormikProvider, useFormik } from 'formik'
import { useRegisterMutation } from 'generated/graphql'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import InputField from './InputField'
import TickBox from './TickBox'

type FormState = {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
	remember: boolean
}

const initialState: FormState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	remember: false,
}

const LoginSchema = Yup.object().shape({
	firstName: Yup.string()
		.required('First name is required')
		.min(2, 'First name must be at least 2 characters'),
	lastName: Yup.string()
		.required('Last name is required')
		.min(2, 'Last name must be at least 2 characters'),
	email: Yup.string()
		.required('Email is required')
		.email('Must be a valid email address'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
	confirmPassword: Yup.string()
		.required('Confirm password is required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

// ----------------------------------------------------------------
export default function RegisterForm() {
	const navigate = useNavigate()
	const [register, { loading }] = useRegisterMutation()
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [remember, setRemember] = useState(false)
	const [disable, setDisable] = useState(true)

	const formik = useFormik({
		initialValues: initialState,
		validationSchema: LoginSchema,
		onSubmit: async (values, { setStatus }) => {
			try {
				const { errors } = await register({
					variables: {
						request: {
							email: values.email,
							firstName: values.firstName,
							lastName: values.lastName,
							password: values.password,
							confirmPassword: values.confirmPassword,
						},
					},
					onError: () => setStatus(errors),
				})
				while (loading) {}
				if (!errors) navigate('/')
			} catch {
				setStatus('Something went wrong')
				return
			}
		},
	})
	const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
		formik

	useEffect(() => {
		return setDisable(!(values.email.trim() && values.password.trim()))
	}, [values.email, values.password, disable])

	const handleShowPassword = () => setShowPassword((show) => !show)
	const handleShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show)
	const handleIsRemember = () => {
		values.remember = !values.remember
		setRemember((remember) => !remember)
	}

	return (
		<FormikProvider value={formik}>
			<Form
				onSubmit={handleSubmit}
				autoComplete='off'
				className='space-y-6'
				noValidate
			>
				<SplitWrapper
					right={
						<InputField
							type='firstName'
							label='First Name'
							classes='flex-auto mr-2'
							{...getFieldProps('firstName')}
							isWarning={Boolean(touched.firstName && errors.firstName)}
							helperText={touched.firstName ? errors.firstName : undefined}
						/>
					}
					left={
						<InputField
							type='lastName'
							label='Last Name'
							classes='flex-auto ml-2'
							{...getFieldProps('lastName')}
							isWarning={Boolean(touched.lastName && errors.lastName)}
							helperText={touched.lastName ? errors.lastName : undefined}
						/>
					}
				/>

				<InputField
					type='email'
					label='Email'
					{...getFieldProps('email')}
					isWarning={Boolean(touched.email && errors.email)}
					helperText={touched.email ? errors.email : undefined}
				/>

				<SplitWrapper
					right={
						<InputField
							type={showPassword ? 'text' : 'password'}
							label='Password'
							classes='flex-auto mr-2'
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
					}
					left={
						<InputField
							type={showConfirmPassword ? 'text' : 'Password'}
							label='Confirm Password'
							classes='flex-auto ml-2'
							isWarning={Boolean(
								touched.confirmPassword && errors.confirmPassword,
							)}
							helperText={
								touched.confirmPassword ? errors.confirmPassword : undefined
							}
							{...getFieldProps('confirmPassword')}
							fieldAdornment={
								<Button
									type='button'
									class='absolute top-0 right-0 rounded-l-none btn btn-ghost hover:bg-transparent'
									onClickFunc={handleShowConfirmPassword}
									label={
										showConfirmPassword ? (
											<i className='fas fa-eye'></i>
										) : (
											<i className='fas fa-eye-slash'></i>
										)
									}
								/>
							}
						/>
					}
				/>

				<SplitWrapper
					right={
						<TickBox
							text='Remember me?'
							checked={remember}
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
					label='Register'
					class='btn btn-block btn-primary'
					isDisable={disable}
					isLoading={isSubmitting}
				/>
			</Form>
		</FormikProvider>
	)
}
