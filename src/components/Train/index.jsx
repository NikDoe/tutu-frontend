import { Link } from 'react-router-dom';
import styles from './Train.module.scss';

import trainImage from '../../assets/img/train.svg';
import { stringTime } from '../../utils';

export default function Train({ id, depFrom, arrivalTo, depTime, arrivalTime, price }) {
	return (
		<Link to={`/trains/${id}`} className={styles.root}>
			<img className={styles.img} src={trainImage} alt="" />
			<div className={styles.way}>
				<p>маршрут</p>
				<b>{depFrom}-</b>
				<b>{arrivalTo}</b>
			</div>
			<div className={styles.dep}>
				<p>отправление в</p>
				<b>{stringTime(depTime)}</b>
			</div>
			<div className={styles.arrival}>
				<p>прибытие в</p>
				<b>{stringTime(arrivalTime)}</b>
			</div>
			<div className={styles.price}>
				<p>цена (BYN)</p>
				<b>{price}</b>
			</div>
		</Link>
	);
}
