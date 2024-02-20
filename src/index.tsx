import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import getTheme from './getTheme';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
	<ThemeProvider theme={getTheme('dark')}>
		{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
		<CssBaseline />
		<App />
	</ThemeProvider>,
);
