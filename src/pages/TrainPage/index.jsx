import { useDispatch, useSelector } from 'react-redux';
import { setBookedTicket } from '../../store/slices/trainSlice';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import TrainInfo from '../../components/TrainInfo';
import { setIsLoading } from '../../store/slices/mainSlice';

import styles from './TrainPage.module.scss';

export default function TrainPage() {
	const { isLoading } = useSelector(state => state.main);
	const [data, setData] = useState({});
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(setIsLoading(true));
		axios.get(`/train/${id}`).then(res => {
			setData(res.data);
			dispatch(setIsLoading(false));
		});
	}, [dispatch, id]);

	const onClickChooseSeats = () => {
		const way = {
			from: data.depFrom,
			to: data.arrivalTo,
			depTime: data.depTime,
			arrivalTime: data.arrivalTime,
			inTheWay: data.inTheWay,
			price: data.price,
		};
		dispatch(setBookedTicket(way));
	};

	return (
		<div className={styles.root}>
			{isLoading ? (
				<h1>загрузка</h1>
			) : (
				<>
					<TrainInfo {...data} />
					<Link className={styles.button} onClick={onClickChooseSeats} to={'/places'}>
						выбрать места
					</Link>
				</>
			)}
			<Link className={styles.button} to={'/trains'}>
				назад к поездам
			</Link>
		</div>
	);
}
