import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { selectScale } from '~/reducers/Devices';
import styles from './Banner.module.scss';
import { useSelector } from 'react-redux';

function Banner({ banner }) {
    const scale = useSelector(selectScale);
    return (
        <>
            {scale !== 'mobile' ? (
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
            ) : (
                <div className={styles.banner}>
                    <ul className={styles.container_mb}>
                        <Link to={config.home}>Home</Link>
                        <div className={styles.icon_mb}>
                            <FontAwesomeIcon icon={faCaretRight} />
                        </div>
                        <b>{banner}</b>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Banner;
