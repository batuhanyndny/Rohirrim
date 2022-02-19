import React, { forwardRef, ReactNode } from 'react';
import { memo, NamedExoticComponent } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
	color: ${({ theme }) => theme.primary.primary};
	border: none;
	border-radius: 0.2rem;
	padding: 0.5rem;
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.primary.pct10};
	}
	background-color: ${({ theme }) => theme.neutral.pct50};
`;

const Button: NamedExoticComponent<{ children: ReactNode }> = forwardRef<HTMLButtonElement, { children: ReactNode }>(({ children }, ref) => (
	<StyledButton ref={ref}>{children}</StyledButton>
));

Button.displayName = 'Button';

export default memo(Button);
