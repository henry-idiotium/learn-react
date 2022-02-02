import {
	AuthInfo,
	initialAuthInfoState,
	LocalStorageNames as localKeys,
	PathNames as Path,
} from 'common'
import useLocalStorage from 'hooks/useLocalStorage'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoute() {
	const [auth] = useLocalStorage<AuthInfo>(
		localKeys.AUTH_INFO,
		initialAuthInfoState,
	)

	return auth.id === '' || auth.token.accessToken === '' ? (
		<Outlet />
	) : (
		<Navigate to={Path.HOME} />
	)
}
