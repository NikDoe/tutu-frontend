import { Link } from 'react-router-dom';
import styles from './Train.module.scss';

export default function Train({ id, depFrom, arrivalTo }) {
	return (
		<Link to={`/trains/${id}`} className={styles.root}>
			<span>{depFrom}-</span>
			<span>{arrivalTo}</span>
		</Link>
	);
}
