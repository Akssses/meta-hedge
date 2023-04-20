import React from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import dot_grid from '../assets/images/grid-dot.png'

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <img className='dot_grid' src={dot_grid} alt=""/>
      <main>
        {children}
      </main>
      <div className='footer_line'/>
      <div className='container'>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
