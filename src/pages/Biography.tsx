
import React from 'react';
import Navigation from '../components/Navigation';
import { Music, Users, Globe, Award, Calendar, MapPin, Mic, Radio } from 'lucide-react';

const Biography = () => {
  const achievements = [
    { icon: Music, title: "Debut EP", description: "Released 'Scarecrow the EP' digitally" },
    { icon: Globe, title: "International Performances", description: "Performed at Grahamstown Counter Festival" },
    { icon: Users, title: "The Scarecrow Band", description: "Formed with musicians from Mabvuku" },
    { icon: Award, title: "Poetry Recognition", description: "Regular at House of Hunger Poetry Slams" },
  ];

  const timelineSections = [
    {
      period: "Early Life (1986-1992)",
      title: "The Beginning",
      content: "Born Dimitri Dzinashe Kwenda on March 20th, 1986, to Dzarira Robert Kwenda and Olivia Kwenda (nee Mudokwenyu) in suburban Harare. His father was studying in Russia at the time of his birth, so his mother was assisted by her older sister in Mbare. When his father returned, 3-year-old Dimitri moved to Old Marimba at 186 Buby Way, later transitioning to Chiredzi where his father worked for Agriculture for Rural Development Association (ARDA).",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
    },
    {
      period: "Belvedere Years (1992-2001)",
      title: "First Encounter with Hip-Hop",
      content: "At age 6, the family moved to Belvedere Flats where Dimitri attended Selborne Routledge Primary School. This is where his love affair with hip-hop began. His orphaned cousin Romeo Nhamo Kwenda moved in with cassette tapes and a battered stereo. Dimitri discovered artists like The Fresh Prince & DJ Jazzy Jeff, Arrested Development, Busta Rhymes, The Notorious BIG, Wu-Tang Clan, and LL Cool J through 3FM's Hitsville top 20 countdown.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      period: "The Friendship (Age 10)",
      title: "Meeting Keith Kudzu Kuhudzai",
      content: "A pivotal friendship began with Keith from Mutare, who had a CD player and an AIWA stereo with recording capabilities. Together they started writing rhymes, first copying their favorite artists, then developing their own lyrics. They formed neighborhood crew D-KAST drill and began distributing mixtapes in their government flats complex.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop"
    },
    {
      period: "Prince Edward Era (1999-2003)",
      title: "The Scriptures & School Days",
      content: "Moving to Prince Edward High School alongside Keith, Dimitri initially took the alias K-9 during the 'Dogg' era influenced by DMX and Dr. Dre. After a brief hiatus and religious awakening at 15, he and Keith formed 'The Scriptures,' performing at Celebration Centre. Their style evolved, influenced by Eminem's wordsmith-ery and cynicism.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      period: "United Talent Club",
      title: "Building Community",
      content: "Under teacher Rahim Solomon's guidance, the United Talent Club incorporated members like Innocent Masamba (Killaflow) and Sopho Matsheza (Kryptyk, now Mr. Badhabit). They performed at Allied Arts Institution events, with instrumental backing by Sam Mtukudzi, Vimbai Mukarati, and John Pfumojena on marimba.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop"
    },
    {
      period: "Africa University (2004-2008)",
      title: "College Years & Growth",
      content: "At Africa University, Dimitri met Ashley Bawa from FOCUS group. His freestyle performances amazed fellow students who hadn't expected such skills from a Zimbabwean Christian rapper. He began making beats and performing at college functions while gradually drifting from strict religious adherence.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      period: "The Wilderness (2009-2011)",
      title: "Finding Direction",
      content: "After university, Dimitri worked as a Sales Representative and later Projects Co-ordinator for Harvesters In Sport Trust. Frustrated with formal work life, he quit after a year. 2011 became a period of heavy drinking and soul-searching, though he wrote some of his best work during sober daylight hours.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
    },
    {
      period: "The Scarecrow Era (2012-Present)",
      title: "Birth of an Artist",
      content: "Following friend Tawanda Mudzonga's advice to pursue his passion, Dimitri began attending Book Cafe open mic sessions. He met bass player Francis Jiri, who introduced him to musicians from Mabvuku. Together they formed 'Dimitri & The Scarecrow' with Phineas Ota, Vengai Ota, Billy Ngwira, George Ota, and Francis Jiri, releasing the debut EP 'Scarecrow the EP.'",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    }
  ];

  const influences = [
    "The Fresh Prince & DJ Jazzy Jeff", "Arrested Development", "Busta Rhymes", 
    "The Notorious BIG", "Wu-Tang Clan", "LL Cool J", "DMX", "Eminem",
    "Tunnel Rats", "Braille", "Deepspace 5", "Mars ILL", "Phanatik"
  ];

  const venues = [
    "The Book Cafe", "The Music Factory", "Afrikan Hip-Hop Caravan (GODOBORI)",
    "Grahamstown Counter Festival", "Love 'n' Hip-Hop", "Zimbabwe German Society"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 pt-24">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&h=1080&fit=crop"
              alt="Dimitri & The Scarecrow"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center pt-32 md:pt-48">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              The Story
            </h1>
            <p className="text-xl text-gray-300 mb-4">Dimitri Dzinashe Kwenda</p>
            <p className="text-lg text-gray-400">Born March 20th, 1986 • Harare, Zimbabwe</p>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Mic className="w-8 h-8 mr-3 text-gray-400" />
              The Artist
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Dimitri D. Kwenda is a Zimbabwean hip-hop artist, poet (including spoken word), and producer. 
              His journey from the government flats of Belvedere to forming "Dimitri & The Scarecrow" is a 
              testament to passion, persistence, and the power of community in shaping an artist's voice.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Calendar className="w-8 h-8 mr-3 text-gray-400" />
            The Journey
          </h2>
          <div className="space-y-8">
            {timelineSections.map((section, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-6 group">
                <div className="lg:w-1/3">
                  <div className="sticky top-24">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-600/20">
                      <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">
                        {section.period}
                      </h3>
                      <h4 className="text-white text-xl font-bold">{section.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600/20 group-hover:bg-white/15 transition-all duration-300">
                    <img 
                      src={section.image}
                      alt={section.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <p className="text-gray-300 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-gray-600/20">
                <achievement.icon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Musical Influences */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Radio className="w-8 h-8 mr-3 text-gray-400" />
            Musical Influences
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20">
            <div className="flex flex-wrap gap-3">
              {influences.map((influence, index) => (
                <span 
                  key={index}
                  className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-700/50 transition-colors"
                >
                  {influence}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Venues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <MapPin className="w-8 h-8 mr-3 text-gray-400" />
            Performance Venues
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {venues.map((venue, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 text-white p-4 rounded-lg text-center hover:bg-gray-700/30 transition-colors"
                >
                  {venue}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Band Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Dimitri & The Scarecrow</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">The Band Members</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Dimitri D. Kwenda</strong> - Vocals, Rap</li>
                  <li>• <strong>Francis Jiri</strong> - Bass</li>
                  <li>• <strong>Phineas Ota</strong> - Instruments</li>
                  <li>• <strong>Vengai Ota</strong> - Instruments</li>
                  <li>• <strong>Billy Ngwira</strong> - Instruments</li>
                  <li>• <strong>George Ota</strong> - Instruments</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">The Formation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Formed in 2012 when Dimitri met Francis Jiri at The Book Cafe open mic sessions. 
                  Francis introduced him to his friends from Mabvuku, creating a unique blend of 
                  hip-hop and live instrumentation that defines their sound today.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-600/20">
            <blockquote className="text-xl text-white italic mb-4">
              "Choose something you are passionate about and pursue it, for the universe will conspire to make life work out."
            </blockquote>
            <p className="text-gray-400">- Tawanda Mudzonga's advice that changed Dimitri's path</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
