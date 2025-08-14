// Mock data for Spotify clone

export const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  subscription: 'Premium'
};

export const mockPlaylists = [
  {
    id: '1',
    name: 'Liked Songs',
    description: 'Your favorite tracks',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    songs: 142,
    isLiked: true
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Relaxing music for any time',
    cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop',
    songs: 87,
    isLiked: false
  },
  {
    id: '3',
    name: 'Workout Hits',
    description: 'High energy songs to get you moving',
    cover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    songs: 156,
    isLiked: false
  },
  {
    id: '4',
    name: 'Road Trip Mix',
    description: 'Perfect songs for long drives',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    songs: 98,
    isLiked: false
  }
];

export const mockArtists = [
  {
    id: '1',
    name: 'The Weeknd',
    avatar: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face',
    followers: '45M',
    isFollowing: true
  },
  {
    id: '2',
    name: 'Billie Eilish',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616c5e7b8ee?w=200&h=200&fit=crop&crop=face',
    followers: '38M',
    isFollowing: false
  },
  {
    id: '3',
    name: 'Drake',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    followers: '52M',
    isFollowing: true
  }
];

export const mockSongs = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:22',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    isLiked: true,
    isPlaying: false,
    mood: 'energetic'
  },
  {
    id: '2',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep',
    duration: '3:14',
    cover: 'https://images.unsplash.com/photo-1494790108755-2616c5e7b8ee?w=300&h=300&fit=crop',
    isLiked: false,
    isPlaying: false,
    mood: 'dark'
  },
  {
    id: '3',
    title: 'God\'s Plan',
    artist: 'Drake',
    album: 'Scorpion',
    duration: '3:19',
    cover: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    isLiked: true,
    isPlaying: false,
    mood: 'uplifting'
  },
  {
    id: '4',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: '÷ (Divide)',
    duration: '3:54',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    isLiked: false,
    isPlaying: false,
    mood: 'happy'
  },
  {
    id: '5',
    title: 'Someone You Loved',
    artist: 'Lewis Capaldi',
    album: 'Divinely Uninspired',
    duration: '3:02',
    cover: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop',
    isLiked: true,
    isPlaying: false,
    mood: 'sad'
  }
];

