import { removeAllProducts, selectOrderList, selectTotalPrice } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import config from '~/config/routes';
import styles from './Bill.module.scss';

function Bill({ checkout }) {
    const productList = useSelector(selectOrderList);
    const totalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();

    return (
        <div className={styles.payment}>
            <div className={styles.container}>
                <h2>
                    <span>your order</span>
                </h2>
                {checkout && (
                    <div className={styles.bill_details}>
                        {productList && productList.lenght !== 0
                            ? productList.map((product, index) => (
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
                    <Link
                        className={styles.payment_btn}
                        to={config.home}
                        onClick={() => {
                            dispatch(removeAllProducts());
                            alert('Your order was successful');
                        }}
                    >
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
