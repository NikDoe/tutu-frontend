import { useEffect } from 'react';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTrains } from '../store/slices/trainSlice';
import Train from '../components/Train';
import { Link } from 'react-router-dom';
import { setIsLoading } from '../store/slices/mainSlice';

export default function Trains() {
	const { trains, searchFrom, searchTo } = useSelector(state => state.trains);
	const { isLoading } = useSelector(state => state.main);
	const dispatch = useDispatch();

	const from = searchFrom ? `searchFrom=${searchFrom}` : '';
	const to = searchTo ? `searchTo=${searchTo}` : '';

	useEffect(() => {
		dispatch(setIsLoading(true));
		axios.get(`/train?${from}&${to}`).then(response => {
			dispatch(setTrains(response.data));
			dispatch(setIsLoading(false));
		});
	}, [dispatch, from, to]);
	return (
		<div>
			<h1>Trains page</h1>
			{isLoading ? (
				<h3>ищем поезда...</h3>
			) : (
				trains.map((train, index) => <Train key={index} {...train} />)
			)}
			<Link to={'/'}>назад к выбору</Link>
		</div>
	);
}
