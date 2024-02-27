import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

// Sample data
const rows = [
	{ id: 1, orderNumber: 'Order001', customerName: 'John Doe', status: 'Delivered' },
	{ id: 2, orderNumber: 'Order002', customerName: 'Jane Doe', status: 'Processing' },
	{ id: 3, orderNumber: 'Order003', customerName: 'Alice', status: 'Delivered' },
	{ id: 4, orderNumber: 'Order004', customerName: 'Bob', status: 'Processing' },
	{ id: 5, orderNumber: 'Order005', customerName: 'Charlie', status: 'Delivered' },
	{ id: 6, orderNumber: 'Order006', customerName: 'David', status: 'Processing' },
	{ id: 7, orderNumber: 'Order007', customerName: 'Eve', status: 'Delivered' },
	{ id: 8, orderNumber: 'Order008', customerName: 'Frank', status: 'Processing' },
	{ id: 9, orderNumber: 'Order009', customerName: 'Grace', status: 'Delivered' },
	{ id: 10, orderNumber: 'Order010', customerName: 'Heidi', status: 'Processing' },
	{ id: 11, orderNumber: 'Order011', customerName: 'Ivan', status: 'Delivered' },
	{ id: 12, orderNumber: 'Order012', customerName: 'Judy', status: 'Processing' },
	{ id: 13, orderNumber: 'Order013', customerName: 'Mallory', status: 'Delivered' },
	{ id: 14, orderNumber: 'Order014', customerName: 'Ned', status: 'Processing' },
	{ id: 15, orderNumber: 'Order015', customerName: 'Olivia', status: 'Delivered' },
	{ id: 16, orderNumber: 'Order016', customerName: 'Peggy', status: 'Processing' },
	{ id: 17, orderNumber: 'Order017', customerName: 'Quincy', status: 'Delivered' },
	{ id: 18, orderNumber: 'Order018', customerName: 'Randy', status: 'Processing' },
	{ id: 19, orderNumber: 'Order019', customerName: 'Sybil', status: 'Delivered' },
	{ id: 20, orderNumber: 'Order020', customerName: 'Trudy', status: 'Processing' },
	{ id: 21, orderNumber: 'Order021', customerName: 'Trudy', status: 'Processing' },
];

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'orderNumber', headerName: 'Order Number', width: 130 },
	{ field: 'customerName', headerName: 'Customer Name', width: 130 },
	{ field: 'status', headerName: 'Status', width: 130 },
];

export default function Orders() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { pageSize: 5, page: 0 },
					},
				}}
				pageSizeOptions={[5, 10, 15]}
				checkboxSelection
			/>
		</Paper>
	);
}
