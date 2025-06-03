import React, { useEffect, useState } from 'react';
import archive from '../../assets/Odia Film Archives Entrance copy.jpg';
import { motion } from 'framer-motion';
import { Archive, Camera, Film } from 'lucide-react';
import { Image } from 'lucide-react';
import { Book } from 'lucide-react';
import { Ticket } from 'lucide-react';
import { FileText } from 'lucide-react';
const ArchivesInsight: React.FC = () => {
  const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current === end) {
        clearInterval(interval);
      }
    }, 20); // Speed of count-up (lower = faster)

    return () => clearInterval(interval);
  }, [end]);

  return <h1>{count} +</h1>;
};
  const archiveSections = [
    {
      title: 'Cinematic Legacy',
      icon: <Film className="w-16 h-16 text-amber-500" />,
      description: "Preserving Odisha's rich film heritage since 1936",
      background: 'bg-gradient-to-br from-amber-100 to-amber-200',
    },
    {
      title: 'Digital Restoration',
      icon: <Archive className="w-16 h-16 text-blue-500" />,
      description: 'Advanced preservation of classic films',
      background: 'bg-gradient-to-br from-blue-100 to-blue-200',
    },
    {
      title: 'Cultural Narrative',
      icon: <Camera className="w-16 h-16 text-green-500" />,
      description: 'More than just films - a cultural repository',
      background: 'bg-gradient-to-br from-green-100 to-green-200',
    },
  ];
  interface StatItem {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const stats: StatItem[] = [
  {
    label: 'Films',
    value: 100,
    icon: <Film className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500'
  },
  {
    label: 'Film Posters',
    value: 150,
    icon: <Image className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    label: 'Film Stills/Photographs',
    value: 500,
    icon: <Camera className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    label: 'Lyrics Books',
    value: 10,
    icon: <Book className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    label: 'Lobby Cards',
    value: 10,
    icon: <Ticket className="w-6 h-6" />,
    color: 'from-yellow-500 to-amber-500'
  },
  {
    label: 'Film Scripts',
    value: 10,
    icon: <FileText className="w-6 h-6" />,
    color: 'from-teal-500 to-cyan-500'
  }
];
  return (
    <div className="p-5 bg-white">
      <div className="m-5 p-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r  text-red-500  bg-clip-text ">
          Archives Insight
        </h2>
        <div className="grid grid-cols-5">
          <div className="col-span-2 relative group">
            <img
              className="relative w-full h-full rounded-xl object-fill object-center"
              src={archive}
              alt="Odisha Landscape"
            />
            {/* <div
              className="absolute inset-0 bg-black opacity-50 rounded-xl transition-opacity duration-300 group-hover:opacity-0"
            ></div> */}
          </div>
          <div className="m-2 col-span-3">
            <p className="text-gray-700 mb-4 text-justify p-1">
              The Odia Film Archive plays a crucial role in preserving the rich
              cinematic heritage of Odisha. As the repository of Odia films,
              documentaries, and other audiovisual materials, the archive is
              dedicated to safeguarding the legacy of the Odia film industry,
              which dates back to the release of Sita Bibaha in 1936. The
              archive collects, restores, and digitizes classic films, ensuring
              they remain accessible for future generations. It serves as a
              valuable resource for researchers, historians, and film
              enthusiasts who wish to study the evolution of Odia cinema, its
              storytelling techniques, cultural influences, and artistic
              contributions.
            </p>
            <p className="text-justify p-1">
              In addition to film preservation, the Odia Film Archive also
              houses scripts, posters, photographs, and memorabilia related to
              the film industry. These materials provide deep insights into the
              socio-political and cultural landscapes reflected in Odia films
              over the decades. The archive collaborates with filmmakers,
              scholars, and institutions to document oral histories of legendary
              actors, directors, and technicians, ensuring that their
              contributions are not forgotten.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {archiveSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.2,
              type: 'spring',
              stiffness: 300,
            }}
            className={`
                ${section.background}
                rounded-2xl p-6 transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl cursor-pointer
                text-gray-800 relative overflow-hidden
              `}
          >
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="ml-4 text-2xl font-bold">{section.title}</h2>
            </div>
            <p className="mb-4 text-gray-700">{section.description}</p>
          </motion.div>
        ))}
      </div>
      <div>
       <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Archive Collection Statistics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-15 transition-opacity"
              style={{ backgroundImage: `linear-gradient(to bottom right, ${stat.color})` }}
            />
            
            <div className="relative p-6 bg-red-200 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <div className="text-black">
                  {stat.icon}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </h3>
                <p className="text-3xl font-bold bg-gradient-to-br bg-clip-text text-black ${stat.color}">
                  <CountUp end={stat.value} /> 
                </p>
              </div>

              <div className="absolute top-3 right-3 w-24 h-24 bg-gradient-to-br opacity-5 rounded-full blur-xl transition-all duration-300 group-hover:scale-150"
                style={{ backgroundImage: `linear-gradient(to bottom right, ${stat.color})` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default ArchivesInsight;
