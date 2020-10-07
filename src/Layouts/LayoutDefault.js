import React from 'react';
import Header from '../Component/layout/Header';
import Footer from '../Component/layout/Footer';

const LayoutDefault = ({ 
  children: children}) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <div className="site-content">
      {children}
    </div>
    <Footer />
  </>
);

export default LayoutDefault;  