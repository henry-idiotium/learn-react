import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik, Form, FormikProvider } from 'formik'
import * as Yup from 'yup'
// components
import Button from '../Button'
import InputField from '../InputField'
import SplitWrapper from '../form/SplitWrapper'

type State = {
	email: string
	password: string
	remember: boolean
}

const initialState: State = {
	email: '',
	password: '',
	remember: false
}

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Email must be a valid email address').required('Email is required'),
	password: Yup.string().required('Password is required')
})

// ----------------------------------------------------------------
export default function LoginForm() {
	const navigate = useNavigate()
	const [showPassword, setShowPassword] = useState(false)
	const [isRemember, setIsRemember] = useState(false)
	const [disable, setIsDisable] = useState(true)

	const formik = useFormik({
		initialValues: initialState,
		validationSchema: LoginSchema,
		onSubmit: (values) => {
			// TODO: Implement Login api logic
			navigate('/', { replace: true })
			setInterval(() => console.table(values), 5000)
		}
	})
	const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik

	useEffect(() => {
		if (values.email.trim() && values.password.trim())
			return setIsDisable(false)
		else
			return setIsDisable(true)
	}, [values.email, values.password, disable])

	const handleIsRemember = () => {
		values.remember = !values.remember
		setIsRemember((remember) => !remember)
	}
	const handleShowPassword = () => setShowPassword((show) => !show)

	return (
		<FormikProvider value={formik}>
			<Form onSubmit={handleSubmit} autoComplete='off' className='space-y-6' noValidate>

				<InputField type='email' label='Email'
					{...getFieldProps('email')}
					isWarning={Boolean(touched.email && errors.email)}
					helperText={touched.email ? errors.email : undefined} />

				<InputField type={showPassword ? 'text' : 'password'} label='Password'
					isWarning={Boolean(touched.password && errors.password)}
					helperText={touched.password ? errors.password : undefined}
					{...getFieldProps('password')}
					fieldAdornment={
						<Button
							type='button'
							class='absolute top-0 right-0 rounded-l-none btn btn-neutral'
							onClickFunc={handleShowPassword}
							label={showPassword ?
								<i className='fas fa-eye'></i> :
								<i className='fas fa-eye-slash'></i>} />} />
				<SplitWrapper
					right={
						<label className='cursor-pointer label'>
							<input type='checkbox' checked={isRemember} onChange={handleIsRemember}
								className='border-2 checkbox checkbox-sm' />
							<span className='ml-2 text-gray-600 cursor-pointer label-text'>Remember me?</span>
						</label>
					}
					left={
						<Link to='/' className='text-sm font-medium text-blue-500 link link-neutral'>
							Forgot password?
						</Link>
					} />

				<Button
					type='submit'
					label='Log in'
					class='btn btn-block btn-neutral'
					isDisable={disable}
					isLoading={isSubmitting} />

			</Form>
		</FormikProvider>
	)
}
