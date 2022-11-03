import Bill from '~/components/Bill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                                {productList && productList.length !== 0 ? (
                                    productList.map((product, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className={styles.item}>
                                                    <div className={styles.item_img}>
                                                        <img src={product.detailItems.imageUrl} alt="img_item" />
                                                    </div>
                                                    <div className={styles.item_text}>
                                                        <h4>{product.detailItems.name}</h4>
                                                        <span>{`$ ${product.detailItems.price}.00`}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.qty_btn}>{product.presentQty}</div>
                                            </td>
                                            <td>
                                                <div className={styles.total}>{`$ ${
                                                    product.detailItems.price * product.presentQty
                                                }.00`}</div>
                                            </td>
                                            <td>
                                                <div className={styles.del_btn}>
                                                    <button>
                                                        <FontAwesomeIcon icon={faCircleXmark} size="lg" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <>
                                        <tr>
                                            <td>
                                                <div>no item</div>
                                            </td>
                                        </tr>
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.col_4}>
                    <Bill />
                </div>
            </div>
        </div>
    );
}

export default Cart;
