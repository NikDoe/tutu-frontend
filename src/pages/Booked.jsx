import { useSelector } from 'react-redux';
import BookedTicket from '../components/BookedTicket';

export default function Booked() {
	const { bookings } = useSelector(state => state.booking);

	return (
		<div>
			{bookings.map((obj, index) => (
				<BookedTicket key={index} {...obj} />
			))}
		</div>
	);
}
