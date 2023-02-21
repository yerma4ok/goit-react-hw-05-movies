import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './App.styled';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const MovieReviews = lazy(() => import('./MovieReviews'));
const MovieCast = lazy(() => import('./MovieCast'));
const SharedLayout = lazy(() => import('./SharedLayout'));

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};