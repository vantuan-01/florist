import * as httpRequest from '~/utils/httpRequest';

import { addProduct, selectOrderList, selectQty, selectTotalPrice, selectTotalQty } from '~/reducers/Cart';
import { doc, setDoc } from 'firebase/firestore';
import { faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QtyButton from '~/components/QtyButton';
import clsx from 'clsx';
import { db } from '~/utils/firebase';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { getAuth } from 'firebase/auth';
import styles from './ProductDetail.module.scss';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const auth = getAuth();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [detailItems, setDetailItems] = useState();
    const [description, setDescription] = useState();
    const [changeImg, setChangeImg] = useState();
    const [changeLove, setChangeLove] = useState();
    const presentQty = useSelector(selectQty);
    const orderList = useSelector(selectOrderList);
    const totalPrice = useSelector(selectTotalPrice);
    const totalQty = useSelector(selectTotalQty);

    useEffect(() => {
        httpRequest.get(`/product/products/${id}`).then((res) => {
            setDetailItems(res.data);
        });
    }, [id]);
    // useEffect(() => {
    //     const updateCart = async () => {
    //         await setDoc(doc(db, `${auth.currentUser.email}`, 'cartDetails'), { orderList, totalPrice, totalQty });
    //     };
    //     updateCart();
    // }, [orderList]);

    const handleAddToCart = () => {
        const groupDetailItem = { detailItems, presentQty };
        dispatch(addProduct(groupDetailItem));
    };

    return (
        <div className={styles.productDetail}>
            {detailItems && detailItems.length !== 0 && (
                <div className={styles.container}>
                    <div className={styles.groupImg}>
                        <div className={styles.main_img}>
                            <img
                                src={changeImg && changeImg.length !== 0 ? changeImg : detailItems.imageUrl}
                                alt={detailItems.name}
                            />
                        </div>
                        <div className={styles.sub_img}>
                            <ul>
                                {detailItems.imageTags &&
                                    detailItems.imageTags !== 0 &&
                                    detailItems.imageTags.map((imageTag, index) => {
                                        return (
                                            <li key={index}>
                                                <img
                                                    onClick={() => setChangeImg(imageTag.imageUrl)}
                                                    src={imageTag.imageUrl}
                                                    alt={imageTag.id}
                                                />
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.groupInfo}>
                        <div className={styles.groupInfo_row}>
                            <div className={styles.main_info}>
                                <div className={styles.name_rate}>
                                    <span className={styles.category}>{detailItems.category}</span>
                                    <h4 className={styles.name}>{detailItems.name}</h4>
                                    <ul className={styles.reviews}>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>00 reviews</li>
                                    </ul>
                                </div>
                                <div className={styles.price}>{`$${detailItems.price}.00`}</div>
                            </div>
                            <div className={styles.sub_info}>
                                <ul>
                                    <li>
                                        catigories: <span>{detailItems.category}</span>
                                    </li>
                                    <li>
                                        product code: <span>{`PM 0${detailItems.id}`}</span>
                                    </li>
                                    <li>
                                        availability: <span>{detailItems.qty}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.groupInfo_row}>
                            <div className={styles.btn_group}>
                                <div className={styles.btn_amount}>
                                    <QtyButton qty={detailItems} />
                                </div>
                                <button onClick={handleAddToCart} className={styles.btn_add}>
                                    <div className={styles.cart_icon}>
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </div>
                                    <span>add to cart</span>
                                </button>
                                {/* <button className={styles.add}>Add to cart</button> */}
                                <button
                                    onClick={() => {
                                        setChangeLove(!changeLove);
                                    }}
                                    className={clsx(styles.btn_love, { [styles.btn_love_active]: changeLove })}
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </div>
                        </div>
                        <div className={styles.groupInfo_row}>
                            <div className={styles.description}>
                                <ul>
                                    <li>
                                        <button onClick={() => setDescription(detailItems.description)}>
                                            Description
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setDescription(detailItems.returnPolicy)}>
                                            Shipping & Returns
                                        </button>
                                    </li>
                                    <li>
                                        <button>Reviews</button>
                                    </li>
                                </ul>
                                <p>{description && description.length !== 0 ? description : detailItems.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;
