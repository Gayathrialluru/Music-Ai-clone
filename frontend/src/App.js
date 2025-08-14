import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Toaster } from './components/ui/sonner';

// Components
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import Home from './components/Home';
import Search from './components/Search';
import Library from './components/Library';
import MoodSuggestions from './components/MoodSuggestions';

// Mock data
import { mockSongs } from './data/mock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Test backend connection
  useEffect(() => {
    const testBackendConnection = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log('Backend connected:', response.data.message);
      } catch (error) {
        console.error('Backend connection failed:', error);
      }
    };

    testBackendConnection();
  }, []);

  const handlePlaySong = (song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <Home
            onPlaySong={handlePlaySong}
            currentSong={currentSong}
            isPlaying={isPlaying}
          />
        );
      case 'search':
        return (
          <Search
            onPlaySong={handlePlaySong}
            currentSong={currentSong}
            isPlaying={isPlaying}
          />
        );
      case 'library':
      case 'liked':
      case 'downloaded':
        return (
          <Library
            onPlaySong={handlePlaySong}
            currentSong={currentSong}
            isPlaying={isPlaying}
          />
        );
      case 'mood':
        return (
          <MoodSuggestions
            onPlaySong={handlePlaySong}
          />
        );
      default:
        return (
          <Home
            onPlaySong={handlePlaySong}
            currentSong={currentSong}
            isPlaying={isPlaying}
          />
        );
    }
  };

  return (
    <BrowserRouter>
      <div className="h-screen bg-black text-white flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar with AI Mood Button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                disabled
              >
                ←
              </button>
              <button
                onClick={() => window.history.forward()}
                className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                disabled
              >
                →
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentSection('mood')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  currentSection === 'mood'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                🧠 AI Mood Music
              </button>
              
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">JD</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto p-6 pb-24">
            {renderCurrentSection()}
          </div>
        </div>

        {/* Music Player */}
        <MusicPlayer
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />

        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;