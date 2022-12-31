import React, { useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { removeProduct, selectOrderList, selectTotalPrice } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';

import Bill from '~/components/Bill';
import Empty from '~/components/Empty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '~/utils/firebase';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { selectLogged } from '~/reducers/Login';
import styles from './Cart.module.scss';

function Cart() {
    const productList = useSelector(selectOrderList);
    const dispatch = useDispatch();
    const userUID = useSelector(selectLogged);
    const totalPrice = useSelector(selectTotalPrice);

    console.log(productList);

    // const updateCart = async () => {
    //     await setDoc(doc(db, 'cartDetail', `${userUID}`), { ...productList });
    // };
    // useEffect(() => {
    //     updateCart();
    // });

    return (
        <div className={styles.cart}>
            <div className={styles.container}>
                {productList && productList.length !== 0 ? (
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productList &&
                                            productList.length !== 0 &&
                                            productList.map((product, index) => (
                                                <tr key={index}>
                                                    {console.log(product)}
                                                    <td>
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
                                                                onClick={() =>
                                                                    dispatch(removeProduct(product.detailItems.id))
                                                                }
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
