import { useEffect } from 'react';
import axios from '../../axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTrains } from '../../store/slices/trainSlice';
import Train from '../../components/Train';
import { Link } from 'react-router-dom';
import { setIsLoading } from '../../store/slices/mainSlice';
import EmptyPage from '../EmptyPage';

import styles from './trains.module.scss';
import appStyle from '../../scss/App.module.scss';

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

	if (trains.length === 0 && !isLoading) {
		return <EmptyPage text="по Вашему запросу ничего не найдено 😞" />;
	}

	const root = `${styles.root} ${appStyle.main}`;
	const btn = `${styles.button} ${appStyle.button}`;

	return (
		<div className={root}>
			{isLoading ? (
				<h1>ищем поезда...</h1>
			) : (
				<div>
					<h1>Мы нашли подходящие для вас маршруты</h1>
					{trains.map((train, index) => (
						<Train key={index} {...train} />
					))}
				</div>
			)}
			<Link className={btn} to={'/'}>
				назад к выбору
			</Link>
		</div>
	);
}
