import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: '',
	lastName: '',
	patronymic: '',
	passportData: '',
	phone: '',
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
		},
	},
});

export const { setInputValue, setTrains, setBookedTicket } = trainSlice.actions;
export default trainSlice.reducer;
