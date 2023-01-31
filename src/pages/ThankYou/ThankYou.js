import { faGifts, faHouse } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import Plants from '../../components/Plants';
import config from '~/config/routes';
import styles from './ThankYou.module.scss';

function ThankYou() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.plant1}>
                    <Plants />
                </div>
                <div className={styles.plant2}>
                    <Plants />
                </div>

                <div className={styles.card}>
                    <img src={Images.Thank} alt="thank" />
                    <div className={styles.content}>
                        <h1>Thank you</h1>
                        <span>In the bottom of heart, we would like to express our huge thanks for your support </span>
                        <div className={styles.btns}>
                            <Link to={config.home} className={styles.backBtn}>
                                <FontAwesomeIcon icon={faHouse} />
                                Back to home
                            </Link>
                            <Link to={config.product} className={styles.backBtn}>
                                <FontAwesomeIcon icon={faGifts} />
                                Continue shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;
