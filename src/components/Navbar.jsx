import React from 'react'
import {MdOutlineKeyboardArrowDown,MdSearch} from 'react-icons/md'

const Navbar = () => {
	return (
		<nav>
			<div className="navbar">
				<div className="left">
					<img src="./images/logo.svg" alt="Edyoda logo" />
					<span>courses <MdOutlineKeyboardArrowDown /></span>
					<span>programs <MdOutlineKeyboardArrowDown /></span>
				</div>
				<div className="right">
					<MdSearch />
					<span>login</span>
					<button className='join-btn'>join now</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar