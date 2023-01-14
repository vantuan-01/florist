import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { addProduct } from '~/reducers/Cart';
import styles from './Widget.module.scss';
import { useDispatch } from 'react-redux';

function Widget({ icon, id, addOne }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const detailItems = addOne;
        const groupDetailItem = { detailItems, presentQty: 1 };
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
