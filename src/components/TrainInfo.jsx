import { stringTime } from '../utils';

export default function TrainInfo({
	title,
	depFrom,
	arrivalTo,
	depTime,
	arrivalTime,
	inTheWay,
	price,
}) {
	return (
		<>
			<h1>Поезд : {title}</h1>
			<p>
				откуда : <b>{depFrom}</b>
			</p>
			<p>
				куда : <b>{arrivalTo}</b>
			</p>
			<p>
				отправние в : <b>{depTime ? stringTime(depTime) : ''}</b>
			</p>
			<p>
				прибытие в : <b>{arrivalTime ? stringTime(arrivalTime) : ''}</b>
			</p>
			<p>
				время в пути : <b>{inTheWay ? stringTime(inTheWay) : ''}</b>
			</p>
			<p>
				стоимость билета от : <b>{price} BYN</b>
			</p>
		</>
	);
}
