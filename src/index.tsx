import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import getTheme from './getTheme';
import store from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
	<Provider store={store}>
		<ThemeProvider theme={getTheme('dark')}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</Provider>,
);
