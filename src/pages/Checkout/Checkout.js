import { selectOrderList, selectTotalPrice, selectTotalQty } from '~/reducers/Cart';

import Bill from '~/components/Bill';
import styles from './Checkout.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Checkout() {
    const navigation = useNavigate();
    const orderList = useSelector(selectOrderList);
    const totalPrice = useSelector(selectTotalPrice);
    const totalQty = useSelector(selectTotalQty);
    useEffect(() => {
        if (orderList.length === 0 && totalPrice === 0 && totalQty === 0) {
            navigation('/');
        }
    });

    return (
        <div className={styles.checkout}>
            <div className={styles.checkout_col_8}>
                <h2>
                    Contact information <p>*</p>
                </h2>
                <div className={styles.input_group}>
                    <input type="text" placeholder="Email or phone number" />
                </div>
                <h2>Shipping address</h2>
                <div className={styles.input_group}>
                    <label htmlFor="">Full name</label>
                    <input type="text" />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="">
                        Phone number <p>*</p>
                    </label>
                    <input type="number" />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="">
                        Address <p>*</p>
                    </label>
                    <input type="text" placeholder="Street address, district, city " />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="">Note</label>
                    <input type="text" placeholder="Note about your order, e.g, special noe for delivery" />
                </div>
            </div>
            <div className={styles.checkout_col_4}>
                <Bill checkout />
            </div>
        </div>
    );
}

export default Checkout;
