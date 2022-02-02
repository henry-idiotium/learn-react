import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
	return (
		<div className='flex flex-col items-center h-screen'>
			<div className='m-auto'>
				<h1 className='mb-8 font-semibold text-9xl'>
					<i className='mr-6 align-middle text-8xl fas fa-ban' aria-hidden='true'></i>
					404
				</h1>
				<p>Page not found. Check the address or{' '}
					<Link to='/' className='link link-hover link-primary'>
						go back
					</Link>
					.
				</p>
			</div>
		</div>
	)
}