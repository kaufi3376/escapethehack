import React from 'react';
import Header from '../Component/layout/Header';
import Footer from '../Component/layout/Footer';

/**
 * 
 * defaul layout that includes a header, footer and content
 * 
 * @param {
 * 
 * } param0 
 */


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