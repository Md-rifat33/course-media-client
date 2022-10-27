import { Outlet } from 'react-router-dom';
import NavBar from '~/layout/NavBar';
import Footer from '~/layout/Footer';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
