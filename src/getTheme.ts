import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

const getTheme = (mode: 'light' | 'dark') =>
	createTheme({
		palette: {
			mode: mode,
			primary: {
				main: '#556cd6',
			},
			secondary: {
				main: '#19857b',
			},
			error: {
				main: red.A400,
			},
			background: {
				default: mode === 'light' ? grey[100] : grey[800],
			},
		},
	});

export default getTheme;
