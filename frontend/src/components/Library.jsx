import React, { useState } from 'react';
import { Music, Heart, Download, Clock, Grid3X3, List, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { mockPlaylists, mockArtists, mockSongs } from '../data/mock';
import SongList from './SongList';

const Library = ({ onPlaySong, currentSong, isPlaying }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recently-added');

  const likedSongs = mockSongs.filter(song => song.isLiked);

  return (
    <div className="space-y-8">
      {/* Library Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Your Library</h1>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="text-gray-400 hover:text-white"
          >
            {viewMode === 'grid' ? <List size={20} /> : <Grid3X3 size={20} />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <Filter size={20} />
          </Button>
        </div>
      </div>

      {/* Library Tabs */}
      <Tabs defaultValue="playlists" className="w-full">
        <TabsList className="bg-gray-900 border-gray-700">
          <TabsTrigger value="playlists" className="data-[state=active]:bg-gray-700">
            Playlists
          </TabsTrigger>
          <TabsTrigger value="artists" className="data-[state=active]:bg-gray-700">
            Artists
          </TabsTrigger>
          <TabsTrigger value="albums" className="data-[state=active]:bg-gray-700">
            Albums
          </TabsTrigger>
          <TabsTrigger value="liked" className="data-[state=active]:bg-gray-700">
            Liked Songs
          </TabsTrigger>
        </TabsList>

        {/* Playlists Tab */}
        <TabsContent value="playlists" className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">{mockPlaylists.length} playlists</p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Recently Added
              </Badge>
            </div>
          </div>

          <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'space-y-2'}>
            {mockPlaylists.map((playlist) => (
              <Card
                key={playlist.id}
                className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
              >
                <CardContent className={viewMode === 'grid' ? 'p-4 space-y-3' : 'flex items-center gap-4 p-3'}>
                  <div className="relative">
                    <img
                      src={playlist.cover}
                      alt={playlist.name}
                      className={viewMode === 'grid' ? 'w-full aspect-square object-cover rounded-md' : 'w-12 h-12 rounded object-cover'}
                    />
                    {viewMode === 'grid' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-green-500 text-black hover:bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Music size={16} />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="text-white font-medium truncate">{playlist.name}</h3>
                    <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
                    {viewMode === 'grid' && (
                      <p className="text-gray-500 text-xs">{playlist.songs} songs</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Artists Tab */}
        <TabsContent value="artists" className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">{mockArtists.length} artists</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockArtists.map((artist) => (
              <Card
                key={artist.id}
                className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-4 space-y-3 text-center">
                  <div className="relative">
                    <img
                      src={artist.avatar}
                      alt={artist.name}
                      className="w-full aspect-square object-cover rounded-full"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-green-500 text-black hover:bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Music size={16} />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-medium">{artist.name}</h3>
                    <p className="text-gray-400 text-sm">Artist</p>
                    <p className="text-gray-500 text-xs">{artist.followers} followers</p>
                  </div>
                  <Button
                    variant={artist.isFollowing ? "secondary" : "outline"}
                    size="sm"
                    className="w-full"
                  >
                    {artist.isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Albums Tab */}
        <TabsContent value="albums" className="space-y-6">
          <div className="text-center py-12">
            <Music className="mx-auto text-gray-600" size={64} />
            <p className="text-gray-400 mt-4">No saved albums yet</p>
            <p className="text-gray-500 text-sm">Albums you save will appear here</p>
          </div>
        </TabsContent>

        {/* Liked Songs Tab */}
        <TabsContent value="liked" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Heart size={32} className="text-white fill-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Liked Songs</h2>
              <p className="text-gray-400">{likedSongs.length} songs</p>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <SongList
                songs={likedSongs}
                onPlaySong={onPlaySong}
                currentSong={currentSong}
                isPlaying={isPlaying}
                showIndex={true}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Library;