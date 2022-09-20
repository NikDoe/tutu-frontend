import styles from './BookedTicket.module.scss';
import { Link } from 'react-router-dom';

export default function BookedTicket({ id, from, to, fio }) {
	const name = fio.split(' ')[0];
	return (
		<Link to={`/booked/${id}`} className={styles.root}>
			<p>{from}</p>-<p>{to}</p>
			<p>{name}</p>
		</Link>
	);
}
