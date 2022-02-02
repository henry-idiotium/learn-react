import clsx from 'clsx'
import {
	AuthInfo,
	initialAuthInfoState as initialState,
	LocalStorageNames as localKeys,
	PathNames as Path,
} from 'common'
import { useGetUsersQuery } from 'generated/graphql'
import { useLocalStorage } from 'hooks'
import React, { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialInput = {
	page: null,
	filters: null,
	pageSize: null,
	sorts: null,
}

export default function Dashboard() {
	const navigate = useNavigate()
	const [page, setPage] = useState(1)
	const [rows, setRows] = useState<JSX.Element[]>()
	const [headerElements, setHeaderElements] = useState<ReactNode[]>()
	const [pageButtons, setPageButtons] = useState<ReactNode[]>()
	const [auth] = useLocalStorage<AuthInfo>(localKeys.AUTH_INFO, initialState)

	const { data, refetch } = useGetUsersQuery({
		variables: {
			request: initialInput,
			authToken: auth.token.accessToken,
		},
		onError: ({ graphQLErrors }) => {
			if (
				graphQLErrors.find((err) => err.extensions.code === 'UNAUTHENTICATED')
			) {
				localStorage.removeItem(localKeys.AUTH_INFO)
				navigate(Path.LOGIN, { replace: true })
			}
		},
	})

	const handlePageChoice = (index: number) => {
		if (!(index === page)) {
			setPage(() => index)
			refetch({
				request: {
					...initialInput,
					page: index,
				},
			})
		}
	}

	useEffect(() => {
		if (data?.users?.data?.rows) {
			const headers = [
				'Username',
				'First Name',
				'Last Name',
				'Email',
				'Date Of Birth',
			]
			const response = data.users.data
			let count = (response.currentPage! - 1) * response.count!
			setRows(
				response.rows?.map((e) => (
					<tr className='hover' key={e?.id}>
						<td key={`${Math.random()}`}>{count++}</td>
						<td key={`${Math.random()} ${e?.userName}`}>{e?.userName}</td>
						<td key={`${Math.random()} ${e?.firstName}`}>{e?.firstName}</td>
						<td key={`${Math.random()} ${e?.lastName}`}>{e?.lastName}</td>
						<td key={`${Math.random()} ${e?.email}`}>{e?.email}</td>
						<td key={`${Math.random()} ${e?.dateOfBirth}`}>{e?.dateOfBirth}</td>
					</tr>
				)),
			)

			const elements: ReactNode[] = [<th key={`${Math.random()}`}></th>]
			headers.map((e) => elements.push(<th key={`${Math.random()}`}> {e}</th>))
			setHeaderElements(elements)

			const buttons: ReactNode[] = []
			for (let i = 1; i <= response.totalPages; i++) {
				buttons.push(
					<button
						onClick={() => handlePageChoice(i)}
						className={clsx(
							'btn btn-neutral',
							i === response.currentPage && 'btn-active btn-disabled',
						)}
						key={i}
					>
						{i}
					</button>,
				)
			}
			setPageButtons(buttons)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.users?.data, refetch])

	return (
		<div className='overflow-x-auto mt-14'>
			<table className='table w-full'>
				<thead>
					<tr>{headerElements}</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			<div className='flex justify-end mt-4 btn-group'>{pageButtons}</div>
		</div>
	)
}
