import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Pagination.module.scss';

function Pagination({ pagination, handlePageChange }) {
    const pageNumber = [];
    const totalPages = Math.ceil(pagination._totalRows / pagination._limit);

    const onPageChange = (newPage) => {
        if (handlePageChange) {
            handlePageChange(newPage);
        }
    };
    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
    }

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.change_page}
                disabled={pagination._page <= 1}
                onClick={() => onPageChange(pagination._page - 1)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {pageNumber.map((num, key) => (
                <button
                    className={styles.page}
                    key={key}
                    disabled={pagination._page === num}
                    onClick={() => onPageChange(num)}
                >
                    {num}
                </button>
            ))}
            <button
                className={styles.change_page}
                disabled={pagination._page === totalPages}
                onClick={() => onPageChange(pagination._page + 1)}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Pagination;
