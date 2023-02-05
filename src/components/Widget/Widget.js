import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addProduct } from '~/reducers/Cart';
import { selectLogged } from '~/reducers/Login';
import styles from './Widget.module.scss';

function Widget({ icon, id, addOne, love }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogged = useSelector(selectLogged);

    const handleAddToCart = () => {
        if (isLogged) {
            const detailItems = addOne;
            const groupDetailItem = { detailItems, presentQty: 1 };
            dispatch(addProduct(groupDetailItem));
        } else {
            const cf = window.confirm('You need to log in to buy stuff') ? navigate('/signIn') : null;
        }
    };
    return (
        <>
            {addOne ? (
                <button onClick={() => handleAddToCart()} className={styles.widget_btn}>
                    <div className={styles.widget}>
                        <FontAwesomeIcon icon={icon} size="lg" />
                    </div>
                </button>
            ) : id ? (
                <Link to={`/products/${id}`}>
                    <div className={styles.widget}>
                        <FontAwesomeIcon icon={icon} size="lg" />
                    </div>
                </Link>
            ) : love ? (
                <div className={styles.widget}>
                    <FontAwesomeIcon icon={icon} size="lg" />
                </div>
            ) : null}
        </>
    );
}

export default Widget;
