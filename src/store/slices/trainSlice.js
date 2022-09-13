import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	trains: [],
};

export const trainSlice = createSlice({
	name: 'trains',
	initialState,
	reducers: {
		setTrains: (state, action) => {
			state.trains = action.payload;
		},
	},
});

export const { setTrains } = trainSlice.actions;
export default trainSlice.reducer;