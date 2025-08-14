import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Shuffle, 
  Volume2, 
  Heart,
  Maximize2,
  Monitor
} from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { mockSongs } from '../data/mock';

const MusicPlayer = ({ currentSong, isPlaying, setIsPlaying }) => {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isLiked, setIsLiked] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  // Simulate song progress
  useEffect(() => {
    let interval;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong, setIsPlaying]);

  if (!currentSong) {
    return null;
  }

  const formatTime = (percentage) => {
    const duration = currentSong.duration.split(':');
    const totalSeconds = parseInt(duration[0]) * 60 + parseInt(duration[1]);
    const currentSeconds = Math.floor((percentage / 100) * totalSeconds);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4 flex items-center justify-between z-50">
      {/* Song Info */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-14 h-14 rounded object-cover"
        />
        <div className="min-w-0">
          <h4 className="text-white font-medium truncate">{currentSong.title}</h4>
          <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={`p-2 ${isLiked ? 'text-green-500 hover:text-green-400' : 'text-gray-400 hover:text-white'}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
        </Button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 ${isShuffle ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setIsShuffle(!isShuffle)}
          >
            <Shuffle size={16} />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-gray-400 hover:text-white"
          >
            <SkipBack size={20} />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 flex items-center justify-center"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-gray-400 hover:text-white"
          >
            <SkipForward size={20} />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 ${isRepeat ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setIsRepeat(!isRepeat)}
          >
            <Repeat size={16} />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-gray-400 min-w-max">
            {formatTime(progress)}
          </span>
          <Slider
            value={[progress]}
            onValueChange={(value) => setProgress(value[0])}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-gray-400 min-w-max">
            {currentSong.duration}
          </span>
        </div>
      </div>

      {/* Volume and Options */}
      <div className="flex items-center gap-4 flex-1 justify-end">
        <Button
          variant="ghost"
          size="sm"
          className="p-2 text-gray-400 hover:text-white"
        >
          <Monitor size={16} />
        </Button>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-gray-400 hover:text-white"
          >
            <Volume2 size={16} />
          </Button>
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="p-2 text-gray-400 hover:text-white"
        >
          <Maximize2 size={16} />
        </Button>
      </div>
    </div>
  );
};

export default MusicPlayer;