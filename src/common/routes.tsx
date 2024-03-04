import React, { useEffect } from 'react';
import Dashboard from '../dashboard/Dashboard';
import Orders from '../orders/Orders';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { logOff } from '../store/loginSlice';

// Logoff component
const Logoff = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		console.log('Logoff action');
		dispatch(logOff());
	}, []);

	return <div>Logging off...</div>;
};

export const routes = [
	{ path: '/home', element: <Dashboard />, title: 'Dashboard Home' },
	{ path: '/orders', element: <Orders />, title: 'Orders' },
	{ path: '/login', element: <Logoff />, title: 'Login' },
	{ path: '/status', element: <div>status page</div>, title: 'Status' },
	{ path: '*', element: <Navigate to="/home" replace /> },
];

export const useRoutesObjects = routes.map(({ path, element }) => ({ path, element }));

export const routeTitles = Object.fromEntries(routes.map(({ path, title }) => [path, title]));
