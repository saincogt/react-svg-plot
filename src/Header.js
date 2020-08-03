import React from 'react';
import Logo from './img/logo.svg';
import Help from './img/help.svg';

const Header = ({ setOpen }) => {
	const handleClick = () => {
		setOpen(true);
	};
	return (
		<nav className='navbar bg-dark'>
			<div className='logo-container'>
				<img src={Logo} alt='logo' className='logo' />
				React SVG Plot
			</div>
			<div className='logo-container' onClick={handleClick}>
				<img src={Help} alt='instruction' className='instruction' />
			</div>
		</nav>
	);
};

export default Header;
