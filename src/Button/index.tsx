import React, { forwardRef, ReactNode } from 'react';
import { memo, NamedExoticComponent } from 'react';
import styled from '@emotion/styled';

export type ButtonProps = {
	children: ReactNode;
	disabled?: boolean;
	textAlign?: 'left' | 'center' | 'right';
	icon?: ReactNode;
	iconPosition?: 'left' | 'right';
};

const StyledButton = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: ${({ textAlign }) => textAlign};
	gap: 0.25rem;
	border: none;
	border-radius: 0.2rem;
	padding: 0.5rem;
	cursor: pointer;
	color: ${({ theme }) => theme.primary.primary};
	background-color: ${({ theme }) => theme.neutral.pct50};
	:hover {
		background-color: ${({ theme }) => theme.primary.pct10};
	}
	:disabled {
		background-color: ${({ theme }) => theme.contrast.pct40};
		cursor: not-allowed;
	}

	& > span {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const Button: NamedExoticComponent<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, disabled, icon, iconPosition = 'left', textAlign = 'center' }, ref) => (
		<StyledButton ref={ref} disabled={disabled} textAlign={textAlign}>
			{iconPosition === 'left' && icon && <span>{icon}</span>}
			{children}
			{iconPosition === 'right' && icon && <span>{icon}</span>}
		</StyledButton>
	),
);

Button.displayName = 'Button';

export default memo(Button);
