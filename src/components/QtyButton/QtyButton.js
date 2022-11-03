import { decreaseQty, increaseQty, selectQty } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';

import styles from './QtyButton.module.scss';

function QtyButton({ qty }) {
    const dispatch = useDispatch();

    const handleIncreaseQty = () => {
        dispatch(increaseQty(qty));
    };
    const handleDecreaseQty = () => {
        dispatch(decreaseQty(qty));
    };

    const presentQty = useSelector(selectQty);

    return (
        <div className={styles.QtyButton}>
            <button onClick={handleDecreaseQty}>-</button>
            <span>{presentQty}</span>
            <button onClick={handleIncreaseQty}>+</button>
        </div>
    );
}

export default QtyButton;
