import React, { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
	return (
		<div className="md:container md:mx-auto my-5">
			{children}
		</div>
	)
}