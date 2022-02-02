import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/images/logo512.png'
import clsx from 'clsx'

export default function Logo({ classes }: { classes?: string }) {
	return (
		<div className='flex justify-center mt-6 font-bold'>
			<Link to='/'>
				<img
					className={clsx('w-10 h-10', classes)}
					src={logo}
					alt='Website Logo'
				/>
			</Link>
		</div>
	)
}
