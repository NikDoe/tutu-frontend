import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trains from './pages/Trains';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Places from './pages/Places';
import PassengerData from './pages/PassengerData';
import Success from './pages/Success';
import Header from './components/Header';
import Booked from './pages/Booked';
import TrainPage from './pages/TrainPage';
import BookingPage from './pages/BookingPage';

import styles from './scss/App.module.scss';

function App() {
	return (
		<div className={styles.root}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/trains" element={<Trains />} />
				<Route path="/trains/:id" element={<TrainPage />} />
				<Route path="/places" element={<Places />} />
				<Route path="/data" element={<PassengerData />} />
				<Route path="/success" element={<Success />} />
				<Route path="/booked" element={<Booked />} />
				<Route path="/booked/:id" element={<BookingPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
