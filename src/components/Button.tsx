import { FieldInputProps } from 'formik'
import React, { MouseEventHandler, ReactNode } from 'react'
import clsx from 'clsx'

type InputType = {
	type: 'submit' | 'reset' | 'button' | undefined
	class: string
	label: string | ReactNode
	onClickFunc?: MouseEventHandler<HTMLButtonElement>
	isDisable?: boolean
	isLoading?: boolean
	fieldInputs?: FieldInputProps<any>
}

export default function Button({
	type: btnType,
	class: classes,
	label,
	onClickFunc,
	isDisable,
	isLoading,
	...fieldInputs
}: InputType) {
	return (
		<button
			onClick={onClickFunc}
			type={btnType}
			{...fieldInputs}
			className={clsx(
				classes,
				isLoading && 'loading',
				isDisable && 'btn-disabled',
			)}
			aria-label={`${btnType}`}
		>
			{!isLoading && label}
		</button>
	)
}
