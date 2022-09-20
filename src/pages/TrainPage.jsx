import { useDispatch } from 'react-redux';
import { setBookedTicket } from '../store/slices/trainSlice';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../axios';
import TrainInfo from '../components/TrainInfo';

export default function TrainPage() {
	const [data, setData] = useState({});
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		axios.get(`/train/${id}`).then(res => {
			setData(res.data);
		});
	}, [id]);

	const onClickChooseSeats = () => {
		const way = {
			from: data.depFrom,
			to: data.arrivalTo,
			depTime: data.depTime,
			arrivalTime: data.arrivalTime,
			inTheWay: data.inTheWay,
			price: data.price,
		};
		dispatch(setBookedTicket(way));
	};

	return (
		<div>
			<TrainInfo {...data} />
			<Link onClick={onClickChooseSeats} to={'/places'}>
				выбрать места
			</Link>
		</div>
	);
}
