import React from 'react';
import { Calendar,  User, Music, Users } from 'lucide-react';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';

export interface ArchiveItem {
  id: string;
  title: string;
  year: string;
  releaseDate: string;
  productionCompany: string;
  producer: string;
  director: string;
  writer: string;
  dialogues: string;
  music: string;
  cast: string[];
  duration: string;
  thumbnail: string;
  description: string;
  category: string;
  songs?: string[];
  historicalNote?: string;
}
interface ArchiveGalleryProps {
  archiveData: any[];
  onSelectFilm: (film: any) => void;
}
const FilmComponent: React.FC<ArchiveGalleryProps> = ({
  archiveData,
  onSelectFilm,
}) => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {' '}
      {archiveData.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
          onClick={() => onSelectFilm(item)}
        >
          <div className="relative h-48">
            <img
              src={STRAPI_API_BASE_URL + item?.posterImage?.url}
              alt={item?.filmName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white rounded-full text-sm">
              {item.Category || 'N/A'}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {item?.filmName}
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{item.releaseDate || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <User className="w-4 h-4" />
                <span>{item.director || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Music className="w-4 h-4" />
                <span>{item.music || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span>
                  {item.cast?.[0]?.children?.length || 0} Cast Members
                </span>
              </div>
            </div>
            {item.description?.[0]?.children?.[0]?.text ? (
              <p className="text-gray-400 line-clamp-3 mt-2">
                {item.description[0].children[0].text}
              </p>
            ) : (
              <p className="text-gray-500 italic mt-2">
                No description available.
              </p>
            )}
            {/* <p className="text-gray-400 line-clamp-2">{item.description}</p> */}
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default FilmComponent;
