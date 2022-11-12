import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';

function SignInLayout({ children }) {
    return <div className={styles.loginScreen}>{children}</div>;
}

export default SignInLayout;
