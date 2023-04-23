import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/components/routes';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {publicRoute.map((route, index) => {
                        if (route.component === Register || route.component === Login) {
                            return <Route key={index} path={route.path} element={<route.component />} />;
                        } else if (route.component === Home) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <>
                                            <Header />
                                            <div className="container">
                                                <route.component />
                                            </div>
                                            <Footer />
                                        </>
                                    }
                                />
                            );
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <>
                                            <Header />
                                            <div className="container">
                                                <route.component />
                                            </div>
                                        </>
                                    }
                                />
                            );
                        }
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
