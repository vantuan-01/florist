import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './Widget.module.scss';

function Widget({ icon, id, addOne }) {
    return (
        <>
            {!addOne ? (
                <Link to={`/products/${id}`}>
                    <div className={styles.widget}>
                        <FontAwesomeIcon icon={icon} size="lg" />
                    </div>
                </Link>
            ) : (
                <button className={styles.widget_btn}>
                    <div className={styles.widget}>
                        <FontAwesomeIcon icon={icon} size="lg" />
                    </div>
                </button>
            )}
        </>
    );
}

export default Widget;
