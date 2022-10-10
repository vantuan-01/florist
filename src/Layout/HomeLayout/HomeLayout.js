import Footer from '~/components/Footer';
import Header from '~/components/Header';
import React from 'react';
import styles from '~/components/GlobalStyles';

function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
