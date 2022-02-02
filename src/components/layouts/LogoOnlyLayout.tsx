import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo } from 'components'

export default function LogoOnlyLayout() {
	return (
		<>
			<Logo />
			<Outlet />
		</>
	)
}
