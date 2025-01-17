import styles from './Contact.module.css';

const Contact = () => {
	return (
		<div className={`${styles.section} ${styles.contactSection}`}>
            <h4 class={styles.sectionTitle}>Contact</h4>
            <div class={styles.bodyText}>
                <ul>
                    <li>
                        <a href="tel:(380)992103456">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                                <title></title>
                                <g id="icomoon-ignore">
                                </g>
                                <path d="M352 320c-32 32-32 64-64 64s-64-32-96-64-64-64-64-96 32-32 64-64-64-128-96-128-96 96-96 96c0 64 65.75 193.75 128 256s192 128 256 128c0 0 96-64 96-96s-96-128-128-96z"></path>
                                </svg>
                            Phone
                        </a>
                    </li>
                    <li>
                        <a href="mailto:pelykhpaul@gmail.com">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                                <title></title>
                                <g id="icomoon-ignore">
                                </g>
                                <path d="M464 64h-416c-26.4 0-48 21.6-48 48v320c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-320c0-26.4-21.6-48-48-48zM199.37 275.186l-135.37 105.446v-250.821l135.37 145.375zM88.19 128h335.62l-167.81 126-167.81-126zM204.644 280.849l51.356 55.151 51.355-55.151 105.277 135.151h-313.264l105.276-135.151zM312.63 275.186l135.37-145.375v250.821l-135.37-105.446z"></path>
                                </svg>
                            Email
                        </a>
                    </li>
                </ul>
            </div>
        </div>	
	);
};

export default Contact;