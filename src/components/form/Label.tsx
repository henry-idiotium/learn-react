import React, { ReactNode } from 'react'

// DEPRECATED: Waited to be used once more
export default function Label({ type = 'any', class: extraClasses, text, icon }: InputType) {
	if (type !== 'any' && (icon == null || icon === undefined))
		icon = defaultIcons.find(i => i.name === type)!.element

	const classes = labelTypes.find(l => l.name === type)!.classes

	return (
		<div className={[classes, extraClasses].join(' ')}>
			<div className='flex-1'>
				{icon}
				<label>{text}</label>
			</div>
		</div>
	)
}

type InputType = {
	type: 'any' | 'success' | 'info' | 'warning' | 'error'
	class?: string
	text: string
	icon?: ReactNode
}

const labelTypes = [
	{ name: 'any', classes: 'alert' },
	{ name: 'success', classes: 'alert alert-success' },
	{ name: 'info', classes: 'alert alert-info' },
	{ name: 'warning', classes: 'alert alert-warning' },
	{ name: 'error', classes: 'alert alert-error' },
]

const defaultIcons = [
	{
		name: 'success', element:
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
			</svg>
	},
	{
		name: 'info', element:
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
	},
	{
		name: 'error', element:
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
			</svg>
	},
	{
		name: 'warning', element:
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
			</svg>
	}
]