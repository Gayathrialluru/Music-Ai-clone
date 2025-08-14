import React from 'react';
import { Clock, TrendingUp, Music, Headphones } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockRecentlyPlayed, mockTopCharts, mockGenres } from '../data/mock';
import SongList from './SongList';

const Home = ({ onPlaySong, currentSong, isPlaying }) => {
  const timeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">{timeOfDay()}</h1>
        
        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mockRecentlyPlayed.slice(0, 6).map((song) => (
            <Card
              key={song.id}
              className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => onPlaySong(song)}
            >
              <CardContent className="flex items-center p-3 gap-4">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">{song.title}</h3>
                  <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 rounded-full bg-green-500 text-black hover:bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                >
                  <Music size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recently Played */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold text-white">Recently Played</h2>
          </div>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Show all
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mockRecentlyPlayed.map((song) => (
            <Card
              key={song.id}
              className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
              onClick={() => onPlaySong(song)}
            >
              <CardContent className="p-4 space-y-3">
                <div className="relative">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-full aspect-square object-cover rounded-md"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-green-500 text-black hover:bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Music size={16} />
                  </Button>
                </div>
                <div className="space-y-1">
                  <h3 className="text-white font-medium text-sm truncate">{song.title}</h3>
                  <p className="text-gray-400 text-xs truncate">{song.artist}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Charts */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <TrendingUp className="text-red-500" size={24} />
          <h2 className="text-2xl font-bold text-white">Top Charts</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mockTopCharts.map((chart) => (
            <Card key={chart.id} className="bg-gray-900 border-gray-700">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={chart.cover}
                    alt={chart.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-white">{chart.title}</CardTitle>
                    <p className="text-gray-400 text-sm">{chart.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <SongList
                  songs={chart.songs.slice(0, 3)}
                  onPlaySong={onPlaySong}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  showIndex={true}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Browse Genres */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Headphones className="text-purple-500" size={24} />
          <h2 className="text-2xl font-bold text-white">Browse Genres</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockGenres.map((genre) => (
            <Card
              key={genre.id}
              className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              <CardContent className="p-0 relative">
                <img
                  src={genre.cover}
                  alt={genre.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Badge variant="secondary" className="bg-white text-black font-semibold">
                    {genre.name}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;