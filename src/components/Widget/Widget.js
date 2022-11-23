import { addProduct, selectQty } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './Widget.module.scss';

function Widget({ icon, id, addOne }) {
    const dispatch = useDispatch();
    const presentQty = useSelector(selectQty);

    const handleAddToCart = () => {
        const detailItems = addOne;
        const groupDetailItem = { detailItems, presentQty };
        dispatch(addProduct(groupDetailItem));
    };
    return (
        <>
            {!addOne ? (
                <Link to={`/products/${id}`}>
                    <div className={styles.widget}>
                        <FontAwesomeIcon icon={icon} size="lg" />
                    </div>
                </Link>
            ) : (
                <button onClick={() => handleAddToCart()} className={styles.widget_btn}>
                    <div className={styles.widget}>
                        <FontAwesomeIcon icon={icon} size="lg" />
                    </div>
                </button>
            )}
        </>
    );
}

export default Widget;
