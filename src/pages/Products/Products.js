import * as httpRequest from '~/utils/httpRequest';

import { Route, Routes } from 'react-router-dom';
import { selectFilter, selectPaginatePath, setFilter, setPaginatePath } from '~/reducers/Pagination';
import { selectOrderList, selectTotalPrice, selectTotalQty } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ListItems from './ListItems';
import Loading from '~/components/Loading';
import ProductDetail from '~/pages/ProductDetail';
import { selectSortPath } from '~/reducers/Products';
import styles from './Products.module.scss';
import { updateCart } from '~/features';

function Products() {
    const dispatch = useDispatch();
    const [items, setItems] = useState();
    const filter = useSelector(selectFilter);
    const sortPath = useSelector(selectSortPath);
    const orderList = useSelector(selectOrderList);
    const totalPrice = useSelector(selectTotalPrice);
    const totalQty = useSelector(selectTotalQty);
    useEffect(() => {
        httpRequest
            .get(
                `/product/products?_sort=${sortPath._sort}&_order=${sortPath._order}&_page=${filter._page}&_limit=${filter._limit}`,
            )
            .then((res) => {
                setItems(res.data.data);
                dispatch(setPaginatePath(res.data.pagination));
            });
    }, [filter, sortPath]);

    useEffect(() => {
        updateCart(orderList, totalPrice, totalQty);
    }, [orderList]);

    if (!items) {
        document.body.style.overflow = 'hidden';
        return <Loading />;
    } else document.body.style.overflow = '';
    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.all_items}>
                    <Routes>
                        <Route path=":id" element={<ProductDetail />} />
                        <Route path="/" element={<ListItems items={items} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Products;
