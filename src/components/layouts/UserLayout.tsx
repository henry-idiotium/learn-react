import {
	AuthInfo,
	initialAuthInfoState as initialState,
	LocalStorageNames as localKeys,
} from 'common'
import { NavBar } from 'components'
import { useGetAuthInfoQuery } from 'generated/graphql'
import { useLocalStorage } from 'hooks'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Main() {
	const [auth] = useLocalStorage<AuthInfo>(localKeys.AUTH_INFO, initialState)
	const { data, loading } = useGetAuthInfoQuery({
		variables: {
			request: {
				accessToken: auth.token.accessToken,
			},
		},
	})

	return (
		<>
			<NavBar username={data?.authInfo?.data?.email} loading={loading} />
			<Outlet />
		</>
	)
}
