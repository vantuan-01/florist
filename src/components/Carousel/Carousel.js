// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { Carousel as Carousels } from 'react-responsive-carousel';

import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import styles from './Carousel.module.scss';

function Carousel() {
    return (
        // <div className={styles.carousel_module}>
        //     <Carousels
        //         className={styles.carousel_container}
        //         showThumbs={false}
        //         showStatus={false}
        //         animationHandler="fade"
        //     >
        //         <div className={styles.carousel_inner}>
        //             <img src={Images.slider1} />
        //             <div className={styles.carousel_text}>
        //                 <span>fresh flower & gift shop</span>
        //                 <h1>Making beautiful flowers a part of your life </h1>
        //                 <Link>shop now</Link>
        //             </div>
        //         </div>
        //         <div className={styles.carousel_inner}>
        //             <img src={Images.slider2} />
        //             <div className={styles.carousel_text}>
        //                 <span>fresh flower & gift shop</span>
        //                 <h1>Making beautiful flowers a part of your life </h1>
        //                 <Link>shop now</Link>
        //             </div>
        //         </div>
        //     </Carousels>
        // </div>
        <div className={styles.carousel_module}>
            <div className={styles.carousel_container}>
                <div className={styles.carousel_inner}>
                    <img src={Images.slider1} alt="carousel" />

                    <div className={styles.carousel_text}>
                        <span>fresh flower & gift shop</span>
                        <h1>Making beautiful flowers a part of your life </h1>
                        <Link to={config.product}>shop now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
