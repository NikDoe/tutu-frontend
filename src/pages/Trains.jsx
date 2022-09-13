import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTrains } from '../store/slices/trainSlice';
import Train from '../components/Train';

export default function Trains() {
	const { trains } = useSelector(state => state.trains);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('https://tutu-backend.herokuapp.com/api/train').then(response => {
			dispatch(setTrains(response.data));
		});
	}, [dispatch]);
	return (
		<div>
			<h1>Trains page</h1>
			{trains.map((train, index) => (
				<Train key={index} {...train} />
			))}
		</div>
	);
}
