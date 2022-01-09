import React from 'react'
import { useRoutes } from 'react-router-dom'
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout'
// pages
import Login from './pages/Login'
import Register from './pages/Register'

export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <LogoOnlyLayout />,
			children: [
				{ element: <Login />, path: 'login' },
				{ element: <Register />, path: 'register' }
			]
		}
	])
}