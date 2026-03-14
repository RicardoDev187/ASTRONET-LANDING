import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-dvh bg-white text-zinc-950">
      <Navbar /> 
      <main>
        {/* Aquí se renderizarán tus páginas como Home, Belleek, etc. */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}