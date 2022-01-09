import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik, Form, FormikProvider } from 'formik'
import * as Yup from 'yup'
// components
import SplitWrapper from '../form/SplitWrapper'
import InputField from '../InputField'
import TickBox from '../TickBox'
import Button from '../Button'

export default function RegisterForm() {
	const navigate = useNavigate()
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [isRemember, setIsRemember] = useState(false)
	const [disable, setIsDisable] = useState(true)

	const formik = useFormik({
		initialValues: initialState,
		validationSchema: LoginSchema,
		onSubmit: (values) => {
			// TODO: Implement Register api logic
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
	const handleShowConfirmPassword = () => setShowConfirmPassword((show) => !show)

	return (
		<FormikProvider value={formik}>
			<Form onSubmit={handleSubmit} autoComplete='off' className='space-y-6' noValidate>

				<SplitWrapper
					right={
						<InputField type='firstName' label='First Name'
							extraClasses='flex-auto mr-2'
							{...getFieldProps('firstName')}
							isWarning={Boolean(touched.firstName && errors.firstName)}
							helperText={touched.firstName ? errors.firstName : undefined} />
					}
					left={
						<InputField type='lastName' label='Last Name'
							extraClasses='flex-auto ml-2'
							{...getFieldProps('lastName')}
							isWarning={Boolean(touched.lastName && errors.lastName)}
							helperText={touched.lastName ? errors.lastName : undefined} />
					}
				/>

				<InputField type='email' label='Email'
					{...getFieldProps('email')}
					isWarning={Boolean(touched.email && errors.email)}
					helperText={touched.email ? errors.email : undefined} />

				<SplitWrapper
					right={
						<InputField type={showPassword ? 'text' : 'password'} label='Password'
							extraClasses='flex-auto mr-2'
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
					}
					left={
						<InputField type={showConfirmPassword ? 'text' : 'Password'} label='Confirm Password'
							extraClasses='flex-auto ml-2'
							isWarning={Boolean(touched.confirmPassword && errors.confirmPassword)}
							helperText={touched.confirmPassword ? errors.confirmPassword : undefined}
							{...getFieldProps('confirmPassword')}
							fieldAdornment={
								<Button
									type='button'
									class='absolute top-0 right-0 rounded-l-none btn btn-neutral'
									onClickFunc={handleShowConfirmPassword}
									label={showConfirmPassword ?
										<i className='fas fa-eye'></i> :
										<i className='fas fa-eye-slash'></i>} />} />
					}
				/>

				<SplitWrapper
					right={
						<TickBox
							text='Remember me?'
							checked={isRemember}
							onChangeFunc={handleIsRemember} />
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

type State = {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
	remember: boolean
}

const initialState: State = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	remember: false
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
		.email('Email must be a valid email address'),
	password: Yup.string()
		.required('Password is required'),
	confirmPassword: Yup.string()
		.required('Confirm password is required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
})
