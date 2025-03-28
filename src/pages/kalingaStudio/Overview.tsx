import {
  Camera,
  PlayCircle,
  LayoutGrid,
  PenTool,
  ChevronRight,
  Building2,
  TreePine,
  Building,
} from 'lucide-react';
import kalingastudio from '../../assets/KalingaAssets/kalingaStudio.jpg';
const KalingaStudiosOverview = () => {
  return (
    <div className="w-full px-5">
      <div className="min-h-screen bg-gray-50">
        <section id="about" className=" md:py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                {/* <img
                  src="https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/sambad-english/media/post_banners/wp-content/uploads/2023/10/kalinga-studio-750x430-1.jpg"
                  alt="Kalinga Studios"
                  className="rounded-lg shadow-xl w-full"
                /> */}
                <div className="relative ">
                  <img
                    src={kalingastudio}
                    alt="Sample"
                    className="w-full h-full grayscale-60 object-cover rounded-lg"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-red-500 font-semibold">ABOUT US</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  The Heart of Odisha's Film Industry
                </h2>
                <p className="text-gray-700 mb-6 text-justify">
                  Kalinga Studios Ltd. has played an instrumental role in the
                  growth of the film industry in Odisha since its establishment
                  on July 25, 1980. Originally established as a joint venture
                  between the Odisha Film Development Corporation Ltd. (OFDC)
                  and M/s. Sarada Enterprises, Chennai, it began commercial
                  operations on May 5, 1982.
                </p>
                <p className="text-gray-700 mb-6 text-justify">
                  Since July 1983, after M/s. Sarada Enterprises surrendered
                  their shares, the studio has been a fully owned subsidiary of
                  OFDC. The studio provides a platform for filmmakers to bring
                  their creative visions to life while ensuring high production
                  values and post-production quality.
                </p>
                <div className="flex items-center text-red-500 font-semibold cursor-pointer group">
                  <span>Learn more about our facilities</span>
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section id="history" className="py-16 md:py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-red-500 font-semibold">OUR JOURNEY</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Kalinga Studios Timeline
              </h2>
              <p className="text-gray-700">
                From its inception to its current renovation, Kalinga Studios
                has been at the forefront of Odisha's film industry evolution.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-8 md:mb-0 md:pr-8 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-2">Establishment</h3>
                      <p className="text-gray-600 mb-2">July 25, 1980</p>
                      <p className="text-gray-700">
                        Established as a joint venture between OFDC and M/s.
                        Sarada Enterprises
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-red-500 w-6 h-6 rounded-full"></div>
                  </div>
                  <div className="md:w-5/12 md:pl-8"></div>
                </div>

                <div className="relative flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-8 md:mb-0"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-red-500 w-6 h-6 rounded-full"></div>
                  </div>
                  <div className="md:w-5/12 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-2">
                        Commercial Operations
                      </h3>
                      <p className="text-gray-600 mb-2">May 5, 1982</p>
                      <p className="text-gray-700">
                        Started commercial operations and began serving the
                        Odisha film industry
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-8 md:mb-0 md:pr-8 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-2">
                        Full OFDC Acquisition
                      </h3>
                      <p className="text-gray-600 mb-2">July 1983</p>
                      <p className="text-gray-700">
                        OFDC acquired all shares, making it a fully owned
                        subsidiary
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-red-500 w-6 h-6 rounded-full"></div>
                  </div>
                  <div className="md:w-5/12 md:pl-8"></div>
                </div>

                <div className="relative flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-8 md:mb-0"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-red-500 w-6 h-6 rounded-full"></div>
                  </div>
                  <div className="md:w-5/12 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-2">
                        Renovation Project
                      </h3>
                      <p className="text-gray-600 mb-2">Present</p>
                      <p className="text-gray-700">
                        Currently undergoing renovation to become a world-class,
                        ultra-modern film studio complex
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Phases */}
        <section id="phases" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-red-500 font-semibold">
                DEVELOPMENT PLAN
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Three-Zone Development Strategy
              </h2>
              <p className="text-gray-700">
                Our master plan divides the studio development into three
                distinct zones, each with a specific purpose and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-red-500 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-7">
                  <div className="bg-red-100 col-span-2 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Building2 className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="col-span-5">
                    <h3 className="text-xl font-bold mb-4">Zone 1 (Phase-1)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Main Entrance Area</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Administration Block</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Indoor Shooting Floors</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Post-production Facilities</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Commercial Space</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 flex justify-center">
                  <span className="inline-block  bg-red-100 text-red-600 px-3 py-1 text-sm font-medium rounded-full">
                    Currently In Development
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-red-500 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-7">
                  {' '}
                  <div className="bg-red-100  col-span-2 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <TreePine className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="col-span-5">
                    <h3 className="text-xl font-bold mb-4">Zone 2 (Phase-1)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Outdoor Shooting Locales</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Performance Stage</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Theme-based Gardens</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Public Entertainment Area</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <span className="inline-block bg-red-100 text-red-600 px-3 py-1 text-sm font-medium rounded-full">
                        Currently In Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-gray-300 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-7">
                  {' '}
                  <div className="bg-gray-200 col-span-2 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Building className="h-8 w-8 text-gray-500" />
                  </div>
                  <div className="col-span-5">
                    <h3 className="text-xl font-bold mb-4">Zone 3 (Phase-2)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span>Commercial Real Estate</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span>Retail and Office Space</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span>Food Court</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span>Open Area for Social Gatherings</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span>4-Star Hotel</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <span className="inline-block bg-gray-200 text-gray-600 px-3 py-1 text-sm font-medium rounded-full">
                        Future Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 mb-10 ">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-red-400 font-semibold">OUR OFFERINGS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Comprehensive Production Services
              </h2>
              <p className="text-gray-600">
                Kalinga Studios provides end-to-end solutions for filmmakers
                across all aspects of production and post-production.
              </p>
            </div>

            <div className="grid grid-cols-1 text-white sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                <Camera className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Production Facilities
                </h3>
                <p className="text-gray-300">
                  Modern equipment and advanced shooting facilities for
                  high-quality film production.
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                <PlayCircle className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Recording Studios</h3>
                <p className="text-gray-300">
                  State-of-the-art sound recording and editing facilities for
                  pristine audio production.
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                <LayoutGrid className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Editing Suites</h3>
                <p className="text-gray-300">
                  Advanced editing workstations with industry-standard software
                  for seamless post-production.
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                <PenTool className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">VFX Capabilities</h3>
                <p className="text-gray-300">
                  Visual effects services to enhance storytelling and create
                  captivating cinematic experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KalingaStudiosOverview;
