import React, { useEffect, useState } from 'react';
import { filmGallery } from '../../config/strapiController';
import FilmDetail from '../../components/OdiaFilmArchive/FilmDetail';
import FilmComponent from '../../components/OdiaFilmArchive/FilmComponent';
import { Film } from 'lucide-react';

const VaultofPreservedFilms: React.FC = () => {
  const [filmData, setFilmData] = useState<any[]>([]);
  const [selectedFilm, setSelectedFilm] = useState<any | null>(null);

useEffect(() => {
  filmGallery()
    .then((response:any) => {
      const archiveEntry = response.data?.[0]; // safe optional chaining
      if (archiveEntry && archiveEntry.filmArchive) {
        setFilmData(archiveEntry.filmArchive);
      } else {
        setFilmData([]); // default to empty array if undefined
      }
    })
    .catch((error) => {
      console.error('Failed to fetch archive data:', error);
    });
}, []);
const filteredData = filmData.filter((item) => item.preserved === true);

  return (
    <div>
      {selectedFilm ? (
        <div className="pt-8 bg-gray-900">
          <FilmDetail
            item={selectedFilm}
            onClose={() => setSelectedFilm(null)}
          />
        </div>
      ) : (
       <div className=" p-8  bg-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <Film className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-black">
             Vault of Preserved Films
            </h2>
          </div>

            <FilmComponent
              archiveData={filteredData}
              onSelectFilm={setSelectedFilm}
            />
        </div>
      )}
    </div>
  );
};

export default VaultofPreservedFilms;
