import { doc, setDoc } from 'firebase/firestore';

import { db } from '~/utils/firebase';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

export const updateCart = async (orderList, totalPrice, totalQty) => {
    await setDoc(doc(db, `${auth.currentUser.email}`, 'cartDetails'), { orderList, totalPrice, totalQty });
};
