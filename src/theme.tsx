import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react';
import { FunctionComponent } from 'react';

export interface Theme {
	primary: {
		primary: string;
		pct50: string;
		pct10: string;
	};
	neutral: {
		primary: string;
		pct50: string;
		pct10: string;
	};
	error: {
		primary: string;
		pct50: string;
		pct10: string;
	};
	success: {
		primary: string;
		pct50: string;
		pct10: string;
	};
	warning: {
		primary: string;
		pct50: string;
		pct10: string;
	};
	contrast: {
		pct100: string;
		pct90: string;
		pct80: string;
		pct70: string;
		pct60: string;
		pct50: string;
		pct40: string;
		pct30: string;
		pct20: string;
		pct10: string;
		pct5: string;
		pct2p5: string;
	};
	black: string;
	white: string;
}

export const DEFAULT_THEME: Theme = {
	primary: {
		primary: '#1b4835FF',
		pct50: '#1B483580',
		pct10: '#1B483533',
	},
	neutral: {
		primary: '#EFE5C7FF',
		pct50: '#EFE5C780',
		pct10: '#EFE5C733',
	},
	error: {
		primary: '#861C23FF',
		pct50: '#861C2380',
		pct10: '#861C2333',
	},
	success: {
		primary: '#4A6B30FF',
		pct50: '#4A6B3080',
		pct10: '#4A6B3033',
	},
	warning: {
		primary: '#D3B561FF',
		pct50: '#D3B56180',
		pct10: '#D3B56133',
	},
	contrast: {
		pct100: '#192434FF',
		pct90: '#182739F0',
		pct80: '#1A293DD4',
		pct70: '#1B2B41B0',
		pct60: '#1C2E459C',
		pct50: '#1C304A80',
		pct40: '#1C324F61',
		pct30: '#1C345442',
		pct20: '#1C375A33',
		pct10: '#1A39601A',
		pct5: '#193B670D',
		pct2p5: '#193B6706',
	},
	black: '#000000',
	white: '#FFFFFF',
};

export const themeBuilder = (theme?: Theme): Theme => ({
	...DEFAULT_THEME,
	...theme,
});

export const RohirrimThemeProvider: FunctionComponent<{ theme?: Theme }> = ({ children, theme }) => {
	return <EmotionThemeProvider theme={themeBuilder(theme)}>{children}</EmotionThemeProvider>;
};
