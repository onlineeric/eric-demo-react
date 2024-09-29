import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import RecentOrders from './RecentOrders';
import Counter from './Counter';

export default function Dashboard() {
	return (
		<Grid container spacing={3}>
			{/* Chart */}
			<Grid size={{ xs: 12, md: 8, lg: 9 }}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 240,
					}}
				>
					<Chart />
				</Paper>
			</Grid>
			{/* Recent Deposits */}
			<Grid size={{ xs: 12, md: 4, lg: 3 }}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 240,
					}}
				>
					<Deposits />
				</Paper>
			</Grid>
			{/* Recent Orders */}
			<Grid size={{ xs: 12 }}>
				<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					<RecentOrders />
				</Paper>
			</Grid>
			{/* Counter */}
			<Grid size={{ xs: 12 }}>
				<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					<Counter />
				</Paper>
			</Grid>
		</Grid>
	);
}
