import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import styles from './Banner.module.scss';

function Banner({ banner }) {
    return (
        <div className={styles.banner}>
            <div className={styles.banner_img}>
                <img src={Images.banner} alt="banner" />
            </div>
            <div className={styles.container}>
                <div className={styles.banner_text}>
                    <h1>{banner}</h1>
                    <div className={styles.banner_link}>
                        <Link to={config.home}>Home</Link>
                        <span>{banner}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
