import React from 'react';
import FontAwesome from 'react-fontawesome';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if(isSignedIn) {
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='f5 link dim black pa2 pointer underline-hover'>
					<FontAwesome name="sign-out" />
					{' Sign Out'}
				</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='f5 link dim black pa2 pointer underline-hover'>
					<FontAwesome name="user" />
					{' Sign In'}
				</p>
				<p onClick={() => onRouteChange('register')} className='f5 link dim black pa2 pointer underline-hover'>
					<FontAwesome name="user-plus" />
					{' Register'}
				</p>
			</nav>
		);
	}
}

export default Navigation;