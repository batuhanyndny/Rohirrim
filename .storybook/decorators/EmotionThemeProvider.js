import React from 'react';
import { DEFAULT_THEME } from '../../src/theme';
import { ThemeProvider } from 'emotion-theming';

const EmotionThemeProvider = storyFn => <ThemeProvider theme={DEFAULT_THEME}>{storyFn()}</ThemeProvider>;
export default EmotionThemeProvider;
