import { configureStore } from '@reduxjs/toolkit';
import trains from './slices/trainSlice';

export const store = configureStore({
	reducer: {
		trains,
	},
});