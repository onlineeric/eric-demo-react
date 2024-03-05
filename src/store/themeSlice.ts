import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface themeState {
	mode: 'dark' | 'light';
}

const initialState: themeState = {
	mode: 'dark',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleThemeMode: (state) => {
			state.mode = state.mode === 'dark' ? 'light' : 'dark';
		},
	},
});

export const { toggleThemeMode } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getThemeMode = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
