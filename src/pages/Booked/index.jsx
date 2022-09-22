import { useSelector } from 'react-redux';
import BookedTicket from '../../components/BookedTicket';
import { Link } from 'react-router-dom';

import style from './Booked.module.scss';

export default function Booked() {
	const { bookings } = useSelector(state => state.booking);

	return (
		<div className={style.root}>
			{bookings.map((obj, index) => (
				<BookedTicket key={index} {...obj} />
			))}
			<Link className={style.button} to={'/'}>
				на главную
			</Link>
		</div>
	);
}
