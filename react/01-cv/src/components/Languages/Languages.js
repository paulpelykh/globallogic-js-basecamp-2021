import react from 'react';
import styles from './Languages.module.css';

const Languages = () => {
	return (
		<div class={`${styles.section} ${styles.languagesSection}`}>
			<h4 class={styles.sectionTitle}>Languages</h4>
			<div class={styles.bodyText}>
				<ul>
					<li>
						<p>
							English(Upper-intermediate)
						</p>
					</li>
					<li>
						<p>
							Ukrainian(native)
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Languages;
