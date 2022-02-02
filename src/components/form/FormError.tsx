import React from 'react'

export default function FormError({ message }: { message: React.ReactNode }) {
	return (
		<p className='pl-2 pt-2 text-xs text-red-400'>
			<i className='fas fa-exclamation-triangle mr-1'></i> {message}
		</p>
	)
}
