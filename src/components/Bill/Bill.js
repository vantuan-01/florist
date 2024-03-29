import { deleteDoc, doc } from 'firebase/firestore';
import { removeAllProducts, selectOrderList, selectTotalPrice } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import config from '~/config/routes';
import { db } from '~/utils/firebase';
import { getAuth } from 'firebase/auth';
import styles from './Bill.module.scss';

function Bill({ checkout }) {
    const auth = getAuth();
    const dispatch = useDispatch();
    const orderList = useSelector(selectOrderList);
    const totalPrice = useSelector(selectTotalPrice);

    const handleCheckOut = async () => {
        dispatch(removeAllProducts());
        localStorage.clear('totalPrice', 'totalQty');
        await deleteDoc(doc(db, `${auth.currentUser.email}`, 'cartDetails'));
    };

    return (
        <div className={styles.payment}>
            <div className={styles.container}>
                <h2>
                    <span>your order</span>
                </h2>
                {checkout && (
                    <div className={styles.bill_details}>
                        {orderList && orderList.lenght !== 0
                            ? orderList.map((product, index) => (
                                  <ul key={index}>
                                      <li>
                                          {product.presentQty}x {product.detailItems.category}
                                          <p>${product.detailItems.price * product.presentQty}.00</p>
                                      </li>
                                  </ul>
                              ))
                            : null}
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

                {checkout ? (
                    <Link className={styles.payment_btn} to={config.thankyou} onClick={handleCheckOut}>
                        Accept payment
                    </Link>
                ) : (
                    <Link className={styles.payment_btn} to={config.checkout}>
                        proceed to checkout
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Bill;