export const mockLanguages = [
  // English and European Languages
  {
    id: 'english',
    name: 'English',
    flag: '🇺🇸',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'spanish',
    name: 'Spanish',
    flag: '🇪🇸',
    color: 'from-red-500 to-yellow-500'
  },
  {
    id: 'french',
    name: 'French',
    flag: '🇫🇷',
    color: 'from-blue-600 to-red-500'
  },
  {
    id: 'german',
    name: 'German',
    flag: '🇩🇪',
    color: 'from-black to-red-600'
  },
  {
    id: 'italian',
    name: 'Italian',
    flag: '🇮🇹',
    color: 'from-green-500 to-red-500'
  },
  {
    id: 'portuguese',
    name: 'Portuguese',
    flag: '🇧🇷',
    color: 'from-green-500 to-yellow-500'
  },
  {
    id: 'russian',
    name: 'Russian',
    flag: '🇷🇺',
    color: 'from-white to-blue-600'
  },
  {
    id: 'dutch',
    name: 'Dutch',
    flag: '🇳🇱',
    color: 'from-red-500 to-blue-500'
  },
  
  // South Asian Languages
  {
    id: 'hindi',
    name: 'Hindi',
    flag: '🇮🇳',
    color: 'from-orange-500 to-green-500'
  },
  {
    id: 'tamil',
    name: 'Tamil',
    flag: '🇮🇳',
    color: 'from-red-600 to-yellow-500'
  },
  {
    id: 'telugu',
    name: 'Telugu',
    flag: '🇮🇳',
    color: 'from-blue-500 to-yellow-500'
  },
  {
    id: 'bengali',
    name: 'Bengali',
    flag: '🇧🇩',
    color: 'from-green-600 to-red-500'
  },
  {
    id: 'punjabi',
    name: 'Punjabi',
    flag: '🇮🇳',
    color: 'from-yellow-500 to-red-500'
  },
  {
    id: 'urdu',
    name: 'Urdu',
    flag: '🇵🇰',
    color: 'from-green-600 to-white'
  },
  {
    id: 'marathi',
    name: 'Marathi',
    flag: '🇮🇳',
    color: 'from-orange-500 to-blue-500'
  },
  {
    id: 'gujarati',
    name: 'Gujarati',
    flag: '🇮🇳',
    color: 'from-orange-600 to-green-500'
  },
  {
    id: 'kannada',
    name: 'Kannada',
    flag: '🇮🇳',
    color: 'from-red-500 to-yellow-600'
  },
  {
    id: 'malayalam',
    name: 'Malayalam',
    flag: '🇮🇳',
    color: 'from-green-500 to-red-600'
  },
  {
    id: 'nepali',
    name: 'Nepali',
    flag: '🇳🇵',
    color: 'from-blue-600 to-red-500'
  },
  {
    id: 'sinhala',
    name: 'Sinhala',
    flag: '🇱🇰',
    color: 'from-orange-500 to-green-600'
  },
  
  // East Asian Languages
  {
    id: 'korean',
    name: 'Korean',
    flag: '🇰🇷',
    color: 'from-red-500 to-blue-500'
  },
  {
    id: 'japanese',
    name: 'Japanese',
    flag: '🇯🇵',
    color: 'from-red-500 to-white'
  },
  {
    id: 'mandarin',
    name: 'Mandarin',
    flag: '🇨🇳',
    color: 'from-red-600 to-yellow-500'
  },
  {
    id: 'cantonese',
    name: 'Cantonese',
    flag: '🇭🇰',
    color: 'from-red-500 to-white'
  },
  {
    id: 'thai',
    name: 'Thai',
    flag: '🇹🇭',
    color: 'from-red-500 to-blue-600'
  },
  {
    id: 'vietnamese',
    name: 'Vietnamese',
    flag: '🇻🇳',
    color: 'from-red-600 to-yellow-400'
  },
  
  // Middle Eastern and African Languages
  {
    id: 'arabic',
    name: 'Arabic',
    flag: '🇸🇦',
    color: 'from-green-600 to-white'
  },
  {
    id: 'persian',
    name: 'Persian',
    flag: '🇮🇷',
    color: 'from-green-500 to-red-500'
  },
  {
    id: 'turkish',
    name: 'Turkish',
    flag: '🇹🇷',
    color: 'from-red-600 to-white'
  },
  {
    id: 'hebrew',
    name: 'Hebrew',
    flag: '🇮🇱',
    color: 'from-blue-500 to-white'
  },
  {
    id: 'swahili',
    name: 'Swahili',
    flag: '🇰🇪',
    color: 'from-black to-red-500'
  },
  {
    id: 'amharic',
    name: 'Amharic',
    flag: '🇪🇹',
    color: 'from-green-500 to-red-500'
  },
  
  // Other Major Languages
  {
    id: 'indonesian',
    name: 'Indonesian',
    flag: '🇮🇩',
    color: 'from-red-500 to-white'
  },
  {
    id: 'malay',
    name: 'Malay',
    flag: '🇲🇾',
    color: 'from-blue-500 to-red-500'
  },
  {
    id: 'tagalog',
    name: 'Tagalog',
    flag: '🇵🇭',
    color: 'from-blue-500 to-red-500'
  },
  {
    id: 'polish',
    name: 'Polish',
    flag: '🇵🇱',
    color: 'from-white to-red-500'
  },
  {
    id: 'czech',
    name: 'Czech',
    flag: '🇨🇿',
    color: 'from-blue-500 to-red-500'
  },
  {
    id: 'hungarian',
    name: 'Hungarian',
    flag: '🇭🇺',
    color: 'from-red-500 to-green-500'
  },
  {
    id: 'romanian',
    name: 'Romanian',
    flag: '🇷🇴',
    color: 'from-blue-500 to-red-500'
  },
  {
    id: 'greek',
    name: 'Greek',
    flag: '🇬🇷',
    color: 'from-blue-500 to-white'
  },
  {
    id: 'ukrainian',
    name: 'Ukrainian',
    flag: '🇺🇦',
    color: 'from-blue-400 to-yellow-400'
  },
  {
    id: 'swedish',
    name: 'Swedish',
    flag: '🇸🇪',
    color: 'from-blue-500 to-yellow-400'
  },
  {
    id: 'norwegian',
    name: 'Norwegian',
    flag: '🇳🇴',
    color: 'from-red-500 to-blue-500'
  },
  {
    id: 'finnish',
    name: 'Finnish',
    flag: '🇫🇮',
    color: 'from-blue-500 to-white'
  }
];

