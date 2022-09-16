import { Link } from 'react-router-dom';

export default function Train({ depFrom, arrivalTo }) {
	return (
		<div>
			<div>
				<span>{depFrom}-</span>
				<span>{arrivalTo}</span>
				<Link to={'/places'}>выбрать места</Link>
			</div>
		</div>
	);
}
