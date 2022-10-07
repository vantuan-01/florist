// routes này chỉ tuyến đường này sẽ đi tới page nào

import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Products from '~/pages/Products';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.products, component: Products },
    { path: routesConfig.productDetail, component: ProductDetail, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };