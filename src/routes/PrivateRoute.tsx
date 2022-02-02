/* eslint-disable react-hooks/exhaustive-deps */
import {
	AuthInfo,
	initialAuthInfoState,
	LocalStorageNames as localKeys,
	PathNames as Path,
} from 'common'
import { useRotateTokenMutation, useGetAuthInfoQuery } from 'generated/graphql'
import useLocalStorage from 'hooks/useLocalStorage'
import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

export default function PrivateRoute() {
	const navigate = useNavigate()
	const [auth, setAuth] = useLocalStorage<AuthInfo>(
		localKeys.AUTH_INFO,
		initialAuthInfoState,
	)
	const {
		data: dataAuth,
		error: errorAuth,
		loading: loadingAuth,
	} = useGetAuthInfoQuery({
		variables: { request: { accessToken: auth.token.accessToken } },
	})
	const [rotate, { data: dataRotate, loading: loadingRotate }] =
		useRotateTokenMutation()

	useEffect(() => {
		if (loadingAuth) return
		if (
			!auth?.id &&
			!(auth?.token?.accessToken?.length > 0) &&
			!(auth?.token?.refreshToken?.length > 0)
		) {
			localStorage.removeItem(localKeys.AUTH_INFO)
			navigate(Path.ROOT, { replace: true })
		}

		const validateResponse = dataAuth?.authInfo
		if (
			!errorAuth &&
			!validateResponse?.data &&
			auth?.token?.accessToken?.length > 0 &&
			auth?.token?.refreshToken?.length > 0
		) {
			if (loadingRotate) return
			rotate({
				variables: {
					request: {
						accessToken: auth.token?.accessToken,
						refreshToken: auth.token?.refreshToken,
					},
				},
			})

			const rotateResponse = dataRotate?.rotate?.data
			setAuth({
				id: rotateResponse?.userInfo?.id!,
				token: {
					accessToken: rotateResponse?.accessToken?.token!,
					refreshToken: rotateResponse?.refreshToken!,
				},
			})
		}
	}, [])

	if (errorAuth) return <Navigate to={Path.LOGIN} />
	return auth.id !== '' && auth.token.accessToken !== '' ? (
		<Outlet />
	) : (
		<Navigate to={Path.ROOT} />
	)
}
