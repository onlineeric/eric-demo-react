import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import getTheme from './getTheme';
import store from './store/store';
import { Provider } from 'react-redux';
import { useAppSelector } from './store/hooks';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

const WrappedApp = () => {
	return (
		<Provider store={store}>
			<ThemedApp />
		</Provider>
	);
};

const ThemedApp = () => {
	const themeMode = useAppSelector((state) => state.theme.mode);

	return (
		<ThemeProvider theme={getTheme(themeMode)}>
			<CssBaseline />
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	);
};

root.render(<WrappedApp />);
