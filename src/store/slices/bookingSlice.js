import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bookings: [],
	totalBooked: 0,
	totalPrice: 0,
};

const bookingSlice = createSlice({
	name: 'booking',
	initialState,
	reducers: {
		setBooking: (state, action) => {
			state.bookings = action.payload;
			state.totalPrice = state.bookings.reduce((sum, obj) => sum + obj.price, 0);
			state.totalBooked = state.bookings.length;
		},
	},
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
