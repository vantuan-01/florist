import { doc, setDoc } from 'firebase/firestore';

import { db } from '~/utils/firebase';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

const getCart = async (orderList, totalPrice, totalQty) => {
    const mail = localStorage.getItem('userEmail');
    await setDoc(doc(db, `${mail}`, 'cartDetails'), {
        orderList,
        totalPrice,
        totalQty,
    });
};
export const updateCart = (orderList, totalPrice, totalQty) => {
    const useruid = localStorage.getItem('userUID');
    if (useruid && useruid.length !== 0 && useruid !== null) {
        getCart(orderList, totalPrice, totalQty);
    }
};
