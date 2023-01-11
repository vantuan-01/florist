import { Fragment, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { DefaultLayout } from '~/Layout';
import Loading from './components/Loading';
import ScrollToTop from '~/components/ScrollToTop';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Suspense fallback={<Loading />}>
                    <ScrollToTop>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                const Page = route.component;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout banner={route.banner}>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </ScrollToTop>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
