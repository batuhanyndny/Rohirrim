/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import { Theme as RohirrimTheme } from './theme';

declare module '@emotion/react' {
	export interface Theme extends RohirrimTheme {}
}
