import React from 'react';
import { Home, Search, Library, Plus, Heart, Download, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { mockPlaylists, mockUser } from '../data/mock';

const Sidebar = ({ currentSection, setCurrentSection }) => {
  const menuItems = [
    { icon: Home, label: 'Home', section: 'home' },
    { icon: Search, label: 'Search', section: 'search' },
    { icon: Library, label: 'Your Library', section: 'library' }
  ];

  const libraryItems = [
    { icon: Heart, label: 'Liked Songs', section: 'liked' },
    { icon: Download, label: 'Downloaded', section: 'downloaded' }
  ];

  return (
    <div className="w-64 bg-black text-white h-full flex flex-col">
      {/* Main Navigation */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold">Spotify</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.section}
              variant="ghost"
              className={`w-full justify-start gap-4 text-gray-300 hover:text-white transition-colors ${
                currentSection === item.section ? 'text-white bg-gray-800' : ''
              }`}
              onClick={() => setCurrentSection(item.section)}
            >
              <item.icon size={24} />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Library Section */}
      <div className="px-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-300 text-sm font-semibold">YOUR LIBRARY</h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white p-1"
          >
            <Plus size={16} />
          </Button>
        </div>

        <div className="space-y-2 mb-6">
          {libraryItems.map((item) => (
            <Button
              key={item.section}
              variant="ghost"
              className={`w-full justify-start gap-4 text-gray-300 hover:text-white transition-colors ${
                currentSection === item.section ? 'text-white bg-gray-800' : ''
              }`}
              onClick={() => setCurrentSection(item.section)}
            >
              <item.icon size={20} />
              {item.label}
            </Button>
          ))}
        </div>

        {/* Playlists */}
        <ScrollArea className="h-64">
          <div className="space-y-2">
            {mockPlaylists.map((playlist) => (
              <Button
                key={playlist.id}
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:text-white transition-colors p-2 h-auto"
                onClick={() => setCurrentSection('playlist')}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={playlist.cover}
                    alt={playlist.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium">{playlist.name}</p>
                    <p className="text-xs text-gray-400">{playlist.songs} songs</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>

        {/* Recently Played */}
        <div className="mt-6">
          <h4 className="text-gray-300 text-xs font-semibold mb-3">RECENTLY PLAYED</h4>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-white transition-colors p-2"
          >
            <Calendar size={16} className="mr-3" />
            <span className="text-sm">View all recent</span>
          </Button>
        </div>
      </div>

      {/* Install App Button */}
      <div className="p-6 border-t border-gray-800">
        <Button 
          variant="ghost" 
          className="w-full text-gray-300 hover:text-white"
        >
          <Download size={20} className="mr-3" />
          Install App
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;