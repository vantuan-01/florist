import Portal from '~/components/Portal';
import clsx from 'clsx';
import styles from './SearchResult.module.scss';

function SearchResult({ children, openPanel }) {
    // if (!openPanel) {
    //     return null;
    // }
    return (
        <Portal>
            <div className={clsx(styles.searchResult, { [styles.searchResult_slide]: !openPanel })}>
                <div className={styles.wrapper}>{children}</div>
            </div>
        </Portal>
    );
}

export default SearchResult;
