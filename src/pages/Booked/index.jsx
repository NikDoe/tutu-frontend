import { useSelector } from 'react-redux';
import BookedTicket from '../../components/BookedTicket';
import { Link } from 'react-router-dom';

import styles from './Booked.module.scss';
import appStyle from '../../scss/App.module.scss';

export default function Booked() {
	const { bookings } = useSelector(state => state.booking);

	const root = `${styles.root} ${appStyle.main}`;
	const btn = `${styles.button} ${appStyle.button}`;

	return (
		<div className={root}>
			{bookings.map((obj, index) => (
				<BookedTicket key={index} {...obj} />
			))}
			<Link className={btn} to={'/'}>
				на главную
			</Link>
		</div>
	);
}
