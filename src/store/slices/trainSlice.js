import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	trains: [],
};

export const trainSlice = createSlice({
	searchFrom: '',
	searchTo: '',
	name: 'trains',
	initialState,
	reducers: {
		setTrains: (state, action) => {
			state.trains = action.payload;
			console.log(state.searchFrom, state.searchTo);
		},
		setSearchFrom: (state, action) => {
			state.searchFrom = action.payload;
		},
		setSearchTo: (state, action) => {
			state.searchTo = action.payload;
		},
	},
});

export const { setTrains, setSearchFrom, setSearchTo } = trainSlice.actions;
export default trainSlice.reducer;
