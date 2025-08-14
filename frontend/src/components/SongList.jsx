import React from 'react';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';

const SongList = ({ songs, onPlaySong, currentSong, isPlaying, showIndex = false }) => {
  return (
    <div className="space-y-2">
      {songs.map((song, index) => (
        <div
          key={song.id}
          className="group flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          onClick={() => onPlaySong(song)}
        >
          {/* Index/Play Button */}
          <div className="w-8 h-8 flex items-center justify-center">
            {showIndex && !isPlaying ? (
              <span className="text-gray-400 text-sm group-hover:hidden">
                {index + 1}
              </span>
            ) : null}
            <Button
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 ${showIndex ? 'hidden group-hover:flex' : 'flex'} items-center justify-center text-white hover:bg-transparent ${
                currentSong?.id === song.id && isPlaying ? 'flex' : ''
              }`}
            >
              {currentSong?.id === song.id && isPlaying ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
            </Button>
          </div>

          {/* Song Cover */}
          <img
            src={song.cover}
            alt={song.title}
            className="w-12 h-12 rounded object-cover"
          />

          {/* Song Info */}
          <div className="flex-1 min-w-0">
            <h4 className={`font-medium truncate ${
              currentSong?.id === song.id ? 'text-green-500' : 'text-white'
            }`}>
              {song.title}
            </h4>
            <p className="text-gray-400 text-sm truncate">{song.artist}</p>
          </div>

          {/* Album */}
          <div className="hidden md:block min-w-0 flex-1">
            <p className="text-gray-400 text-sm truncate">{song.album}</p>
          </div>

          {/* Like Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 opacity-0 group-hover:opacity-100 transition-opacity ${
              song.isLiked ? 'opacity-100 text-green-500 hover:text-green-400' : 'text-gray-400 hover:text-white'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              // Handle like functionality
            }}
          >
            <Heart size={16} fill={song.isLiked ? 'currentColor' : 'none'} />
          </Button>

          {/* Duration */}
          <span className="text-gray-400 text-sm min-w-max">{song.duration}</span>

          {/* More Options */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              // Handle options
            }}
          >
            <MoreHorizontal size={16} />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SongList;