import React, { useState } from 'react';
import Dashboard from './dashboard/Dashboard';

export default function App() {
	const [loggedIn] = useState(true); // todo: implement login and Redux

	return <div>{loggedIn ? <Dashboard /> : <div>Need to implement login page</div>}</div>;
}
