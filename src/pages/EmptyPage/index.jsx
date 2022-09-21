import styles from './EmptyPage.module.scss';

export default function EmptyPage({ text }) {
	return (
		<div className={styles.root}>
			<h1>{text}</h1>
		</div>
	);
}
