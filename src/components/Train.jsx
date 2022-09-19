import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBookedTicket } from '../store/slices/trainSlice';

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
		<div>
			<div>
				<span>{depFrom}-</span>
				<span>{arrivalTo}</span>
				<Link onClick={onClickChooseSeats} to={'/places'}>
					выбрать места
				</Link>
			</div>
		</div>
	);
}
