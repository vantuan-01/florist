import app, { db } from '~/utils/firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { selectLogged, updateStatus } from '~/reducers/Login';
import { setOrderList, setTotalPrice, setTotalQty } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import Images from '~/assets/images';
import styles from './SignIn.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignIn() {
    const auth = getAuth(app);
    const [isRegist, setIsRegist] = useState(false);
    const [isValid, setIsValid] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputRef = useRef();
    const isLogged = useSelector(selectLogged);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        inputRef.current.focus();
    }, [isRegist]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isRegist) {
                if (e.isComposing || e.key === 'Enter') {
                    Register();
                }
            } else if (!isRegist) {
                if (e.isComposing || e.key === 'Enter') {
                    SignIn();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    useEffect(() => {
        if (isLogged.length !== 0) {
            navigate('/');
        }
    }, [isLogged]);

    const Register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Register
                setIsValid('');
                setIsRegist(false);
                alert('Resgist successful');
                console.log('Create account successful');
            })
            .catch((error) => {
                const errorCode = error.code;
                setIsValid(error.code);
                console.log(`register error: ${errorCode}`);
            });
    };

    const SignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Sign in
                const userUID = auth.currentUser ? auth.currentUser.uid : null;
                setIsValid('');
                navigate('/');
                dispatch(updateStatus(userUID));
                console.log('Login successful');
            })
            .catch((error) => {
                const errorCode = error.code;
                setIsValid(error.code);
                console.log(`login error: ${errorCode}`);
            });
    };

    const handleChangeForm = () => {
        setIsRegist(!isRegist);
        setEmail('');
        setPassword('');
    };

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
                        {isValid && <span className={styles.invalid_text}>{isValid}</span>}
                        <input
                            ref={inputRef}
                            className={styles.login_input}
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className={styles.login_input}
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!isRegist ? (
                            <button onClick={SignIn} className={styles.login_btn} type="submit">
                                log in
                            </button>
                        ) : (
                            <button onClick={Register} className={styles.login_btn} type="submit">
                                register
                            </button>
                        )}
                    </div>
                    <div className={styles.footer}>
                        <button className={styles.fogot_btn} onClick={handleChangeForm}>
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
