import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface LoginState {
	loggedIn: boolean;
	loginName: string;
}

const initialState: LoginState = {
	loggedIn: true,
	loginName: 'Eric Cheng',
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		logOff: (state) => {
			state.loggedIn = false;
			state.loginName = '';
		},
		logIn: (state, action: PayloadAction<string>) => {
			state.loggedIn = true;
			state.loginName = action.payload;
		},
	},
});

export const { logOff, logIn } = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const IsLoggedIn = (state: RootState) => state.login.loggedIn;

export default loginSlice.reducer;
