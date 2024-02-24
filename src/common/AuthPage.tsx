import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';

export default function AuthPage() {
	const element = useRoutes([
		{ path: '/', element: <Dashboard /> },
		{ path: '*', element: <Navigate to="/" replace /> },
	]);

	return element;
}
