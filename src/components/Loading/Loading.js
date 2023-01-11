import clsx from 'clsx';
import styles from './Loading.module.scss';

function Loading() {
    return (
        <div className={styles.page}>
            <main className={styles.container}>
                <div className={styles.item}>
                    <i className={clsx(styles.loader, { [styles.__5]: true })}></i>
                </div>
            </main>
        </div>
    );
}

export default Loading;
