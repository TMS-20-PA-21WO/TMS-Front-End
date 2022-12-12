import Home from '../views/pages/home';
import Partner from '../views/pages/partner';
import Package from '../views/pages/package';
import About from '../views/pages/about';

const routes = {
  '/': Home,
  '/#': Home,
  '/partner': Partner,
  '/package': Package,
  '/about': About,
};

export default routes;
