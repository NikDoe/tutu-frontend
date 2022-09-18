import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: '',
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
		setInputValue: (state, action) => {
			state[action.payload.stateName] = action.payload.inputValue;
		},
		setTrains: (state, action) => {
			state.trains = action.payload;
		},
		setBookedTicket: (state, action) => {
			state.bookedTicket = { ...state.bookedTicket, ...action.payload };
			console.log(state.bookedTicket);
		},
	},
});

export const { setInputValue, setTrains, setBookedTicket } = trainSlice.actions;
export default trainSlice.reducer;
