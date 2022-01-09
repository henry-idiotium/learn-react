import React from 'react'
import RegisterForm from '../components/authentication/RegisterForm';

export default function Register() {

	return (
		<div className="flex flex-col items-center justify-center mt-20 mb-40">
			<div className="w-full max-w-3xl px-8 py-6 mx-auto bg-white shadow-2xl card">
				<div className="card-body">
					<div className="card-title">
						<div className="mt-2 mb-4 text-3xl font-bold text-center text-gray-900 uppercase">
							Login
						</div>
					</div>
					<RegisterForm />
				</div>
			</div>
		</div>
	)
}