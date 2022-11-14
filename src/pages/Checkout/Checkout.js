import Bill from '~/components/Bill';
import styles from './Checkout.module.scss';

function Checkout() {
    return (
        <div className={styles.checkout}>
            <h1>checkout page</h1>
            <Bill checkout />
        </div>
    );
}

export default Checkout;
