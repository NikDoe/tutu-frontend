import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputField from '../../components/InputField';

import styles from './Home.module.scss';
import appStyle from '../../scss/App.module.scss';
import Advantages from '../../components/Advantages';

export default function Home() {
	const { searchFrom, searchTo } = useSelector(state => state.trains);

	const root = `${styles.root} ${appStyle.main}`;
	const btn = `${styles.button} ${appStyle.button}`;

	return (
		<div className={root}>
			<div className={styles.search}>
				<InputField type="text" placeholder="откуда" stateName="searchFrom" />
				<InputField type="text" placeholder="куда" stateName="searchTo" />
				{searchFrom || searchTo ? (
					<Link className={btn} to="/trains">
						найти поезда
					</Link>
				) : (
					''
				)}
			</div>
			<Advantages className={styles.advantages} />
		</div>
	);
}
