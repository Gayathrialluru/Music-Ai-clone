import React, { useState } from 'react';
import { Brain, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockMoodSuggestions } from '../data/mock';
import SongList from './SongList';

const MoodSuggestions = ({ onPlaySong }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [currentMood, setCurrentMood] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const detectMood = () => {
    setIsAnalyzing(true);
    // Simulate AI mood detection
    setTimeout(() => {
      const moods = Object.keys(mockMoodSuggestions);
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setCurrentMood(randomMood);
      setSelectedMood(mockMoodSuggestions[randomMood]);
      setIsAnalyzing(false);
    }, 2000);
  };

  const selectMood = (moodKey) => {
    setCurrentMood(moodKey);
    setSelectedMood(mockMoodSuggestions[moodKey]);
  };

  return (
    <div className="space-y-8">
      {/* AI Mood Detection Header */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Brain className="text-purple-500" size={32} />
            <h1 className="text-4xl font-bold text-white">AI Mood Detection</h1>
            <Sparkles className="text-yellow-500" size={32} />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let our AI analyze your current mood and suggest the perfect music to match your feelings
          </p>
        </div>

        <Button
          onClick={detectMood}
          disabled={isAnalyzing}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          {isAnalyzing ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Analyzing your mood...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Brain size={20} />
              Detect My Mood
            </div>
          )}
        </Button>

        {currentMood && (
          <div className="animate-fade-in">
            <Badge 
              variant="secondary" 
              className={`bg-gradient-to-r ${selectedMood.color} text-white text-lg py-2 px-6 rounded-full`}
            >
              <span className="mr-2">{selectedMood.icon}</span>
              Current Mood: {selectedMood.mood}
            </Badge>
          </div>
        )}
      </div>

      {/* Mood Selection Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-green-500" size={24} />
          <h2 className="text-2xl font-bold text-white">Choose Your Mood</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(mockMoodSuggestions).map(([key, mood]) => (
            <Card
              key={key}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 bg-gray-900 border-gray-700 hover:border-gray-600 ${
                currentMood === key ? 'ring-2 ring-white ring-opacity-50' : ''
              }`}
              onClick={() => selectMood(key)}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${mood.color} flex items-center justify-center text-2xl`}>
                  {mood.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{mood.mood}</h3>
                <p className="text-sm text-gray-400">{mood.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Selected Mood Songs */}
      {selectedMood && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedMood.color} flex items-center justify-center text-xl`}>
              {selectedMood.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {selectedMood.mood} Music
              </h2>
              <p className="text-gray-400">{selectedMood.description}</p>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Sparkles className="text-yellow-500" size={20} />
                AI Recommended Tracks
              </CardTitle>
              <CardDescription className="text-gray-400">
                Curated based on your {selectedMood.mood.toLowerCase()} mood
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SongList 
                songs={selectedMood.songs} 
                onPlaySong={onPlaySong}
                showIndex={true}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MoodSuggestions;