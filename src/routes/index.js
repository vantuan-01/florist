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
    { path: routesConfig.products, component: Products },
    { path: routesConfig.productDetail, component: ProductDetail },
    { path: routesConfig.services, component: Services },
    { path: routesConfig.blog, component: Blog },
    { path: routesConfig.contact, component: Contact },
    { path: routesConfig.about, component: About },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
