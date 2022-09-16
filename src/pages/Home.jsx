import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFrom, setSearchTo } from '../store/slices/trainSlice';
import { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

export default function Home() {
	const { searchFrom, searchTo } = useSelector(state => state.trains);
	const dispatch = useDispatch();

	const updateSearch = useMemo(() => debounce((str, f) => dispatch(f(str)), 500), [dispatch]);

	const onInputFrom = e => {
		updateSearch(e.target.value.trim(), setSearchFrom);
	};

	const onInputTo = e => {
		updateSearch(e.target.value.trim(), setSearchTo);
	};

	useEffect(() => {
		dispatch(setSearchFrom(''));
		dispatch(setSearchTo(''));
	}, [dispatch]);

	return (
		<div>
			<h1>Home page</h1>
			<input onChange={onInputFrom} type="text" placeholder="откуда" />
			<input onChange={onInputTo} type="text" placeholder="куда" />
			{searchFrom || searchTo ? <Link to="/trains">найти поезда</Link> : ''}
		</div>
	);
}
