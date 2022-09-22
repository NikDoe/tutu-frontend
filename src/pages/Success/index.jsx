import { Link } from 'react-router-dom';

import styles from './Success.module.scss';

export default function Success() {
	return (
		<div className={styles.root}>
			<h1>поздравляем, билет забронирован🥳</h1>
			<Link className={styles.button} to={'/'}>
				назад к выбору
			</Link>
		</div>
	);
}
