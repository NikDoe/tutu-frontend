import { Link } from 'react-router-dom';
import { setBookedTicket } from '../../store/slices/trainSlice';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../../components/InputField';

import styles from './places.module.scss';

export default function Places() {
	const { seat, van } = useSelector(state => state.trains);
	const dispatch = useDispatch();

	const onClickInsertData = () => {
		const place = {
			van: van ? van : 'любой',
			seat: seat ? seat : 'любое',
		};
		dispatch(setBookedTicket(place));
	};

	return (
		<div className={styles.root}>
			<InputField label="выберите вагон" type="text" stateName="van" />
			<InputField label="выберите место" type="text" stateName="seat" />
			<Link className={styles.button} onClick={onClickInsertData} to="/data">
				перейти к вводу данных
			</Link>
			<Link className={styles.button} to={'/'}>
				назад к выбору
			</Link>
		</div>
	);
}
