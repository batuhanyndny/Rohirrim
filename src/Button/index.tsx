import React from 'react';
import { memo, NamedExoticComponent } from 'react';
import './Button.scss';

const Button: NamedExoticComponent = memo(() => {
	return <button>HW</button>;
});

Button.displayName = 'Button';

export default Button;
