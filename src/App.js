import { Fragment, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { DefaultLayout } from '~/Layout';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Suspense fallback={<h1>Loading...</h1>}>
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
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
