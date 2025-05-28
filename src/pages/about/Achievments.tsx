import { useEffect, useState } from 'react';
import { achivements } from '../../config/strapiController';
import { AreaChartIcon } from 'lucide-react';
import { Loader } from 'lucide-react';

const Achievements = () => {
  // const achievements = [
  //   {
  //     icon: <Building />,
  //     text: 'Establishment of Kalinga Studios with complete facilities for Indoor Shooting, Outdoor Shooting, Editing, Dubbing, Music Recording (Mono & Stereo), Mixing in 16mm, 35mm and CinemaScope format.',
  //   },
  //   {
  //     icon: <Film />,
  //     text: 'Establishment of Prasad Kalinga Film Laboratory for processing and printing of Colour and Black & White films in 16mm, 35mm and CinemaScope format.',
  //   },
  //   {
  //     icon: <Video />,
  //     text: 'Establish a video complex in Kalinga Studio for production of video films, tele-films and serials with facilities for editing, recording, dubbing and shooting.',
  //   },
  //   {
  //     icon: <Play />,
  //     text: 'Organisation of 16 numbers of Regional Film Festivals for screening of various award winning and Indian Panorama films.',
  //   },
  //   {
  //     icon: <Ticket />,
  //     text: "Organisation of 9 numbers of Children's Film Festivals in collaboration with Children Film Society of India.",
  //   },
  //   {
  //     icon: <Globe />,
  //     text: "Organisation of the 5th International Children's Film Festival in the year 1987.",
  //   },
  //   {
  //     icon: <Clapperboard />,
  //     text: 'Organisation of 13 numbers of Foreign Film Festivals.',
  //   },
  //   {
  //     icon: <FileText />,
  //     text: 'Organized workshop and seminar during 2002 on CopyRight Act and development of Odia film industry.',
  //   },
  //   {
  //     icon: <Award />,
  //     text: 'Sanction of subsidy to 275 numbers of Odia feature films.',
  //   },
  //   {
  //     icon: <Trophy />,
  //     text: 'Sanction of subsidy to 43 numbers of non-Odia feature films and subsidy to 9 numbers of documentary films.',
  //   },
  //   {
  //     icon: <Building />,
  //     text: 'Sanction of subsidy to 8 numbers of new cinema houses equivalent to ET collected for the first two years.',
  //   },
  //   {
  //     icon: <Wallet />,
  //     text: 'Sanction of loan for construction of cinema houses to 86 numbers of entrepreneurs.',
  //   },
  //   {
  //     icon: <Wallet />,
  //     text: 'Sanction of Soft Loans for production of 95 numbers of Odia feature films.',
  //   },
  //   {
  //     icon: <FileCheck />,
  //     text: 'Sanction of Term Loan for production of 36 numbers of Odia feature films.',
  //   },
  //   {
  //     icon: <Landmark />,
  //     text: 'Establishment of an office complex known as Chalachitra Bhawan to house the head quarter of the OFDC at Cuttack with a Film Archive and Preview Theatre.',
  //   },
  //   {
  //     icon: <Building />,
  //     text: 'Declaration of film production and cinema hall construction as industrial activities.',
  //   },
  //   {
  //     icon: <Projector />,
  //     text: 'Enforcement of Compulsory screening of Odia feature films in the Cinema Houses since 11th December, 1978.',
  //   },
  //   {
  //     icon: <FileCheck />,
  //     text: 'Opening of a regional office of the Board of Film Certification.',
  //   },
  //   {
  //     icon: <Building />,
  //     text: 'To promote low cost Janata and Rural Cinema houses in the Semi-Urban and Rural Areas respectively.',
  //   },
  //   {
  //     icon: <Wallet />,
  //     text: 'Financial Assistance for renovation and upgradation of existing cinema houses in the State.',
  //   },
  //   {
  //     icon: <Wallet />,
  //     text: 'Provides Term Loan at 10% interest for Odia feature films and also provides financial assistance for Documentary and short films at lower rate of interest.',
  //   },
  //   {
  //     icon: <Award />,
  //     text: 'Provides Subsidy to Odia feature films and non-Odia films for availing Studio facilities.',
  //   },
  //   {
  //     icon: <Projector />,
  //     text: 'Govt. notified for compulsory screening of Odia films in each cinema hall for a minimum period of eight weeks in a calendar year.',
  //   },
  //   {
  //     icon: <Globe />,
  //     text: 'Participated in 1st Odia Biswa Bhasha Samilani held from 03.02.2024 to 08.02.2024 to exhibit the correlation of Odia literature and Odia cinema through vintage cine equipment, short documentaries, film posters and cine magazine covers etc.',
  //   },
  //   {
  //     icon: <History />,
  //     text: 'Participated in historical Balijatra Festival, 2024 to exhibit the vintage cine equipment at the special segment "Odia Asmita - Odia Cinema" at Cuttack-in-Cuttack venue.',
  //   },
  //   {
  //     icon: <Camera />,
  //     text: 'Participated in the International Childrens\' Film Festival at Rourkela organized by Titli Foundation and screened the first ever Odia documentary made on "Khairi the Tiger Princess" made during the year 1979.',
  //   },
  //   {
  //     icon: <Trophy />,
  //     text: 'Organizing Odisha State Film Awards and Odisha State Tele Award on behalf of the Govt. in Odia Language, Literature and Culture Department since 2019.',
  //   },
  // ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    achivements()
      .then(({ data }) => {
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-white">
          {/* Achievements Grid */}
          <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data[0]?.achivement?.map((achievement: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(244, 114, 22, 0.1)' }}
                        >
                          <span
                            className="text-orange-500"
                            style={{ color: '#F47216' }}
                          >
                            <AreaChartIcon />{' '}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700">{achievement?.points}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;
