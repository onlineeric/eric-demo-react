import React from 'react';
import AuthPage from './common/AuthPage';
import { useAppSelector } from './store/hooks';
import { IsLoggedIn } from './store/loginSlice';

export default function App() {
	const loggedIn = useAppSelector(IsLoggedIn);

	return <>{loggedIn ? <AuthPage /> : <div>Need to implement login page</div>}</>;
}
