// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import { PublicLayout } from "@src/layouts/PublicLayout";

// const Home = lazy(() => import("@src/views/Home"));
// const Products = lazy(() => import("@src/views/Products"));

// function App() {
//   return (
//     <Suspense fallback={<div>loading</div>}>
//       <Routes>
//         <Route element={<PublicLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// }
// src/App.tsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import Profile from './components/ProfileSection/Profile';

const Home = lazy(() => import('./views/Home'));
const Products = lazy(() => import('./views/Products'));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="profile" element={<Profile />} />
            </PublicLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;


