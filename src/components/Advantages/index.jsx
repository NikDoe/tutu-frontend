import styles from './Advantages.module.scss';

import trainImg from '../../assets/img/home.jpg';
import clock from '../../assets/img/adv_clock.svg';
import choose from '../../assets/img/adv_choose.svg';
import qa from '../../assets/img/adv_qa.svg';
import pc from '../../assets/img/adv_pc.svg';

export default function Advantages() {
	return (
		<div className={styles.root}>
			<div className={styles.text}>
				<h1>4 причины забронировать ж/д билеты именно здесь</h1>
				<div className={styles.inner}>
					<img src={clock} alt="clock" />
					<p>Онлайн-бронирование за 4 минуты</p>
				</div>
				<div className={styles.inner}>
					<img src={choose} alt="clock" />
					<p>Выбор любимых мест на схемах вагонов</p>
				</div>
				<div className={styles.inner}>
					<img src={qa} alt="clock" />
					<p>Подробные ответы на вопросы о поездке или покупке</p>
				</div>
				<div className={styles.inner}>
					<img src={pc} alt="clock" />
					<p>Оформление без регистрации на сайте</p>
				</div>
			</div>
			<img className={styles.img} src={trainImg} alt="train" />
		</div>
	);
}
