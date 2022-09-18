import { Link } from 'react-router-dom';
import { setBookedTicket } from '../store/slices/trainSlice';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../components/InputField';

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
		<div>
			<h1>Seats page</h1>
			<InputField label="выберите вагон" type="text" stateName="van" />
			<InputField label="выберите место" type="text" stateName="seat" />
			<Link onClick={onClickInsertData} to="/data">
				перейти к вводу данных
			</Link>
			<Link to={'/'}>назад к выбору</Link>
		</div>
	);
}
