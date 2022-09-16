import { Link } from 'react-router-dom';

export default function Success() {
	return (
		<div>
			<h1>поздравляем, билет забронирован🥳</h1>
			<Link to={'/'}>назад к выбору</Link>
		</div>
	);
}
