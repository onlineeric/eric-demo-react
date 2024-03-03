import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { Button, TextField } from '@mui/material';
import { decrement, increment, incrementByAmount } from '../store/counterSlice';

export default function Counter() {
	// The `state` arg is correctly typed as `RootState` already
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();
	const [incrementAmount, setIncrementAmount] = React.useState(0);

	return (
		<React.Fragment>
			<Title>A Counter to test the Redux store</Title>
			<Typography component="p" variant="h4">
				{count}
			</Typography>
			<Typography color="text.secondary" sx={{ flex: 1 }}>
				Click below buttons to change the counter
			</Typography>
			<div>
				<Button onClick={() => dispatch(increment())}>Increment</Button>
				<Button onClick={() => dispatch(decrement())}>Decrement</Button>
				<Button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Increase by amount:</Button>
				<TextField type="number" onChange={(e) => setIncrementAmount(Number(e.target.value))} />
			</div>
		</React.Fragment>
	);
}
