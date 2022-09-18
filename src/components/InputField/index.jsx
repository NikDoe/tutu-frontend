import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../../store/slices/trainSlice';
import styles from './InputField.module.scss';

export default function InputField({ label, stateName, type, placeholder }) {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const upd = useMemo(() => debounce((obj, f) => dispatch(f(obj)), 500), [dispatch]);

	const handleInputChange = e => {
		const inputValue = e.target.value.trim();
		setValue(inputValue);
		upd({ inputValue, stateName }, setInputValue);
	};

	useEffect(() => {
		dispatch(setInputValue({ inputValue: '', stateName }));
	}, [dispatch, stateName]);

	return (
		<label className={styles.root}>
			{label}
			<input
				className={styles.input}
				type={type}
				value={value}
				onChange={handleInputChange}
				placeholder={placeholder}
			/>
		</label>
	);
}
