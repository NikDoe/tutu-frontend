import { Link } from 'react-router-dom';

export default function PassengerData() {
	const onClickBookTicket = () => {
		console.log('билет забронирован');
	};
	return (
		<div>
			<h1>Passenger Data page</h1>
			<p>Фамилия</p>
			<input type="text" />
			<p>Имя</p>
			<input type="text" />
			<p>Отчество</p>
			<input type="text" />
			<p>номер паспорта</p>
			<input type="text" />
			<p>моб. телефон (по желанию)</p>
			<input type="text" />
			<Link to="/success" onClick={onClickBookTicket}>
				забронировать
			</Link>
			<Link to={'/'}>назад к выбору</Link>
		</div>
	);
}
