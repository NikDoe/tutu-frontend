import styles from './PageNotFound.module.scss';
import appStyle from '../../scss/App.module.scss';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
	const root = `${appStyle.empty} ${appStyle.main}`;
	const btn = `${styles.button} ${appStyle.button}`;
	return (
		<div className={root}>
			<h1>404</h1>
			<Link className={btn} to={'/'}>
				на главную
			</Link>
		</div>
	);
}
