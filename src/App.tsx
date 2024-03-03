import React from 'react';
import AuthPage from './common/AuthPage';
import { useAppSelector } from './store/hooks';
import { IsLoggedIn } from './store/loginSlice';
import UnAuthPage from './common/UnAuthPage';

export default function App() {
	const loggedIn = useAppSelector(IsLoggedIn);

	return <>{loggedIn ? <AuthPage /> : <UnAuthPage />}</>;
}
