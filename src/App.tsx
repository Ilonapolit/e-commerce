
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContainer, MainContent, Footer } from './views/App.styles'
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
            <AppContainer>
              <PublicLayout>
                <MainContent>
                  <Route index element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="profile" element={<Profile />} />
                </MainContent>
              </PublicLayout>
              <Footer />
           </AppContainer>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;




