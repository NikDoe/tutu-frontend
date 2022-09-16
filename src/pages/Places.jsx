import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import debounce from 'lodash.debounce';
import { setVan, setSeat } from '../store/slices/trainSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Places() {
	const { seat, van } = useSelector(state => state.trains);
	const dispatch = useDispatch();

	const updateValue = useMemo(
		() => debounce((str, f) => dispatch(f(str.trim())), 500),
		[dispatch],
	);

	const onInputVan = e => {
		updateValue(e.target.value, setVan);
	};

	const onInputSeat = e => {
		updateValue(e.target.value, setSeat);
	};

	return (
		<div>
			<h1>Seats page</h1>
			<p>выберите вагон</p>
			<input onChange={onInputVan} type="text" />
			<p>выберите место</p>
			<input onChange={onInputSeat} type="text" />
			{seat && van ? <Link to="/data">перейти к вводу данных</Link> : ''}
			<Link to={'/'}>назад к выбору</Link>
		</div>
	);
}
