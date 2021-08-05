import react from 'react';
import styles from './About.module.css';

const About = () => {
	return (
		<div className={`${styles.section} ${styles.aboutSection}`}>
			<h4 className={styles.sectionTitle}>About</h4>
			<div className={styles.bodyText}>
				<p>
					A highly motivated student. Through my education, I have
					demonstrated high levels of motivation, work ethic and
					teamwork to achieve my predicted grades.
				</p>
			</div>
		</div>
	);
};

export default About;
