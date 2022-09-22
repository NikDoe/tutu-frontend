import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { stringTime } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../store/slices/mainSlice';

import styles from './BookingPage.module.scss';

export default function BookingPage() {
	const { isLoading } = useSelector(state => state.main);
	const dispatch = useDispatch();

	const [
		{ fio, from, to, depTime, arrivalTime, inTheWay, price, passportData, phone },
		setBookingData,
	] = useState({});
	const { id } = useParams();

	useEffect(() => {
		dispatch(setIsLoading(true));
		axios.get(`/booking/${id}`).then(res => {
			setBookingData(res.data);
			dispatch(setIsLoading(false));
		});
	}, [dispatch, id]);

	return (
		<div className={styles.root}>
			{isLoading ? (
				<h1>Загрузка...</h1>
			) : (
				<div>
					<h1>Бронь №{id}</h1>
					<p>
						Ф.И.О : <b>{fio}</b>
					</p>
					<p>
						номер паспорта : <b>{passportData}</b>
					</p>
					<p>
						телефон : <b>{phone}</b>
					</p>
					<p>
						откуда : <b>{from}</b>
					</p>
					<p>
						куда : <b>{to}</b>
					</p>
					<p>
						отправние в : <b>{depTime ? stringTime(depTime) : ''}</b>
					</p>
					<p>
						прибытие в : <b>{arrivalTime ? stringTime(arrivalTime) : ''}</b>
					</p>
					<p>
						время в пути : <b>{inTheWay ? stringTime(inTheWay) : ''}</b>
					</p>
					<p>
						стоимость билета от : <b>{price} BYN</b>
					</p>
				</div>
			)}
			<Link className={styles.button} to={'/booked'}>
				вернуться назад
			</Link>
		</div>
	);
}
