import React from 'react';
import AuthPage from './common/AuthPage';
import { useAppSelector } from './store/hooks';
import { IsLoggedIn } from './store/loginSlice';
import NotAuthPage from './common/NotAuthPage';

export default function App() {
	const loggedIn = useAppSelector(IsLoggedIn);

	return <>{loggedIn ? <AuthPage /> : <NotAuthPage />}</>;
}
