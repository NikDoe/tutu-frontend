import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trains from './pages/Trains';
import PageNotFound from './pages/PageNotFound';
import Places from './pages/Places';
import PassengerData from './pages/PassengerData';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/trains" element={<Trains />} />
				<Route path="/places" element={<Places />} />
				<Route path="/data" element={<PassengerData />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
