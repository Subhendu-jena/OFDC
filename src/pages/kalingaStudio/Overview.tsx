import {  Camera,  PlayCircle, LayoutGrid, PenTool,  ChevronRight, Building2, TreePine, Building } from 'lucide-react';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';

const KalingaStudiosOverview = () => {

  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-gray-800">Kalinga Studios</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-red-500 transition-colors">About</a>
              <a href="#history" className="text-gray-700 hover:text-red-500 transition-colors">History</a>
              <a href="#phases" className="text-gray-700 hover:text-red-500 transition-colors">Development Phases</a>
              <a href="#services" className="text-gray-700 hover:text-red-500 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors">Contact</a>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-red-500">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 shadow-inner">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-red-500 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#history" className="text-gray-700 hover:text-red-500 transition-colors" onClick={toggleMenu}>History</a>
              <a href="#phases" className="text-gray-700 hover:text-red-500 transition-colors" onClick={toggleMenu}>Development Phases</a>
              <a href="#services" className="text-gray-700 hover:text-red-500 transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav> */}
      
      {/* Hero Section */}
      {/* <div className="relative bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-50 bg-[url('/api/placeholder/1200/600')] bg-center bg-cover"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-red-500 text-white px-3 py-1 text-sm rounded-full mb-4">Established 1980</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Reimagining Cinema at Kalinga Studios</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">An ultra-modern, state-of-the-art film studio complex in the heart of Bhubaneswar, Odisha.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#phases" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors">
                Explore Development <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#history" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 flex items-center transition-colors">
                Our Legacy <Calendar className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <KHeroSection subHead1='Established 1980' subHead2='An ultra-modern, state-of-the-art film studio complex in the heart of Bhubaneswar, Odisha.' heading='Reimagining Cinema at Kalinga Studios' tag='Developments'/>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/sambad-english/media/post_banners/wp-content/uploads/2023/10/kalinga-studio-750x430-1.jpg" 
                alt="Kalinga Studios" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-red-500 font-semibold">ABOUT US</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">The Heart of Odisha's Film Industry</h2>
              <p className="text-gray-700 mb-6">
                Kalinga Studios Ltd. has played an instrumental role in the growth of the film industry in Odisha since its establishment on July 25, 1980. Originally established as a joint venture between the Odisha Film Development Corporation Ltd. (OFDC) and M/s. Sarada Enterprises, Chennai, it began commercial operations on May 5, 1982.
              </p>
              <p className="text-gray-700 mb-6">
                Since July 1983, after M/s. Sarada Enterprises surrendered their shares, the studio has been a fully owned subsidiary of OFDC. The studio provides a platform for filmmakers to bring their creative visions to life while ensuring high production values and post-production quality.
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
      <section id="history" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-semibold">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Kalinga Studios Timeline</h2>
            <p className="text-gray-700">
              From its inception to its current renovation, Kalinga Studios has been at the forefront of Odisha's film industry evolution.
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
                      Established as a joint venture between OFDC and M/s. Sarada Enterprises
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
                    <h3 className="text-xl font-bold mb-2">Commercial Operations</h3>
                    <p className="text-gray-600 mb-2">May 5, 1982</p>
                    <p className="text-gray-700">
                      Started commercial operations and began serving the Odisha film industry
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between flex-col md:flex-row">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-2">Full OFDC Acquisition</h3>
                    <p className="text-gray-600 mb-2">July 1983</p>
                    <p className="text-gray-700">
                      OFDC acquired all shares, making it a fully owned subsidiary
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
                    <h3 className="text-xl font-bold mb-2">Renovation Project</h3>
                    <p className="text-gray-600 mb-2">Present</p>
                    <p className="text-gray-700">
                      Currently undergoing renovation to become a world-class, ultra-modern film studio complex
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
            <span className="text-red-500 font-semibold">DEVELOPMENT PLAN</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Three-Zone Development Strategy</h2>
            <p className="text-gray-700">
              Our master plan divides the studio development into three distinct zones, each with a specific purpose and timeline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-red-500" />
              </div>
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
              <div className="mt-6 pt-6 border-t border-gray-200">
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 text-sm font-medium rounded-full">
                  Currently In Development
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TreePine className="h-8 w-8 text-red-500" />
              </div>
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
            
            <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-gray-300 hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-gray-500" />
              </div>
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
      </section>
      
      {/* Services */}
      <section id="services" className="py-16 mb-10  md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-400 font-semibold">OUR OFFERINGS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Comprehensive Production Services</h2>
            <p className="text-gray-300">
              Kalinga Studios provides end-to-end solutions for filmmakers across all aspects of production and post-production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <Camera className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Production Facilities</h3>
              <p className="text-gray-300">
                Modern equipment and advanced shooting facilities for high-quality film production.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <PlayCircle className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Recording Studios</h3>
              <p className="text-gray-300">
                State-of-the-art sound recording and editing facilities for pristine audio production.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <LayoutGrid className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Editing Suites</h3>
              <p className="text-gray-300">
                Advanced editing workstations with industry-standard software for seamless post-production.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <PenTool className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">VFX Capabilities</h3>
              <p className="text-gray-300">
                Visual effects services to enhance storytelling and create captivating cinematic experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact & Footer */}
      {/* <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Film className="h-8 w-8 text-red-500" />
                <span className="text-2xl font-bold text-gray-800">Kalinga Studios</span>
              </div>
              <p className="text-gray-600 mb-6">
                A world-class film studio complex in the heart of Bhubaneswar, providing comprehensive production and post-production services.
              </p>
              <div className="flex items-center space-x-2 text-gray-700 mb-4">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 mb-4">
                <MessageSquare className="h-5 w-5 text-red-500" />
                <span>info@kalingastudios.com</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    // rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
       */}
  
    </div>
  );
};

export default KalingaStudiosOverview;