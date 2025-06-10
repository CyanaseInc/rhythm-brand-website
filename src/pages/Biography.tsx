import React from 'react';
import Navigation from '../components/Navigation';
import { Award, Music, Users, Globe } from 'lucide-react';

const Biography = () => {
  const achievements = [
    { icon: Music, title: "15 Studio Albums", description: "Released over 15 full-length albums" },
    { icon: Globe, title: "Global Tours", description: "Performed in over 50 countries worldwide" },
    { icon: Users, title: "50M+ Streams", description: "Total streams across all platforms" },
    { icon: Award, title: "Industry Awards", description: "Multiple electronic music awards" },
  ];

  const timeline = [
    { year: "2010", event: "Started music production in home studio" },
    { year: "2012", event: "First EP release 'Beginnings'" },
    { year: "2015", event: "Debut album 'Electric Pulse' breaks charts" },
    { year: "2018", event: "First world tour - 30 cities" },
    { year: "2020", event: "Virtual concert during pandemic reaches 1M viewers" },
    { year: "2022", event: "Launched clothing brand" },
    { year: "2024", event: "Latest album 'Digital Dreams' tops electronic charts" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      
      {/* Hero Section with Artist Portrait */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 pt-24">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&h=1080&fit=crop"
              alt="Dimitri & The Scarecrow Portrait"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center pt-32 md:pt-48">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Biography
            </h1>
            <p className="text-xl text-gray-300">The story behind the music</p>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        {/* Main Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">The Journey</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Born from a passion for electronic soundscapes and driven by an insatiable desire to push 
                  musical boundaries, Dimitri & The Scarecrow has emerged as one of the most innovative voices in contemporary 
                  electronic music.
                </p>
                <p>
                  What started as late-night studio sessions in a small bedroom has evolved into a global 
                  phenomenon, with tracks that have moved dance floors from underground clubs to massive 
                  festival stages around the world.
                </p>
                <p>
                  The unique sound combines deep bass lines, ethereal melodies, and cutting-edge production 
                  techniques that create immersive sonic experiences. Each track tells a story, each album 
                  takes listeners on a journey through digital landscapes and emotional depths.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Artist Photo */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-1 rounded-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop"
                  alt="Dimitri in the studio"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <blockquote className="text-lg text-white italic text-center">
                "Music is the universal language that connects us all. Through electronic sounds, 
                I try to create bridges between hearts and minds."
              </blockquote>
              <p className="text-purple-400 text-center mt-4 font-semibold">- Dimitri & The Scarecrow</p>
            </div>
          </div>
        </div>

        {/* Artist Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Behind the Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop"
                alt="Studio Sessions"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Studio Life</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                alt="Creative Process"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Creative Process</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop"
                alt="Inspiration"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Finding Inspiration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <achievement.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-purple-400 font-bold text-lg">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                <div className="flex-grow bg-white/10 backdrop-blur-sm rounded-lg p-4 group-hover:bg-white/20 transition-all duration-300">
                  <p className="text-white">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Press & Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { publication: "Electronic Music Weekly", quote: "A revolutionary force in electronic music" },
              { publication: "DJ Magazine", quote: "Consistently pushing boundaries with innovative sounds" },
              { publication: "Music Producer News", quote: "The future of electronic music is here" },
            ].map((press, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-gray-300 italic mb-4">"{press.quote}"</p>
                <p className="text-purple-400 font-semibold">- {press.publication}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
