import React, { ChangeEventHandler } from 'react'

export default function TickBox({ text, checked, onChangeFunc }: InputType) {
	return (
		<div className='form-control'>
			<label className='cursor-pointer label'>
				<input type='checkbox' checked={checked} onChange={onChangeFunc}
					className='border-2 checkbox checkbox-sm' />
				<span className='ml-2 text-gray-600 cursor-pointer label-text'>
					{text}
				</span>
			</label>
		</div>
	)
}

type InputType = {
	text: string
	checked: boolean
	onChangeFunc: ChangeEventHandler<HTMLInputElement>
}