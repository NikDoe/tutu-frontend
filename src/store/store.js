import { configureStore } from '@reduxjs/toolkit';
import trains from './slices/trainSlice';
import booking from './slices/bookingSlice';
import main from './slices/mainSlice';

export const store = configureStore({
	reducer: {
		trains,
		booking,
		main,
	},
});
