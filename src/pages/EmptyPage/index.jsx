import styles from './EmptyPage.module.scss';
import appStyle from '../../scss/App.module.scss';
import { Link } from 'react-router-dom';

export default function EmptyPage({ text }) {
	const root = `${appStyle.empty} ${appStyle.main}`;
	const btn = `${styles.button} ${appStyle.button}`;
	return (
		<div className={root}>
			<h1>{text}</h1>
			<Link className={btn} to={'/'}>
				на главную
			</Link>
		</div>
	);
}
