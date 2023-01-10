import Images from '~/assets/images';
import styles from './Blog.module.scss';

function Blog() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_1} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>trend news</span>
                        </div>
                        <h2>8 Romantic Gifts to Celebrate Your Wedding Anniversary</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_2} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>tips & idea</span>
                        </div>
                        <h2>Red Rose - Flower of love of Greek Mythology</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_3} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>diy & crafts</span>
                        </div>
                        <h2>Beautiful Mandalas Made From Flowers by Kathy Klein</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_4} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>trend news</span>
                        </div>
                        <h2>6 Unique Features of the Floret Online Workshop</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_5} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>tips & idea</span>
                        </div>
                        <h2>Beyond Red Roses: Valentine’s Day Gift Guide</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_6} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>diy & crafts</span>
                        </div>
                        <h2>A Year in Flowers Makes the New York Times Bestseller List</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_7} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>trend news</span>
                        </div>
                        <h2>Launching A Year in Flowersinto the World</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_8} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>tips & idea</span>
                        </div>
                        <h2>Beyond Red Roses: Valentine’s Day Gift Guide</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
            <div className={styles.col_4}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={Images.blog_9} alt="blog-img" />
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.tag}>
                            <span>diy & crafts</span>
                        </div>
                        <h2>Pansies and Violas for Cut Flowers</h2>
                        <span>Flowers have a language all their own. In Victorian times, receiving a…</span>
                        <p>MAY 22, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
