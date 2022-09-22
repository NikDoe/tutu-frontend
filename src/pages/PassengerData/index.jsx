import { Link } from 'react-router-dom';
import InputField from '../../components/InputField';
import { setBookedTicket } from '../../store/slices/trainSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios';
import { setBooking } from '../../store/slices/bookingSlice';

import styles from './passengerData.module.scss';
import appStyle from '../../scss/App.module.scss';

export default function PassengerData() {
	const { firstName, lastName, patronymic, passportData, phone, bookedTicket } = useSelector(
		state => state.trains,
	);
	const dispatch = useDispatch();

	const onClickBookTicket = async () => {
		const passenger = {
			fio: `${firstName} ${lastName} ${patronymic}`,
			passportData,
			phone: phone ? phone : 'не указан',
		};
		dispatch(setBookedTicket(passenger));
		await axios.post('/booking', { ...bookedTicket, ...passenger });
		await axios.get('/booking').then(res => dispatch(setBooking(res.data)));
	};

	const root = `${styles.root} ${appStyle.main}`;
	const btn = `${styles.button} ${appStyle.button}`;

	return (
		<div className={root}>
			<InputField type="text" label="Ваша фамилия" stateName="lastName" />
			<InputField type="text" label="Ваше имя" stateName="firstName" />
			<InputField type="text" label="Ваше отчество" stateName="patronymic" />
			<InputField type="text" label="номер паспорта" stateName="passportData" />
			<InputField type="text" label="телефон(по желанию)" stateName="phone" />
			{firstName && lastName && patronymic && passportData ? (
				<Link
					style={{ marginBottom: '20px' }}
					className={btn}
					to="/success"
					onClick={onClickBookTicket}
				>
					забронировать
				</Link>
			) : (
				''
			)}
			<Link className={btn} to={'/'}>
				назад к выбору
			</Link>
		</div>
	);
}
