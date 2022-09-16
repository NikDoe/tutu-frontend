import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFrom, setSearchTo } from '../store/slices/trainSlice';

export default function Home() {
	const { searchFrom, searchTo } = useSelector(state => state.trains);
	const dispatch = useDispatch();

	const onInputFrom = e => {
		dispatch(setSearchFrom(e.target.value));
	};

	const onInputTo = e => {
		dispatch(setSearchTo(e.target.value));
	};

	return (
		<div>
			<h1>Home page</h1>
			<input onChange={onInputFrom} type="text" placeholder="откуда" />
			<input onChange={onInputTo} type="text" placeholder="куда" />
			{searchFrom || searchTo ? <Link to="/trains">найти поезда</Link> : ''}
		</div>
	);
}
