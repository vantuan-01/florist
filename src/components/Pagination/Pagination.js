import styles from './Pagination.module.scss';

function Pagination({ pagination, handlePageChange }) {
    const totalPages = Math.ceil(pagination._totalRows / pagination._limit);
    const onPageChange = (newPage) => {
        if (handlePageChange) {
            handlePageChange(newPage);
            console.log(newPage);
        }
    };
    return (
        <div>
            <button disabled={pagination._page <= 1} onClick={() => onPageChange(pagination._page - 1)}>
                Prev
            </button>
            <button disabled={pagination._page === totalPages} onClick={() => onPageChange(pagination._page + 1)}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
