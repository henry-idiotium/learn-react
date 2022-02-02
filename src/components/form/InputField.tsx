import { FieldInputProps } from 'formik'
import React, { HTMLInputTypeAttribute, ReactNode } from 'react'
import FormError from './FormError'
import clsx from 'clsx'

type InputType = {
	type: HTMLInputTypeAttribute | undefined
	label: string
	isWarning?: boolean
	helperText?: string
	classes?: string
	fieldAdornment?: ReactNode
	fieldInputs?: FieldInputProps<any>
}

export default function InputField({
	type: inputType,
	label,
	classes,
	isWarning,
	helperText,
	fieldAdornment,
	...fieldInputs
}: InputType) {
	var disable = fieldAdornment == null || fieldAdornment === undefined

	return (
		<div className={clsx('form-control', classes)}>
			<label className='font-bold label'>
				<span className='label-text'>{label}</span>
			</label>
			<div className={!disable ? 'relative' : ''}>
				<input
					type={inputType}
					placeholder={label}
					className='w-full input input-bordered'
					{...fieldInputs}
				/>
				{disable ? undefined : fieldAdornment}
				{isWarning && <FormError message={helperText} />}
			</div>
		</div>
	)
}
