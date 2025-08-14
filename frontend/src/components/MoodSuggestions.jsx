import React, { useState } from 'react';
import { Brain, Sparkles, TrendingUp, Globe, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockMoodSuggestions, mockLanguages } from '../data/mock';
import SongList from './SongList';

const MoodSuggestions = ({ onPlaySong }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentMood, setCurrentMood] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [step, setStep] = useState('mood'); // 'mood', 'language', 'results'

  const detectMood = () => {
    setIsAnalyzing(true);
    // Simulate AI mood detection
    setTimeout(() => {
      const moods = Object.keys(mockMoodSuggestions);
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setCurrentMood(randomMood);
      setSelectedMood(mockMoodSuggestions[randomMood]);
      setIsAnalyzing(false);
      setStep('language');
    }, 2000);
  };

  const selectMood = (moodKey) => {
    setCurrentMood(moodKey);
    setSelectedMood(mockMoodSuggestions[moodKey]);
    setStep('language');
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setStep('results');
  };

  const resetToMoodSelection = () => {
    setStep('mood');
    setSelectedMood(null);
    setSelectedLanguage(null);
    setCurrentMood('');
  };

  const resetToLanguageSelection = () => {
    setStep('language');
    setSelectedLanguage(null);
  };

  const getCurrentSongs = () => {
    if (selectedMood && selectedLanguage) {
      return selectedMood.languages[selectedLanguage.id] || [];
    }
    return [];
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

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            step === 'mood' ? 'border-purple-500 bg-purple-500 bg-opacity-20 text-purple-300' : 
            selectedMood ? 'border-green-500 bg-green-500 bg-opacity-20 text-green-300' :
            'border-gray-600 text-gray-500'
          }`}>
            <span className="text-sm">1</span>
            <span className="text-sm font-medium">Select Mood</span>
          </div>
          <div className="w-8 h-px bg-gray-600"></div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            step === 'language' ? 'border-blue-500 bg-blue-500 bg-opacity-20 text-blue-300' : 
            selectedLanguage ? 'border-green-500 bg-green-500 bg-opacity-20 text-green-300' :
            'border-gray-600 text-gray-500'
          }`}>
            <span className="text-sm">2</span>
            <span className="text-sm font-medium">Choose Language</span>
          </div>
          <div className="w-8 h-px bg-gray-600"></div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            step === 'results' ? 'border-green-500 bg-green-500 bg-opacity-20 text-green-300' : 
            'border-gray-600 text-gray-500'
          }`}>
            <span className="text-sm">3</span>
            <span className="text-sm font-medium">Enjoy Music</span>
          </div>
        </div>

        {/* Current Status Display */}
        {currentMood && (
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <Badge 
              variant="secondary" 
              className={`bg-gradient-to-r ${selectedMood.color} text-white text-lg py-2 px-6 rounded-full`}
            >
              <span className="mr-2">{selectedMood.icon}</span>
              {selectedMood.mood}
            </Badge>
            {selectedLanguage && (
              <Badge 
                variant="secondary" 
                className={`bg-gradient-to-r ${selectedLanguage.color} text-white text-lg py-2 px-6 rounded-full`}
              >
                <span className="mr-2">{selectedLanguage.flag}</span>
                {selectedLanguage.name}
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Step 1: Mood Selection */}
      {step === 'mood' && (
        <div className="space-y-8">
          <Button
            onClick={detectMood}
            disabled={isAnalyzing}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mx-auto block"
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

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-500" size={24} />
              <h2 className="text-2xl font-bold text-white">Or Choose Your Mood</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(mockMoodSuggestions).map(([key, mood]) => (
                <Card
                  key={key}
                  className="cursor-pointer transition-all duration-300 hover:scale-105 bg-gray-900 border-gray-700 hover:border-gray-600"
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
        </div>
      )}

      {/* Step 2: Language Selection */}
      {step === 'language' && selectedMood && (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Button
              onClick={resetToMoodSelection}
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft size={20} className="mr-2" />
              Change Mood
            </Button>
          </div>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Globe className="text-blue-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Choose Your Language</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Select your preferred language for {selectedMood.mood.toLowerCase()} music
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {mockLanguages.map((language) => (
              <Card
                key={language.id}
                className="cursor-pointer transition-all duration-300 hover:scale-105 bg-gray-900 border-gray-700 hover:border-gray-600"
                onClick={() => selectLanguage(language)}
              >
                <CardContent className="p-4 text-center space-y-3">
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${language.color} flex items-center justify-center text-xl`}>
                    {language.flag}
                  </div>
                  <h3 className="text-sm font-medium text-white">{language.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {step === 'results' && selectedMood && selectedLanguage && (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Button
              onClick={resetToLanguageSelection}
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft size={20} className="mr-2" />
              Change Language
            </Button>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedMood.color} flex items-center justify-center text-xl`}>
                {selectedMood.icon}
              </div>
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${selectedLanguage.color} flex items-center justify-center text-sm`}>
                {selectedLanguage.flag}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedMood.mood} Music in {selectedLanguage.name}
                </h2>
                <p className="text-gray-400">{selectedMood.description}</p>
              </div>
            </div>

            {getCurrentSongs().length > 0 ? (
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="text-yellow-500" size={20} />
                    AI Curated Playlist
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {selectedMood.mood} songs in {selectedLanguage.name} - perfectly matched to your mood
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SongList 
                    songs={getCurrentSongs()} 
                    onPlaySong={onPlaySong}
                    showIndex={true}
                  />
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-8 text-center">
                  <Globe className="mx-auto text-gray-600 mb-4" size={64} />
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Coming Soon!
                  </h3>
                  <p className="text-gray-400">
                    We're working on adding {selectedMood.mood.toLowerCase()} music in {selectedLanguage.name}. 
                    Try another language for now.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Suggestion to try another combination */}
            <div className="text-center">
              <Button
                onClick={resetToMoodSelection}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-white hover:text-white"
              >
                Try Different Mood & Language
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodSuggestions;