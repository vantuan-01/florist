// routes này chỉ tuyến đường này sẽ đi tới page nào

import About from '~/pages/About';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import { HomeLayout } from '~/Layout';
import ProductDetail from '~/pages/ProductDetail';
import Products from '~/pages/Products';
import Services from '~/pages/Services';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: Home, layout: HomeLayout },
    { path: routesConfig.products, component: Products, banner: 'products' },
    { path: routesConfig.productDetail, component: ProductDetail, banner: 'product detail' },
    { path: routesConfig.services, component: Services, banner: 'services' },
    { path: routesConfig.blog, component: Blog, banner: 'blog' },
    { path: routesConfig.contact, component: Contact, banner: 'contact' },
    { path: routesConfig.about, component: About, banner: 'about' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
