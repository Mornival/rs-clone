import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout = () => (
    <>
        <Header />
        <main className="main">
            <Outlet />
        </main>
        <Footer />
    </>
);
