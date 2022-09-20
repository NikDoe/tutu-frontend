import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputField from '../../components/InputField';

import styles from './Home.module.scss';
import Advantages from '../../components/Advantages';

export default function Home() {
	const { searchFrom, searchTo } = useSelector(state => state.trains);

	return (
		<div className={styles.root}>
			<div className={styles.search}>
				<InputField type="text" placeholder="откуда" stateName="searchFrom" />
				<InputField type="text" placeholder="куда" stateName="searchTo" />
				{searchFrom || searchTo ? (
					<Link className={styles.button} to="/trains">
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
