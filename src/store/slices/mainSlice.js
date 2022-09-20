import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: true,
};

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setIsLoading } = mainSlice.actions;
export default mainSlice.reducer;
