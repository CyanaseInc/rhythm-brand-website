
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
      
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Biography
          </h1>
          <p className="text-xl text-gray-300">The story behind the music</p>
        </div>

        {/* Main Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">The Journey</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Born from a passion for electronic soundscapes and driven by an insatiable desire to push 
                  musical boundaries, Artist Name has emerged as one of the most innovative voices in contemporary 
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
              <div className="bg-gray-800 rounded-2xl p-8 h-64 flex items-center justify-center">
                <span className="text-6xl font-bold text-white">ARTIST</span>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <blockquote className="text-lg text-white italic text-center">
                "Music is the universal language that connects us all. Through electronic sounds, 
                I try to create bridges between hearts and minds."
              </blockquote>
              <p className="text-purple-400 text-center mt-4 font-semibold">- Artist Name</p>
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
