import Board from 'containers/Board';
import SignIn from 'containers/SignIn';
import NotFound from 'containers/NotFound';
import Tintuc from 'containers/Tintuc/Loadable';
import Dev from 'containers/Dev/Loadable';
import DevDetail from 'containers/Dev/Detail';
import Contacts from 'containers/Contacts';
import TintucDetail from 'containers/Tintuc/Detail';
import Technology from 'containers/Technology';
import TechnologyDetail from 'containers/Technology/Detail';
const mainRoutes = [
  {
    exact: true,
    path: '/',
    name: 'Home',
    icon: 'home',
    component: Tintuc,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/tintuc',
    name: 'Tin tức',
    icon: 'home',
    component: Tintuc,
    exact: true,
  },
  {
    path: '/dev',
    name: 'Lập trình',
    icon: 'home',
    component: Dev,
    exact: true,

  },
  {
    path: '/dev/:link',
    component: DevDetail,
    icon: 'home',
    name: '',

  },
  {
    path: '/tintuc/:link',
    component: TintucDetail,
    icon: 'home',
    name: '',

  },
  {
    path: '/technology',
    name: 'Máy tính - Điện thoại',
    icon: 'home',
    component: Technology,
    exact: true,

  },

  {
    path: '/technology/:link',
    component: TechnologyDetail,
    icon: 'home',
    name: '',

  },

  {
    path: '/contacts',
    name: 'Liên hệ',
    icon: 'home',
    component: Contacts,
  },

];

export default mainRoutes;
