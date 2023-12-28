import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '@src/components/HeaderSection/Header';
import Footer from '@src/components/FooterSection/Footer'


export function PublicLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer /> 
    </div>
  );
}









