import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

const mainListItemsData = [
	{ icon: DashboardIcon, text: 'Dashboard', route: '/home' },
	{ icon: ShoppingCartIcon, text: 'Orders', route: '/orders' },
	{ icon: PeopleIcon, text: 'Customers' },
	{ icon: BarChartIcon, text: 'Reports' },
	{ icon: LayersIcon, text: 'Integrations' },
];

const secondaryListItemsData = [
	{ icon: AssignmentIcon, text: 'Current month', route: '/current-month' },
	{ icon: AssignmentIcon, text: 'Last quarter' },
	{ icon: AssignmentIcon, text: 'Year-end sale' },
];

export const MainListItems = () => {
	const navigate = useNavigate();
	const handleItemClick = (route: string | undefined) => {
		if (route) {
			navigate(route);
		}
	};

	return (
		<React.Fragment>
			{mainListItemsData.map((item, index) => (
				<ListItemButton key={index} onClick={() => handleItemClick(item.route)}>
					<ListItemIcon>
						<item.icon />
					</ListItemIcon>
					<ListItemText primary={item.text} />
				</ListItemButton>
			))}
		</React.Fragment>
	);
};

export const SecondaryListItems = () => {
	const navigate = useNavigate();
	const handleItemClick = (route: string | undefined) => {
		if (route) {
			navigate(route);
		}
	};

	return (
		<React.Fragment>
			<ListSubheader component="div" inset>
				Saved reports
			</ListSubheader>
			{secondaryListItemsData.map((item, index) => (
				<ListItemButton key={index} onClick={() => handleItemClick(item.route)}>
					<ListItemIcon>
						<item.icon />
					</ListItemIcon>
					<ListItemText primary={item.text} />
				</ListItemButton>
			))}
		</React.Fragment>
	);
};
