import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import QtyButton from '~/components/QtyButton';
import React from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Cart.module.scss';

function Cart() {
    return (
        <div className={styles.cart}>
            <div className={styles.container}>
                <div className={styles.col_8}>
                    <div className={styles.cart_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <h2>Product</h2>
                                    </th>
                                    <th>
                                        <h2>Quantity</h2>
                                    </th>
                                    <th>
                                        <h2>Total</h2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.item}>
                                            <div className={styles.item_img}>
                                                <img src={Images.item12} alt="img_item" />
                                            </div>
                                            <div className={styles.item_text}>
                                                <h4>fly me to the moon</h4>
                                                <span>$21.00</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.qty_btn}>
                                            <QtyButton />
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.total}>$21.00</div>
                                    </td>
                                    <td>
                                        <div className={styles.del_btn}>
                                            <button>
                                                <FontAwesomeIcon icon={faCircleXmark} size="lg" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.col_4}>
                    <div className={styles.payment}>
                        <div className={styles.cart_total}>
                            <h2>cart total</h2>
                            <ul>
                                <li>
                                    subtotal <p>$217.00</p>
                                </li>
                                <li>
                                    total <p>$217.00</p>
                                </li>
                            </ul>
                            <div className={styles.payment_btn}>
                                <button>proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
