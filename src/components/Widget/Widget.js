import { faClipboard, faHeart } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
