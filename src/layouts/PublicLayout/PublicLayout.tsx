import { Outlet } from "react-router-dom";
import React from 'react';
import Header from "@src/components/HeaderSection/Header";

export function PublicLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}







