import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { Button } from '@mui/material';
// import { decrement, increment } from '../store/counterSlice';

function preventDefault(event: React.MouseEvent) {
	event.preventDefault();
}

export default function Counter() {
	// The `state` arg is correctly typed as `RootState` already
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<React.Fragment>
			<Title>A Counter to test the Redux store</Title>
			<Typography component="p" variant="h4">
				{count}
			</Typography>
			<Typography color="text.secondary" sx={{ flex: 1 }}>
				on 15 March, 2019
			</Typography>
			<div>
				<Link color="primary" href="#" onClick={preventDefault}>
					View balance
				</Link>
			</div>
			<Button onClick={() => dispatch({ type: 'counter/increment' })}>Increment</Button>
		</React.Fragment>
	);
}
