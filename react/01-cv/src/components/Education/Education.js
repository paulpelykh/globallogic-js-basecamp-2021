import styles from './Education.module.css';

const Education = () => {
	return (
		<div class={`${styles.section} ${styles.educationSection}`}>
			<h4 class={styles.sectionTitle}>Education</h4>
			<div class={styles.bodyText}>
				<ul>
					<li>
						<p>
							Technological professional college National
							University "Lviv Polytechnic",
						</p>
						<p>Specialization: computer science,</p>

						<p className={styles.highlight}>2017 - 2021</p>
					</li>
					<li>
						<p>LVIV POLYTECHNIC NATIONAL UNIVERSITY,</p>
						<p>Specializtion: computer science,</p>
						<p className={styles.highlight}>2021 - present</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Education;
