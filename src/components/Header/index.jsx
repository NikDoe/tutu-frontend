import cartIcon from '../../assets/img/ticket_header.svg';
import logoIcon from '../../assets/img/train_logo.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from '../../axios';
import { setBooking } from '../../store/slices/bookingSlice';

export default function Header() {
	const { totalPrice, totalBooked } = useSelector(state => state.booking);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('/booking').then(res => dispatch(setBooking(res.data)));
	}, [dispatch]);

	return (
		<header className={styles.root}>
			<div className={styles.logoBlock}>
				<Link style={{ display: 'flex', alignItems: 'center' }} to="/">
					<img className={styles.logo} src={logoIcon} alt="logo" />
				</Link>
				<div className={styles.logoText}>
					<h1>tutu</h1>
					<p>бронирование билетов</p>
				</div>
			</div>
			<div className={styles.user}>
				{/*<img className={styles.profile} src={userIcon} alt="user icon" />*/}
				<Link style={{ textDecoration: 'none' }} to="/booked" className={styles.cart}>
					<p>{totalPrice.toFixed(2)} BYN</p>
					<p className={styles.dash}>|</p>
					<div className={styles.ticketCount}>
						<img className={styles.ticket} src={cartIcon} alt="icon cart" />
						<p>{totalBooked}</p>
					</div>
				</Link>
			</div>
		</header>
	);
}
