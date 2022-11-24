import Portal from '~/components/Portal';
import SlidingPanel from 'react-sliding-side-panel';
import clsx from 'clsx';
import styles from './SearchResult.module.scss';
import { useState } from 'react';

function SearchResult({ children, openPanel }) {
    // if (!openPanel) {
    //     return null;
    // }
    return (
        <Portal>
            <div className={clsx(styles.searchResult, { [styles.searchResult_slide]: !openPanel })}>
                <div className={styles.container}>{children}</div>
            </div>
        </Portal>
    );
}

export default SearchResult;
