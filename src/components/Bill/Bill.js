import { selectTotalPrice } from '~/reducers/Cart';
import styles from './Bill.module.scss';
import { useSelector } from 'react-redux';

function Bill({ checkout }) {
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <div className={styles.payment}>
            <div className={styles.container}>
                <h2>
                    <span>your order</span>
                </h2>
                {checkout && (
                    <div className={styles.bill_details}>
                        <ul>
                            <li>
                                1 x succlent <p>$21.00</p>
                            </li>
                            <li>
                                1 x succlent <p>$21.00</p>
                            </li>
                            <li>
                                1 x succlent <p>$21.00</p>
                            </li>
                            <li>
                                1 x succlent <p>$21.00</p>
                            </li>
                        </ul>
                    </div>
                )}
                <div className={styles.bill_total}>
                    <ul>
                        <li>
                            subtotal <p>{`$ ${totalPrice}.00`}</p>
                        </li>
                        <li>
                            total <p>{`$ ${totalPrice}.00`}</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.payment_btn}>
                    <button>proceed to checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Bill;
