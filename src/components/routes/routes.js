import Home from '../pages/Home/Home';
import Hotel from '../pages/Hotel/Hotel';
import ItemDetail from '../pages/ItemDetail/ItemDetail';
import Journal from '../pages/Journal';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/hotel', component: Hotel },
    { path: '/hotel/:hotelname', component: ItemDetail },
    { path: '/journal', component: Journal },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

const privateRoute = [];

export { publicRoute, privateRoute };
