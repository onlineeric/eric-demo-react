import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import Orders from '../orders/Orders';
import { Navigate } from 'react-router-dom';

export const routes = [
	{ path: '/home', element: <Dashboard />, title: 'Dashboard Home' },
	{ path: '/orders', element: <Orders />, title: 'Orders' },
	{ path: '/status', element: <div>status page</div>, title: 'Status' },
	{ path: '*', element: <Navigate to="/home" replace /> },
];

export const routeTitles = Object.fromEntries(routes.map(({ path, title }) => [path, title]));
