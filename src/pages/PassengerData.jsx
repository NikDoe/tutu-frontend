import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import { setBookedTicket } from '../store/slices/trainSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function PassengerData() {
	const { firstName, lastName, patronymic, passportData, phone } = useSelector(
		state => state.trains,
	);
	const dispatch = useDispatch();

	const onClickBookTicket = () => {
		const passenger = {
			firstName,
			lastName,
			patronymic,
			passportData,
			phone: phone ? phone : '',
		};
		dispatch(setBookedTicket(passenger));
	};
	return (
		<div>
			<h1>Passenger Data page</h1>
			<InputField type="text" label="Ваша фамилия" stateName="lastName" />
			<InputField type="text" label="Ваше имя" stateName="firstName" />
			<InputField type="text" label="Ваше отчество" stateName="patronymic" />
			<InputField type="text" label="номер паспорта" stateName="passportData" />
			<InputField type="text" label="телефон(по желанию)" stateName="phone" />
			{firstName && lastName && patronymic && passportData ? (
				<Link to="/success" onClick={onClickBookTicket}>
					забронировать
				</Link>
			) : (
				''
			)}
			<Link to={'/'}>назад к выбору</Link>
		</div>
	);
}
