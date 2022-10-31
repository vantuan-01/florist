import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import QtyButton from '~/components/QtyButton';
import React from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { selectOrderList } from '~/reducers/Cart';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';

function Cart() {
    const productList = useSelector(selectOrderList);

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
                                {productList &&
                                    productList.length !== 0 &&
                                    productList.map((product, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className={styles.item}>
                                                    <div className={styles.item_img}>
                                                        <img src={product.imageUrl} alt="img_item" />
                                                    </div>
                                                    <div className={styles.item_text}>
                                                        <h4>{product.name}</h4>
                                                        <span>{`$ ${product.price}.00`}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.qty_btn}>
                                                    <QtyButton qty={product.qty} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.total}>{`$ ${product.price}.00`}</div>
                                            </td>
                                            <td>
                                                <div className={styles.del_btn}>
                                                    <button>
                                                        <FontAwesomeIcon icon={faCircleXmark} size="lg" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
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
