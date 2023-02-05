import React, { useEffect } from 'react';
import { removeProduct, selectOrderList, selectTotalPrice, selectTotalQty } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';

import Bill from '~/components/Bill';
import Empty from '~/components/Empty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { selectLogged } from '~/reducers/Login';
import styles from './Cart.module.scss';
import { updateCart } from '~/features';

function Cart() {
    const orderList = useSelector(selectOrderList);
    const dispatch = useDispatch();
    const totalPrice = useSelector(selectTotalPrice);
    const totalQty = useSelector(selectTotalQty);
    const isLogged = useSelector(selectLogged);

    const handleDelItem = async (id) => {
        dispatch(removeProduct(id));
    };
    useEffect(() => {
        updateCart(orderList, totalPrice, totalQty);
    }, [orderList]);

    return (
        <div className={styles.cart}>
            <div className={styles.container}>
                {orderList && orderList.length !== 0 ? (
                    <>
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
                                            <th>
                                                <h2>Remove</h2>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderList &&
                                            orderList.length !== 0 &&
                                            orderList.map((product, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <Link to={`/products/${product.detailItems.id}`}>
                                                            <div className={styles.item}>
                                                                <div className={styles.item_img}>
                                                                    <img
                                                                        src={product.detailItems.imageUrl}
                                                                        alt="img_item"
                                                                    />
                                                                </div>
                                                                <div className={styles.item_text}>
                                                                    <h4>{product.detailItems.name}</h4>
                                                                    <span>{`$ ${product.detailItems.price}.00`}</span>
                                                                </div>
                                                            </div>
                                                        </Link>
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
                                                            <button
                                                                onClick={() => handleDelItem(product.detailItems.id)}
                                                            >
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
                            <Bill />
                        </div>
                    </>
                ) : (
                    <Empty />
                )}
            </div>
        </div>
    );
}

export default Cart;
