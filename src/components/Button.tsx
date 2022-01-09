import { FieldInputProps } from 'formik'
import React, { MouseEventHandler, ReactNode } from 'react'

type InputType = {
	type: 'submit' | 'reset' | 'button' | undefined
	class: string
	label: string | ReactNode
	onClickFunc?: MouseEventHandler<HTMLButtonElement>
	isDisable?: boolean
	isLoading?: boolean
	fieldInputs?: FieldInputProps<any>
}

export default function Button({ type: btnType, class: classes, label, onClickFunc, isDisable, isLoading, ...fieldInputs }
	: InputType) {

	const btnIsLoading = isLoading ? 'loading' : ''
	const btnIsDisable = isDisable ? 'btn-disabled' : ''
	const btnLabel = !isLoading ? label : ''
	return (
		<button onClick={onClickFunc} type={btnType} {...fieldInputs}
			className={[classes, btnIsLoading, btnIsDisable].join(' ')}
			aria-label={`${btnType}`}>
			{btnLabel}
		</button>
	)
}