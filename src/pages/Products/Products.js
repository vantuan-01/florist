import * as httpRequest from '~/utils/httpRequest';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ListItems from './ListItems';
import Pagination from '~/components/Pagination';
import ProductDetail from '~/pages/ProductDetail';
import styles from './Products.module.scss';

function Products() {
    const [items, setItems] = useState();
    const [pagination, setPagination] = useState({ _page: 1, _limit: 10, _totalRows: 1 });
    const [filter, setFilter] = useState({ _page: 1, _limit: 10 });
    useEffect(() => {
        httpRequest.get(`/product/products?_page=${filter._page}&_limit=${filter._limit}`).then((res) => {
            setItems(res.data.data);
            setPagination(res.data.pagination);
        });
    }, [filter]);
    const handlePageChange = (newPage) => {
        setFilter({
            ...pagination,
            _page: newPage,
        });
    };

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.all_items}>
                    <Routes>
                        <Route path=":id" element={<ProductDetail />} />
                        <Route path="/" element={<ListItems items={items} />} />
                    </Routes>
                </div>
                <Pagination pagination={pagination} handlePageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default Products;
