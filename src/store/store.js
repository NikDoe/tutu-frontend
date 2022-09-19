import { configureStore } from '@reduxjs/toolkit';
import trains from './slices/trainSlice';
import booking from './slices/bookingSlice';

export const store = configureStore({
	reducer: {
		trains,
		booking,
	},
});
