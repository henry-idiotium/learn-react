import React, { ReactNode } from 'react'

type InputType = {
	left: ReactNode
	right: ReactNode
	disableClasses?: boolean
}

export default function SplitWrapper({ left, right, disableClasses = false }: InputType) {

	return (
		<div className={disableClasses ? '' : 'flex items-center justify-between'}>
			{right}
			{left}
		</div>
	)
}
