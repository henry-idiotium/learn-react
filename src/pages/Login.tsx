import React from 'react'
import LoginForm from '../components/authentication/LoginForm';

export default function Login() {

	return (
		<div className="flex flex-col items-center justify-center max-h-screen mt-20">
			<div className="w-full max-w-md px-8 py-6 mx-auto bg-white shadow-2xl card">
				<div className="card-body">
					<div className="card-title">
						<div className="mt-2 mb-4 text-3xl font-bold text-center text-gray-900 uppercase">
							Login
						</div>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	)
}