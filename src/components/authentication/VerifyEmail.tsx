/* eslint-disable react-hooks/exhaustive-deps */
import { PathNames } from 'common'
import { useVerifyEmailMutation } from 'generated/graphql'
import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

export default function VerifyEmail() {
	const [verifyEmail] = useVerifyEmailMutation()
	let { code, userId } = useParams()

	useEffect(() => {
		;(async () => {
			const { errors } = await verifyEmail({
				variables: { request: { code, userId } },
				onError: () => {
					return <Navigate to={PathNames.ROOT} />
				},
			})

			if (errors) return <Navigate to={PathNames.REGISTER} />
		})()
	}, [])

	return <Navigate to={PathNames.LOGIN} />
}
