import Home from '../views/pages/home';
import Partner from '../views/pages/partner';
import Package from '../views/pages/package';
import About from '../views/pages/about';
import Cart from '../views/pages/cart';
import Portofolio from '../views/pages/portofolio';

const routes = {
  '/': Home,
  '/#': Home,
  '/partner': Partner,
  '/package': Package,
  '/about': About,
  '/cart': Cart,
  '/portofolio': Portofolio,
};

export default routes;
