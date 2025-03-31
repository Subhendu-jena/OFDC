import { Link } from 'react-router-dom';
// import NightSky from '../components/DiscoverOdisha/Nightsky';

export default function OdishaFilmPolicy() {
  return (
    <div className="bg-gray-100 w-full min-h-screen pt-24">
      <div className="w-full mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg ">
          {/* Sidebar & Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <aside className="bg-gray-200 p-2 rounded-lg md:col-span-1">
              <img
                src="https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/sambad-english/media/post_banners/wp-content/uploads/2023/10/kalinga-studio-750x430-1.jpg"
                alt="Kalinga Studio"
              />
              <h2 className="text-lg font-semibold mb-4">
                ODISHA STATE FILM POLICY 2019
              </h2>
              <Link
                to="#"
                className="block text-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Download Policy
              </Link>
            </aside>

            {/* Main Content */}
            <section className="relative  md:col-span-3">
              {/* <NightSky /> */}
              <header className="bg-gray-800 text-white py-4 px-6 flex items-center">
                <h1 className="text-xl font-bold">
                  Odisha State Film Policy 2019
                </h1>
              </header>
              {/* Objectives */}
              <div className="my-6">
                <h2 className="text-xl font-semibold border-b pb-2 ">
                  Objectives
                </h2>
                <ul className="list-disc list-inside mt-2 text-gray-700 ">
                 {['To promote quality Odia films.',
                 'To facilitate film tourism in the state.',
                 'To bring Odisha as a destination for film shooting.',].map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-2">Support</h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {[
                    'Single Window Approval Process for films shooting in Odisha.',
                    'Investors can apply through GOSWIFT portal for approvals.',
                    'Subsidies for filmmakers shooting in Odisha.',
                    'Financial assistance for film festivals.',
                  ].map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>

              {/* Incentives */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  Incentives
                </h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {[
                    'Capital investment subsidy',
                    'Land allotment',
                    'Interest Subsidy',
                    'Stamp duty exemption',
                    'Reimbursement of Land Conversion charges',
                    'Reimbursement of SGST',
                    'Exemption on electricity duty',
                    'Environmental protection infrastructure subsidy',
                    'Upgradation of screening infrastructure',
                  ].map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>

              {/* Notifications */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  Notifications
                </h2>
                <div className="mt-2 space-y-2">
                  {[
                    'Extension of operational period of Odisha State Film Policy,2019',
                    'District Level Film Facilitation Committee',
                    'Special Single Window Committee',
                    'Film Scrutinizing Committee',
                  ].map((text) => (
                    <div className=" p-3 rounded-md shadow-sm bg-gradient-to-r from-red-700 to-transparent text-white border-l-4 border-l-black">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

