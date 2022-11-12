import styles from './Loading.module.scss';

function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.loader1}></div>
                <p>Loader 1</p>
            </div>
        </div>
    );
}

export default Loading;
