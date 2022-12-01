import Images from '~/assets/images';
import styles from './ThankYou.module.scss';

function ThankYou() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {/* <div className={styles.plant}>
                    <Plants />
                </div> */}
                <div className={styles.card}>
                    <img src={Images.Thank} alt="thank" />
                    <div className={styles.content}>
                        <h1>Thank you</h1>
                        <span>In the bottom of heart, we would like to express our huge thanks for your support </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;
