import {Link} from "react-router-dom";

export default function Home() {
	const searchTrainHandler = e => {
		console.log(e.target.value);
	}

	return (
		<div>
			<h1>Home page</h1>
			<input onChange={searchTrainHandler} type="text" placeholder='откуда'/>
			<input type="text" placeholder='куда'/>
			<Link to='/trains'>найти поезда</Link>
		</div>
	)
}