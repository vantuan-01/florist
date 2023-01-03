import React, { useEffect } from 'react';
import { deleteDoc, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    removeProduct,
    selectOrderList,
    selectTotalPrice,
    setOrderList,
    setTotalPrice,
    setTotalQty,
} from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';

import Bill from '~/components/Bill';
import Empty from '~/components/Empty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '~/utils/firebase';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { selectLogged } from '~/reducers/Login';
import styles from './Cart.module.scss';

function Cart() {
    const auth = getAuth();
    const productList = useSelector(selectOrderList);
    const dispatch = useDispatch();
    const userUID = useSelector(selectLogged);
    const totalPrice = useSelector(selectTotalPrice);

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                getCartHistory(auth);
            } else {
                console.log('no user');
            }
        });
        return () => {
            unSub();
        };
    }, []);

    const handleDelItem = async (id) => {
        dispatch(removeProduct(id));
        // const docRef = doc(db, 'cartDetail', `${userUID}`);
        // await deleteDoc(docRef);
    };

    const getCartHistory = async (auth) => {
        const docRef = doc(db, `${auth.currentUser.email}`, `cartDetails`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const obList = docSnap.data();
            console.log('Document data:', obList);
            dispatch(setOrderList(obList.orderList));
            dispatch(setTotalPrice(obList.totalPrice));
            dispatch(setTotalQty(obList.totalQty));
        } else {
            console.log('No such document!');
        }
    };

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
