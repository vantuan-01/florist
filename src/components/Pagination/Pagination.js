import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { selectPagination, setFilter } from '~/reducers/Pagination';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Pagination.module.scss';

function Pagination() {
    const dispatch = useDispatch();
    const pagination = useSelector(selectPagination);

    const pageNumber = [];
    const totalPages = Math.ceil(pagination._totalRows / pagination._limit);

    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
    }

    const handlePageChange = (newPage) => {
        dispatch(
            setFilter({
                ...pagination,
                _page: newPage,
            }),
        );
    };

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.change_page}
                disabled={pagination._page <= 1}
                onClick={() => handlePageChange(pagination._page - 1)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {pageNumber.map((num, key) => (
                <button
                    className={styles.page}
                    key={key}
                    disabled={pagination._page === num}
                    onClick={() => handlePageChange(num)}
                >
                    {num}
                </button>
            ))}
            <button
                className={styles.change_page}
                disabled={pagination._page === totalPages}
                onClick={() => handlePageChange(pagination._page + 1)}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Pagination;
