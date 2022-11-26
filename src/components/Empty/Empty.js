import { Link } from 'react-router-dom';
import config from '~/config/routes';
import styles from './Empty.module.scss';

function Empty() {
    return (
        <div className={styles.empty}>
            <span>Your cart is empty</span>
            <Link className={styles.back_btn} to={config.product}>
                Back to shopping
            </Link>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 479 450" fill="none">
                <path
                    d="M205.193 42.8874C119.169 28.7909 64.2098 126.856 47.4832 177.651C2.79672 325.964 87.781 365.336 135.859 366.483C199.577 357.465 256.525 375.182 277.034 385.168C456.862 435.543 470.442 311.685 454.753 243.459C418.895 105.017 356.345 112.621 329.552 133.728C261.497 181.576 244.904 133.468 245.115 103.433C249.365 52.8489 220.271 41.9926 205.193 42.8874Z"
                    fill="#EEEDFC"
                    stroke="#EEEDFC"
                />
                <rect x="231" y="153" width="2.66667" height="2.66667" fill="#7B72F9" />
                <rect x="235" y="157" width="2.66667" height="2.66667" fill="#7B72F9" />
                <rect x="231" y="157" width="2.66667" height="2.66667" fill="#7B72F9" />
                <rect x="235" y="153" width="2.66667" height="2.66667" fill="#7B72F9" />
                <ellipse
                    cx="269.886"
                    cy="319.81"
                    rx="73.5"
                    ry="10.3433"
                    transform="rotate(3.70988 269.886 319.81)"
                    fill="#CECDDE"
                />
                <path
                    d="M351.124 204.617L324.364 203.751C323.912 203.736 323.506 204.027 323.375 204.459L300.049 281.022C299.915 281.462 299.498 281.754 299.038 281.729L215.923 277.185C215.49 277.161 215.122 276.861 215.011 276.443L199.72 218.792C199.547 218.141 200.055 217.509 200.728 217.537L317.509 222.366"
                    stroke="#4034E0"
                    strokeWidth="2"
                />
                <path
                    d="M299.821 281.772C299.821 281.772 308.285 280.084 308.573 293.081C308.828 304.578 300.319 304.267 300.319 304.267L215.196 299.651"
                    stroke="#4034E0"
                    strokeWidth="2"
                />
                <ellipse
                    cx="226.381"
                    cy="307.905"
                    rx="8"
                    ry="8.5"
                    transform="rotate(-1.26902 226.381 307.905)"
                    fill="#4034E0"
                />
                <ellipse
                    cx="291.476"
                    cy="311.464"
                    rx="8"
                    ry="8.5"
                    transform="rotate(-1.26902 291.476 311.464)"
                    fill="#4034E0"
                />
                <line x1="222.4" y1="218.488" x2="222.707" y2="277.496" stroke="#4034E0" strokeWidth="2" />
                <line x1="240.487" y1="219.161" x2="238.655" y2="278.141" stroke="#4034E0" strokeWidth="2" />
                <path d="M209.328 256.773L306.476 262.706" stroke="#4034E0" strokeWidth="2" />
                <line x1="203.832" y1="234.889" x2="312.066" y2="240.393" stroke="#4034E0" strokeWidth="2" />
                <line x1="258.249" y1="220.84" x2="254.971" y2="279.758" stroke="#4034E0" strokeWidth="2" />
                <line x1="275.667" y1="220.505" x2="271.543" y2="279.369" stroke="#4034E0" strokeWidth="2" />
                <line x1="292.628" y1="222.26" x2="286.658" y2="280.966" stroke="#4034E0" strokeWidth="2" />
                <line x1="297.066" y1="160.602" x2="297.066" y2="148.038" stroke="#CECDDE" strokeWidth="4" />
                <line x1="296.934" y1="165.26" x2="296.941" y2="177.824" stroke="#CECDDE" strokeWidth="4" />
                <line x1="294.564" y1="162.879" x2="282" y2="162.879" stroke="#CECDDE" strokeWidth="4" />
                <line x1="299.435" y1="162.983" x2="311.999" y2="162.976" stroke="#CECDDE" strokeWidth="4" />
                <path
                    d="M265.545 190.618L254.242 124.431C252.275 112.917 265.649 112.718 265.824 125.505L267.53 190.423C267.563 191.664 265.754 191.841 265.545 190.618Z"
                    fill="#23A8F9"
                />
                <path
                    d="M223.606 199.471L190.828 166.862C184.681 160.747 192.681 154.868 198.293 162.524L225.11 198.161C225.857 199.153 224.486 200.347 223.606 199.471Z"
                    fill="#23A8F9"
                />
                <path
                    d="M301.064 198.664L329.978 162.584C335.4 155.818 342.101 163.143 335.09 169.542L302.528 200.02C301.621 200.868 300.288 199.633 301.064 198.664Z"
                    fill="#23A8F9"
                />
                <line x1="164.39" y1="172.343" x2="164.39" y2="165" stroke="#6BCBDB" strokeWidth="2" />
                <line x1="164.56" y1="174.481" x2="164.563" y2="181.824" stroke="#6BCBDB" strokeWidth="2" />
                <line x1="163.343" y1="173.505" x2="156" y2="173.505" stroke="#6BCBDB" strokeWidth="2" />
                <line x1="165.606" y1="173.319" x2="172.949" y2="173.315" stroke="#6BCBDB" strokeWidth="2" />
                <line x1="213.535" y1="144.288" x2="213.535" y2="140" stroke="#CECDDE" strokeWidth="2" />
                <line x1="213.466" y1="146.536" x2="213.469" y2="150.824" stroke="#CECDDE" strokeWidth="2" />
                <line x1="212.34" y1="145.383" x2="208.052" y2="145.383" stroke="#CECDDE" strokeWidth="2" />
                <line x1="214.661" y1="145.442" x2="218.949" y2="145.44" stroke="#CECDDE" strokeWidth="2" />
            </svg> */}
        </div>
    );
}

export default Empty;