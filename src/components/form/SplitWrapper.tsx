import React, { ReactNode } from 'react'

type InputType = {
	left: ReactNode
	right: ReactNode
}

export default function SplitWrapper({ left, right }: InputType) {

	return (
		<div className='flex items-center justify-between'>
			{right}
			{left}
		</div>
	)
}
