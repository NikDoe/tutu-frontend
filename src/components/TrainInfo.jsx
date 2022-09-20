export default function TrainInfo({
	title,
	depFrom,
	arrivalTo,
	depTime,
	arrivalTime,
	inTheWay,
	price,
}) {
	const stringTime = str => {
		const newStr = str.slice(0, -3).split(':');
		const h = newStr[0] <= 9 ? newStr[0].slice(1) : newStr[0];
		const m = newStr[1];
		return `${h} часов ${m} минут`;
	};
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
				отправние в : <b>{stringTime(depTime)}</b>
			</p>
			<p>
				прибытие в : <b>{stringTime(arrivalTime)}</b>
			</p>
			<p>
				время в пути : <b>{stringTime(inTheWay)}</b>
			</p>
			<p>
				стоимость билета от : <b>{price} BYN</b>
			</p>
		</>
	);
}
