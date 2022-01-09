import { FieldInputProps } from 'formik'
import React, { HTMLInputTypeAttribute, ReactNode } from 'react'

type InputType = {
	type: HTMLInputTypeAttribute | undefined
	label: string
	isWarning?: boolean
	helperText?: string
	extraClasses?: string
	fieldAdornment?: ReactNode
	fieldInputs?: FieldInputProps<any>
}

// CAN-BE-IMPROVED: by implement fieldAdornment placement e.g., end, start
export default function InputField({ type: inputType, label, extraClasses, isWarning, helperText,
	fieldAdornment, ...fieldInputs }: InputType) {

	var disable = fieldAdornment == null || fieldAdornment === undefined

	return (
		<div className={['form-control', extraClasses].join(' ')}>
			<label className='font-bold label'>
				<span className='label-text'>{label}</span>
			</label>
			<div className={!disable ? 'relative' : ''}>
				<input
					type={inputType}
					placeholder={label}
					className='w-full input input-bordered'
					{...fieldInputs} />

				{disable ? undefined : fieldAdornment}

				{!isWarning ? <></> :
					<p className='pl-2 pt-2 text-xs text-red-400'>
						{helperText}
					</p>}
			</div>
		</div>
	)
}