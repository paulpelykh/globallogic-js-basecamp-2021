import styles from './Skills.module.css';

const Skills = () => {
	return (
		<div class={`${styles.section} ${styles.skillsSection}`}>
			<h4 class={styles.sectionTitle}>Skills</h4>
			<div class={styles.bodyText}>
				<ul>
					<li>
						<p>
							<span className={styles.highlight}>Languages:</span> HTML, CSS, JavaScript, Node.js, SQL, Typescript
						</p>
					</li>
					<li>
						<p>
							<span className={styles.highlight}>Frameworks:</span> Angular, React, Redux
						</p>
					</li>
					<li>
						<p>
							<span className={styles.highlight}>Related technologies:</span> GIT, Github, Webpack
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;
