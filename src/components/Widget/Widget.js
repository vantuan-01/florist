import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './Widget.module.scss';

function Widget({ icon, id }) {
    return (
        <Link to={`/products/${id}`}>
            <div className={styles.widget}>
                <FontAwesomeIcon icon={icon} size="lg" />
            </div>
        </Link>
    );
}

export default Widget;
