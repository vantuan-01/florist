// routes này chỉ tuyến đường này sẽ đi tới page nào

import { HomeLayout, SignInLayout } from '~/Layout';

import About from '~/pages/About';
import Blog from '~/pages/Blog';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Services from '~/pages/Services';
import SignIn from '~/pages/SignIn';
import ThankYou from '~/components/ThankYou';
import routesConfig from '~/config/routes';

// import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
    { path: routesConfig.home, component: Home, layout: HomeLayout },
    { path: routesConfig.products, component: Products, banner: 'products' },
    // { path: routesConfig.productDetail, component: ProductDetail, banner: 'product detail' },
    { path: routesConfig.services, component: Services, banner: 'services' },
    { path: routesConfig.blog, component: Blog, banner: 'blog' },
    { path: routesConfig.contact, component: Contact, banner: 'contact' },
    { path: routesConfig.about, component: About, banner: 'about' },
    { path: routesConfig.cart, component: Cart, banner: 'shopping cart' },
    { path: routesConfig.signIn, component: SignIn, layout: SignInLayout },
    { path: routesConfig.checkout, component: Checkout, banner: 'checkout' },
    { path: routesConfig.thankyou, component: ThankYou, layout: SignInLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
