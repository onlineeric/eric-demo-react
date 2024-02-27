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

const mainListItemsData = [
	{ icon: DashboardIcon, text: 'Dashboard', route: '/home' },
	{ icon: ShoppingCartIcon, text: 'Orders' },
	{ icon: PeopleIcon, text: 'Customers' },
	{ icon: BarChartIcon, text: 'Reports' },
	{ icon: LayersIcon, text: 'Integrations' },
];

const secondaryListItemsData = [
	{ icon: AssignmentIcon, text: 'Current month' },
	{ icon: AssignmentIcon, text: 'Last quarter' },
	{ icon: AssignmentIcon, text: 'Year-end sale' },
];

export const mainListItems = (
	<React.Fragment>
		{mainListItemsData.map((item, index) => (
			<ListItemButton key={index}>
				<ListItemIcon>
					<item.icon />
				</ListItemIcon>
				<ListItemText primary={item.text} />
			</ListItemButton>
		))}
	</React.Fragment>
);

export const secondaryListItems = (
	<React.Fragment>
		<ListSubheader component="div" inset>
			Saved reports
		</ListSubheader>
		{secondaryListItemsData.map((item, index) => (
			<ListItemButton key={index}>
				<ListItemIcon>
					<item.icon />
				</ListItemIcon>
				<ListItemText primary={item.text} />
			</ListItemButton>
		))}
	</React.Fragment>
);
