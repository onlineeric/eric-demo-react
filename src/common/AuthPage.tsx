import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@emotion/react';
import Copyright from '../common/Copyright';
import AppBar from '../common/AppBar';
import SideDrawer from '../common/SideDrawer';
import { useLocation, useRoutes } from 'react-router-dom';
import { routeTitles, useRoutesObjects } from './routes';

const drawerWidth: number = 240;

export default function AuthPage() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const defaultTheme = useTheme();
	const currentPath = useLocation().pathname;

	const routesObjects = useRoutes(useRoutesObjects);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{ display: 'flex' }}>
				<AppBar open={open} drawerwidth={drawerWidth} toggleDrawer={toggleDrawer} title={routeTitles[currentPath]} />
				<SideDrawer open={open} drawerwidth={drawerWidth} toggleDrawer={toggleDrawer} />
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) => theme.palette.background.default,
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<Toolbar />
					<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
						{routesObjects}
						<Copyright sx={{ pt: 4 }} />
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
