import { useEffect, useRef } from 'react';

import Images from '~/assets/images';
import styles from './SignIn.module.scss';
import { useState } from 'react';

function SignIn() {
    const [isRegist, setIsRegist] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <div className={styles.wrapper}>
            <img className={styles.login_bg} src={Images.tableTree} alt="loginbg" />
            <div className={styles.login_wrapper}>
                <div className={styles.login}>
                    <div className={styles.header}>
                        <h1>Welcome to </h1>
                        <img className={styles.login_logo} src={Images.logo} alt="logo" />
                    </div>
                    <div className={styles.body}>
                        {isValid && <span className={styles.invalid_text}>invalid user name or password</span>}
                        <input ref={inputRef} className={styles.login_input} type="text" placeholder="user name" />
                        <input className={styles.login_input} type="password" placeholder="password" />
                        {isRegist && (
                            <input className={styles.login_input} type="password" placeholder="confirm password" />
                        )}
                        <button className={styles.login_btn}>{isRegist ? 'register' : 'log in'}</button>
                    </div>
                    <div className={styles.footer}>
                        <button className={styles.fogot_btn} onClick={() => setIsRegist(!isRegist)}>
                            {isRegist ? 'have an account?' : "don't have account?"}
                        </button>
                        <button className={styles.fogot_btn} onClick={() => alert('kememay')}>
                            forgot your account?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
