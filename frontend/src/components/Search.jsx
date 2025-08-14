import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Clock, TrendingUp, Music } from 'lucide-react';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockSongs, mockArtists, mockGenres } from '../data/mock';
import SongList from './SongList';

const Search = ({ onPlaySong, currentSong, isPlaying }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches] = useState(['The Weeknd', 'Billie Eilish', 'Chill music', 'Pop hits']);

  useEffect(() => {
    if (searchTerm.length > 0) {
      // Filter songs based on search term
      const filteredSongs = mockSongs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.album.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredSongs);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">Search</h1>
        
        {/* Search Bar */}
        <div className="relative max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white"
          />
        </div>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <SearchIcon className="text-green-500" size={24} />
            <h2 className="text-2xl font-bold text-white">
              Search Results for "{searchTerm}"
            </h2>
          </div>

          {searchResults.length > 0 ? (
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <SongList
                  songs={searchResults}
                  onPlaySong={onPlaySong}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  showIndex={true}
                />
              </CardContent>
            </Card>
          ) : (
            <div className="text-center py-12">
              <Music className="mx-auto text-gray-600" size={64} />
              <p className="text-gray-400 mt-4">No results found for "{searchTerm}"</p>
              <p className="text-gray-500 text-sm">Try searching for artists, songs, or albums</p>
            </div>
          )}
        </div>
      )}

      {/* Recent Searches */}
      {!searchTerm && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Clock className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold text-white">Recent Searches</h2>
          </div>

          <div className="space-y-3">
            {recentSearches.map((search, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => setSearchTerm(search)}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <Clock className="text-gray-400" size={20} />
                  <span className="text-white">{search}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Browse Categories */}
      {!searchTerm && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-purple-500" size={24} />
            <h2 className="text-2xl font-bold text-white">Browse All</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockGenres.map((genre) => (
              <Card
                key={genre.id}
                className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden relative h-32"
                onClick={() => setSearchTerm(genre.name)}
              >
                <CardContent className="p-4 h-full flex flex-col justify-between relative z-10">
                  <h3 className="text-white font-bold text-lg">{genre.name}</h3>
                  <img
                    src={genre.cover}
                    alt={genre.name}
                    className="absolute bottom-0 right-0 w-16 h-16 object-cover rounded-lg transform rotate-12 translate-x-2 translate-y-2"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;