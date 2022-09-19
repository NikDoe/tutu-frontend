import styles from './BookedTicket.module.scss';

export default function BookedTicket({ from, to, fio }) {
	const name = fio.split(' ')[0];
	return (
		<div className={styles.root}>
			<p>{from}</p>-<p>{to}</p>
			<p>{name}</p>
		</div>
	);
}
