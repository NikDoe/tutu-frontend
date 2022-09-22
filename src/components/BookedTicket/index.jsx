import { Link } from 'react-router-dom';

import bookingIcon from '../../assets/img/ticket_header.svg';
import styles from './BookedTicket.module.scss';

export default function BookedTicket({ id, from, to, fio }) {
	const name = fio.split(' ')[0];
	return (
		<Link to={`/booked/${id}`} className={styles.root}>
			<img className={styles.img} src={bookingIcon} alt="" />
			<div className={styles.info}>
				<p>откуда</p>
				<b>{from}</b>
			</div>
			<div className={styles.info}>
				<p>куда</p>
				<b>{to}</b>
			</div>
			<div className={styles.info}>
				<p>оформил(а)</p>
				<b>{name}</b>
			</div>
		</Link>
	);
}
