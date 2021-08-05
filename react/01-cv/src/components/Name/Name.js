import styles from './Name.module.css';
import photo from './photo1.jpg';

const Name = () => {
	return (
		<div className={styles.nameContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.portrait} src={photo} alt="portrait"></img>
            </div>
            <h2>Paul Pelykh</h2>
            <p>Full Stack JS Developer</p>
        </div>
	);
};

export default Name;
