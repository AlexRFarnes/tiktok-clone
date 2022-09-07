import Footer from './Footer';
import Header from './Header';
import { LayoutContainer } from '../theme';
import { Routes, Route } from 'react-router-dom';

const Layout = props => {
  return (
    <LayoutContainer>
      <nav>
        <Routes>
          <Route path='/videos' element={<nav></nav>} />
          <Route path='/users/login' element={<nav></nav>} />
          <Route path='/users/signup' element={<nav></nav>} />
          <Route path='*' element={<Header />} />
        </Routes>
      </nav>
      <main>{props.children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
