import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	trains: [],
};

export const trainSlice = createSlice({
	seat: 0,
	van: 0,
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
		setVan: (state, action) => {
			state.van = action.payload;
		},
		setSeat: (state, action) => {
			state.seat = action.payload;
		},
	},
});

export const { setTrains, setSearchFrom, setSearchTo, setVan, setSeat } = trainSlice.actions;
export default trainSlice.reducer;
