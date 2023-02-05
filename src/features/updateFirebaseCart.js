import { doc, setDoc } from 'firebase/firestore';

import { db } from '~/utils/firebase';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

const getCart = async (orderList, totalPrice, totalQty) => {
    await setDoc(doc(db, `${auth.currentUser.email}`, 'cartDetails'), {
        orderList,
        totalPrice,
        totalQty,
    });
};
export const updateCart = (orderList, totalPrice, totalQty) => {
    const useruid = localStorage.getItem('userUID');
    if (useruid && useruid !== 0) getCart(orderList, totalPrice, totalQty);
};
