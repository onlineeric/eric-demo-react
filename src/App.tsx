import React, { useState } from 'react';
import AuthPage from './common/AuthPage';

export default function App() {
	const [loggedIn] = useState(true); // todo: implement login and Redux

	return <>{loggedIn ? <AuthPage /> : <div>Need to implement login page</div>}</>;
}
