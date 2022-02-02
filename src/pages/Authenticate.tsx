import { LoginForm, RegisterForm } from 'components/form'
import React from 'react'

export default function Authenticate({ form }: { form: 'register' | 'login' }) {
	return (
		<div className='flex flex-col items-center justify-center mt-10'>
			<div
				className={`w-full px-8 py-6 mx-auto shadow-2xl card bg-base-200 ${
					form === 'register' ? 'max-w-3xl' : 'max-w-md'
				}`}
			>
				<div className='card-body'>
					<div className='card-title'>
						<div className='mt-2 mb-4 text-3xl font-bold text-center uppercase'>
							{form}
						</div>
					</div>
					{form === 'register' ? <RegisterForm /> : <LoginForm />}
				</div>
			</div>
		</div>
	)
}