export const mockMoodSuggestions = {
  happy: {
    mood: 'Happy',
    description: 'Upbeat and joyful music to brighten your day',
    color: 'from-yellow-400 to-orange-500',
    icon: '😊',
    languages: {
      english: [
        {
          id: '6',
          title: 'Happy',
          artist: 'Pharrell Williams',
          album: 'Girl',
          duration: '3:53',
          cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'happy',
          language: 'english'
        },
        {
          id: '7',
          title: 'Can\'t Stop the Feeling!',
          artist: 'Justin Timberlake',
          album: 'Trolls Soundtrack',
          duration: '3:56',
          cover: 'https://images.unsplash.com/photo-1494790108755-2616c5e7b8ee?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'happy',
          language: 'english'
        }
      ],
      spanish: [
        {
          id: '14',
          title: 'Despacito',
          artist: 'Luis Fonsi ft. Daddy Yankee',
          album: 'Vida',
          duration: '3:47',
          cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'happy',
          language: 'spanish'
        },
        {
          id: '15',
          title: 'Macarena',
          artist: 'Los Del Rio',
          album: 'A mí me gusta',
          duration: '4:12',
          cover: 'https://images.unsplash.com/photo-1494790108755-2616c5e7b8ee?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'happy',
          language: 'spanish'
        }
      ],
      korean: [
        {
          id: '16',
          title: 'Dynamite',
          artist: 'BTS',
          album: 'BE',
          duration: '3:19',
          cover: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'happy',
          language: 'korean'
        },
        {
          id: '17',
          title: 'Gangnam Style',
          artist: 'PSY',
          album: 'Psy 6 (Six Rules), Part 1',
          duration: '3:39',
          cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'happy',
          language: 'korean'
        }
      ],
      hindi: [
        {
          id: '18',
          title: 'Jai Ho',
          artist: 'A.R. Rahman',
          album: 'Slumdog Millionaire',
          duration: '3:28',
          cover: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'happy',
          language: 'hindi'
        }
      ]
    }
  },
  sad: {
    mood: 'Sad',
    description: 'Melancholic tunes for reflective moments',
    color: 'from-blue-400 to-blue-600',
    icon: '😢',
    languages: {
      english: [
        {
          id: '8',
          title: 'Someone You Loved',
          artist: 'Lewis Capaldi',
          album: 'Divinely Uninspired',
          duration: '3:02',
          cover: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'sad',
          language: 'english'
        },
        {
          id: '9',
          title: 'Hurt',
          artist: 'Johnny Cash',
          album: 'American IV',
          duration: '3:38',
          cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'sad',
          language: 'english'
        }
      ],
      french: [
        {
          id: '19',
          title: 'Ne me quitte pas',
          artist: 'Jacques Brel',
          album: 'Les Bourgeois',
          duration: '3:45',
          cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'sad',
          language: 'french'
        }
      ],
      spanish: [
        {
          id: '20',
          title: 'Lágrimas Negras',
          artist: 'Bebo Valdés & Diego El Cigala',
          album: 'Lágrimas Negras',
          duration: '4:02',
          cover: 'https://images.unsplash.com/photo-1494790108755-2616c5e7b8ee?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'sad',
          language: 'spanish'
        }
      ]
    }
  },
  energetic: {
    mood: 'Energetic',
    description: 'High-energy tracks to pump you up',
    color: 'from-red-400 to-pink-500',
    icon: '⚡',
    languages: {
      english: [
        {
          id: '10',
          title: 'Thunder',
          artist: 'Imagine Dragons',
          album: 'Evolve',
          duration: '3:07',
          cover: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'energetic',
          language: 'english'
        },
        {
          id: '11',
          title: 'Radioactive',
          artist: 'Imagine Dragons',
          album: 'Night Visions',
          duration: '3:06',
          cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'energetic',
          language: 'english'
        }
      ],
      german: [
        {
          id: '21',
          title: 'Du Hast',
          artist: 'Rammstein',
          album: 'Sehnsucht',
          duration: '3:54',
          cover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'energetic',
          language: 'german'
        }
      ],
      japanese: [
        {
          id: '22',
          title: 'Unravel',
          artist: 'TK from Ling tosite sigure',
          album: 'Tokyo Ghoul OST',
          duration: '4:01',
          cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'energetic',
          language: 'japanese'
        }
      ]
    }
  },
  chill: {
    mood: 'Chill',
    description: 'Relaxing vibes for unwinding',
    color: 'from-green-400 to-teal-500',
    icon: '🌊',
    languages: {
      english: [
        {
          id: '12',
          title: 'Weightless',
          artist: 'Marconi Union',
          album: 'Ambient',
          duration: '8:10',
          cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'chill',
          language: 'english'
        },
        {
          id: '13',
          title: 'River',
          artist: 'Leon Bridges',
          album: 'Coming Home',
          duration: '3:42',
          cover: 'https://images.unsplash.com/photo-1494790108755-2616c5e7b8ee?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'chill',
          language: 'english'
        }
      ],
      portuguese: [
        {
          id: '23',
          title: 'Girl from Ipanema',
          artist: 'Stan Getz & João Gilberto',
          album: 'Getz/Gilberto',
          duration: '5:05',
          cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
          isLiked: true,
          isPlaying: false,
          mood: 'chill',
          language: 'portuguese'
        }
      ],
      italian: [
        {
          id: '24',
          title: 'Caruso',
          artist: 'Lucio Dalla',
          album: 'Dalla',
          duration: '5:23',
          cover: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop',
          isLiked: false,
          isPlaying: false,
          mood: 'chill',
          language: 'italian'
        }
      ]
    }
  }
};

export const mockRecentlyPlayed = [
  mockSongs[0],
  mockSongs[2],
  mockSongs[4],
  mockSongs[1]
];

export const mockTopCharts = [
  {
    id: '1',
    title: 'Top 50 - Global',
    description: 'The most played songs globally',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    songs: mockSongs.slice(0, 3)
  },
  {
    id: '2',
    title: 'Viral 50 - Global',
    description: 'Trending songs worldwide',
    cover: 'https://images.unsplash.com/photo-1494790108755-2616c5e7b8ee?w=300&h=300&fit=crop',
    songs: mockSongs.slice(1, 4)
  }
];

export const mockGenres = [
  { id: '1', name: 'Pop', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  { id: '2', name: 'Rock', cover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop' },
  { id: '3', name: 'Hip Hop', cover: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop' },
  { id: '4', name: 'Electronic', cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop' },
  { id: '5', name: 'Jazz', cover: 'https://images.unsplash.com/photo-1494790108755-2616c5e7b8ee?w=300&h=300&fit=crop' },
  { id: '6', name: 'Classical', cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' }
];