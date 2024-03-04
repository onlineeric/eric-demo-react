import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useNotAuthRoutesObjs } from './routes';

export default function NotAuthPage() {
	const routesObjects = useRoutes(useNotAuthRoutesObjs);

	return <>{routesObjects}</>;
}
