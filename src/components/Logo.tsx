import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo512.png'

export default function Logo({ imgClasses }: { imgClasses?: string }) {
	var defaultClasses = 'w-10 h-10'
	var classes = (imgClasses == null || imgClasses.length === 0) ? defaultClasses : imgClasses
	return (
		<div className="flex justify-center mt-6 font-bold">
			<Link to="/">
				<img className={classes} src={logo} alt="Website Logo" />
			</Link>
		</div>
	)
}