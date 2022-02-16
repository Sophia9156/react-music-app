import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy, useEffect, useState, useCallback } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./routes/Home'));
const Trends = lazy(() => import('./routes/Trends'));
const Mood = lazy(() => import('./routes/Mood'));
const Player = lazy(() => import('./routes/Player'));

function App({youtube}) {
  const [playlist, setPlaylist] = useState([]);
  const [moodPlaylist, setMoodPlaylist] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const selectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
  }

  const search = useCallback(query => {
    setSelectedPlaylist(null);
    youtube
    .searchMood(query)
    .then(playlist => {
      setMoodPlaylist(playlist);
    });
  },[youtube]);

  useEffect(() => {
    youtube
    .todayMusic()
    .then(playlist => setPlaylist(playlist));
  },[youtube]);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={
            <Home 
            playlist={playlist} 
            onPlaylistClick={selectPlaylist} 
            />
          } />
            <Route path="/trending" element={
            <Trends 
            playlist={playlist} 
            onPlaylistClick={selectPlaylist} 
          />
          } />
          <Route path="/mood" element={
          <Mood 
          onSelect={search}
          playlist={moodPlaylist}
          onPlaylistClick={selectPlaylist}
          />
          } />
          <Route path="/play" element={
            <Player playlist={selectedPlaylist} />
          } />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
