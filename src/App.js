import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/components/routes';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCQN-UsBK5ID4Ev0TJvBuWAfYVHjFSuzVQ',
    authDomain: 'kobu-1e3dc.firebaseapp.com',
    projectId: 'kobu-1e3dc',
    storageBucket: 'kobu-1e3dc.appspot.com',
    messagingSenderId: '646708388334',
    appId: '1:646708388334:web:bc6b64aed9b555044b6eff',
    measurementId: 'G-NY8EMJN1VW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
