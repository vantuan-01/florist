import styles from './QtyButton.module.scss';
import { useState } from 'react';

function QtyButton() {
    const [amount, setAmount] = useState(1);

    const increaseAmount = () => {
        setAmount(amount + 1);
    };
    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        } else if (amount === 1) {
            return;
        } else {
            console.log('decreaseAmount error');
        }
    };
    return (
        <div className={styles.QtyButton}>
            <button onClick={decreaseAmount}>-</button>
            <span>{amount}</span>
            <button onClick={increaseAmount}>+</button>
        </div>
    );
}

export default QtyButton;
