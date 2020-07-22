import React from 'react';
import Logo from './img/logo.svg';

const Header = () => {
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<div className='logo-container'>
					<img src={Logo} alt='logo' className='logo' />
					React SVG Plot
				</div>
			</h1>
		</nav>
	);
};

export default Header;
