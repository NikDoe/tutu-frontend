import userIcon from '../../assets/img/user_icon.svg';
import cartIcon from '../../assets/img/ticket_header.svg';
import logoIcon from '../../assets/img/train_logo.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
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
				<img className={styles.profile} src={userIcon} alt="user icon" />
				<div className={styles.cart}>
					<p>0 BYN</p>
					<p className={styles.dash}>|</p>
					<div className={styles.ticketCount}>
						<img className={styles.ticket} src={cartIcon} alt="icon cart" />
						<p>0</p>
					</div>
				</div>
			</div>
		</header>
	);
}
