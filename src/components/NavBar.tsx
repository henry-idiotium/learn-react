import { LocalStorageNames as LocalKeys } from 'common'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({
	username,
	loading,
}: {
	username?: string | null
	loading?: boolean
}) {
	const handleLogout = () => localStorage.removeItem(LocalKeys.AUTH_INFO)

	return (
		<div className='mb-2 shadow-lg navbar bg-neutral text-neutral-content rounded-box'>
			<div className='px-2 mx-2 navbar-start'>
				<span className='text-lg font-bold'>LarnEact</span>
			</div>
			<div className='hidden px-2 mx-2 navbar-center lg:flex'>
				<div className='flex items-stretch'>
					<Link to='/' className='btn btn-sm rounded-btn'>
						Home
					</Link>
					<Link to='' className='btn btn-sm rounded-btn'>
						Notifications
					</Link>
					<Link to='' className='btn btn-sm rounded-btn'>
						Files
					</Link>
					<Link to='' className='btn btn-sm rounded-btn'>
						Config
					</Link>
				</div>
			</div>
			<div className='navbar-end'>
				<div className='dropdown dropdown-end dropdown-hover'>
					<div className='avatar'>
						<div className='w-10 h-10 m-1 rounded-full'>
							<img
								src='https://images.unsplash.com/photo-1530533718754-001d2668365a?&w=700&h=700&crop=faces&fit=crop'
								alt='profile'
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className='py-3 border border-gray-700 shadow-lg w-48 dropdown-content menu bg-base-100 rounded-box'
					>
						<li className='truncate menu-title w-44'>
							{!loading ? (
								<span>{username}</span>
							) : (
								<span className='content-center'>...</span>
							)}
						</li>

						<li className='hover-bordered'>
							<Link to=''>
								<i className='mr-3 fas fa-user-circle'></i>
								Profile
							</Link>
						</li>
						<li className='hover-bordered'>
							<Link to=''>
								<i className='mr-3 fas fa-cog'></i>
								Settings
							</Link>
						</li>
						<li className='hover-bordered'>
							<Link to='/' onClick={handleLogout}>
								<i className='mr-3 fas fa-sign-out-alt'></i>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
