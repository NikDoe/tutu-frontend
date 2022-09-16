import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bookedTicket: {},
	seat: 0,
	van: 0,
	searchFrom: '',
	searchTo: '',
	trains: [],
};

export const trainSlice = createSlice({
	name: 'trains',
	initialState,
	reducers: {
		setTrains: (state, action) => {
			state.trains = action.payload;
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
		setBookedTicket: (state, action) => {
			state.bookedTicket = { ...action.payload };
			console.log(state.bookedTicket);
		},
	},
});

export const { setTrains, setSearchFrom, setSearchTo, setVan, setSeat, setBookedTicket } =
	trainSlice.actions;
export default trainSlice.reducer;
