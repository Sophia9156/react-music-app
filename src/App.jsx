import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./routes/Home'));
const Trends = lazy(() => import('./routes/Trends'));
const Mood = lazy(() => import('./routes/Mood'));

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/trending" element={<Trends />} />
          <Route path="/mood" element={<Mood />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
