import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBookedTicket } from '../../store/slices/trainSlice';

import styles from './Train.module.scss';

export default function Train({ depFrom, arrivalTo, depTime, arrivalTime, inTheWay, price }) {
	const dispatch = useDispatch();

	const onClickChooseSeats = () => {
		const way = {
			from: depFrom,
			to: arrivalTo,
			depTime,
			arrivalTime,
			inTheWay,
			price,
		};
		dispatch(setBookedTicket(way));
	};

	return (
		<div className={styles.root}>
			<span>{depFrom}-</span>
			<span>{arrivalTo}</span>
			<Link className={styles.choose} onClick={onClickChooseSeats} to={'/places'}>
				выбрать места
			</Link>
		</div>
	);
}
