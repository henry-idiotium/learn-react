import { PathNames as Path } from 'common'
import { Container } from 'components'
import { VerifyEmail } from 'components/authentication'
import { LogoOnlyLayout, UserLayout } from 'components/layouts'
import { Anonymous, Authenticate, Dashboard, Page404 } from 'pages'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from 'routes'

export default function App() {
	return (
		<Container>
			<Routes>
				<Route path='*' element={<Page404 />} />
				<Route element={<PrivateRoute />}>
					<Route element={<UserLayout />}>
						<Route path={Path.HOME} element={<Dashboard />} />
						<Route path={Path.DASHBOARD} element={<Dashboard />} />
					</Route>
				</Route>
				<Route element={<PublicRoute />}>
					<Route path={Path.ROOT} element={<></>} />
					<Route path='anonymous' element={<Anonymous />} />
					<Route element={<LogoOnlyLayout />}>
						<Route path={Path.LOGIN} element={<Authenticate form='login' />} />
						<Route
							path={Path.REGISTER}
							element={<Authenticate form='register' />}
						/>
					</Route>
					<Route
						path={`${Path.VERIFY_EMAIL}/:userId/:code`}
						element={<VerifyEmail />}
					/>
				</Route>
			</Routes>
		</Container>
	)
}
