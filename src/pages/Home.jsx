import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputField from '../components/InputField';

export default function Home() {
	console.log('Home');
	const { searchFrom, searchTo } = useSelector(state => state.trains);

	return (
		<div>
			<h1>Home page</h1>
			<InputField type="text" placeholder="откуда" stateName="searchFrom" />
			<InputField type="text" placeholder="куда" stateName="searchTo" />
			{searchFrom || searchTo ? <Link to="/trains">найти поезда</Link> : ''}
		</div>
	);
}
