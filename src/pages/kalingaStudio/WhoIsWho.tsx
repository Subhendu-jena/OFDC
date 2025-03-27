import React, { useState, useEffect } from 'react';
import { 
  Users, 
  User, 
  Phone, 
  Mail, 
  ChevronDown, 
  Award, 
  Briefcase,
  Building,
  Star,
  Calendar,
Zap
} from 'lucide-react';
interface Official {
  id: number;
  name: string;
  designation: string;
  contactNo: string;
  email: string;
  isVacant:Boolean;
  imageUrl:string;
  department:string;
  additionalInfo?: string;
}
const WhoIsWho:React.FC = () => {
  const [searchTerm] = useState('');
  const [filteredOfficials, setFilteredOfficials] = useState<Official[]>([]);
  const [selectedOfficial, setSelectedOfficial] = useState<Official | null>(null);
  const [animateCards, setAnimateCards] = useState(false);
  
  const officials : Official[] = [
    {
      id: 1,
      name: "Vacant",
      designation: "Chairman",
      contactNo: "0671-2305169, 2306532",
      email: "",
      isVacant: true,
      department: "Administration",
      imageUrl: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Sri Samarth Verma, IAS",
      designation: "Managing Director",
      contactNo: "0671-2305169, 2306532",
      email: "mdodfilm@gmail.com",
      isVacant: false,
      department: "Administration",
      imageUrl: "https://odishanewstune.com/wp-content/uploads/2019/02/Verma-.jpg"
    },
    {
      id: 3,
      name: "Sri B.M.B Pattnaik",
      designation: "Officer on Special Duty",
      additionalInfo: "OFS (SAG) (Retd.)",
      contactNo: "9437208372",
      email: "",
      isVacant: false,
      department: "Operations",
      imageUrl: "/api/placeholder/200/200"
    },
    {
      id: 4,
      name: "Sri Prabhas Chandra Mohapatra",
      designation: "Officer on Special Duty",
      contactNo: "9937005537",
      email: "",
      isVacant: false,
      department: "Operations",
      imageUrl: "/api/placeholder/200/200"
    }
  ];
  
  // Animation effect when component mounts
  useEffect(() => {
    setFilteredOfficials(officials);
    
    // Trigger animation for cards after a delay
    setTimeout(() => {
      setAnimateCards(true);
    }, 500);
  }, []);
  
  // Handle search
  useEffect(() => {
    const results = officials.filter(official => 
      official.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      official.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (official.department && official.department.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredOfficials(results);
  }, [searchTerm]);
  
  // Handle official selection
  const handleOfficialClick = (official: Official): void => {
    setSelectedOfficial(selectedOfficial && selectedOfficial.id === official.id ? null : official);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* <KHeroSection subHead1="Odisha Film Development Corporation" heading="Who's Who" subHead2="Find officials and their contact information" tag="Officials" /> */}
      
      {/* Main Content */}
      <main className="relative z-10 container mx-auto max-w-6xl px-6 py-12 grid gap-12">
        {/* Stats and Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center border-l-4 border-red-500">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <Users size={24} className="text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Officials</p>
              <p className="text-2xl font-bold text-gray-800">4</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center border-l-4 border-blue-500">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Building size={24} className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Departments</p>
              <p className="text-2xl font-bold text-gray-800">2</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center border-l-4 border-yellow-500">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <Briefcase size={24} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Designations</p>
              <p className="text-2xl font-bold text-gray-800">3</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center border-l-4 border-green-500">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Calendar size={24} className="text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="text-2xl font-bold text-gray-800">Today</p>
            </div>
          </div>
        </div>
        
        {/* Officials Directory */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Star size={20} className="mr-2" />
              Official Directory
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">Sl No.</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">Name & Position</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOfficials.length > 0 ? (
                  filteredOfficials.map((official, index) => (
                    <tr 
                      key={official.id} 
                      className={`hover:bg-gray-50 ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ 
                        transition: 'all 0.5s ease', 
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{index + 1}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                            {official.isVacant ? (
                              <div className="h-full w-full flex items-center justify-center">
                                <User size={24} className="text-gray-400" />
                              </div>
                            ) : (
                              <img 
                                src={official.imageUrl} 
                                alt={official.name} 
                                className="h-full w-full object-cover"
                              />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className={`text-sm font-medium ${official.isVacant ? 'text-gray-400 italic' : 'text-gray-900'}`}>
                              {official.name}
                            </div>
                            <div className="text-sm text-red-500 font-medium">
                              {official.designation}
                            </div>
                            {official.additionalInfo && (
                              <div className="text-xs text-gray-500">
                                {official.additionalInfo}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          {official.department}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 flex items-center">
                          <Phone size={14} className="mr-1 text-gray-500" />
                          {official.contactNo}
                        </div>
                        {official.email && (
                          <div className="text-sm text-gray-500 flex items-center">
                            <Mail size={14} className="mr-1 text-gray-500" />
                            <a href={`mailto:${official.email}`} className="hover:text-red-500">
                              {official.email}
                            </a>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button 
                          onClick={() => handleOfficialClick(official)}
                          className={`px-3 py-1 rounded-full flex items-center transition-colors ${
                            selectedOfficial && selectedOfficial.id === official.id
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-500'
                          }`}
                        >
                          Details
                          <ChevronDown size={14} className={`ml-1 transform transition-transform ${
                            selectedOfficial && selectedOfficial.id === official.id ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                      No officials found matching "{searchTerm}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Selected Official Details */}
        {selectedOfficial && (
          <div 
            className={`bg-white rounded-2xl shadow-xl overflow-hidden ${animateCards ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}
            style={{ transition: 'all 0.5s ease' }}
          >
            <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Award size={20} className="mr-2" />
                Official Profile
              </h2>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-red-100 shadow-lg mb-4">
                    {selectedOfficial.isVacant ? (
                      <div className="h-full w-full flex items-center justify-center">
                        <User size={64} className="text-gray-400" />
                      </div>
                    ) : (
                      <img 
                        src={selectedOfficial.imageUrl} 
                        alt={selectedOfficial.name} 
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  
                  <h3 className={`text-xl font-bold text-center ${selectedOfficial.isVacant ? 'text-gray-400 italic' : 'text-gray-800'}`}>
                    {selectedOfficial.name}
                  </h3>
                  
                  <p className="text-red-500 font-medium text-center mt-1">{selectedOfficial.designation}</p>
                  
                  {selectedOfficial.additionalInfo && (
                    <p className="text-gray-500 text-sm text-center mt-1">{selectedOfficial.additionalInfo}</p>
                  )}
                  
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {selectedOfficial.department}
                    </span>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:border-l border-gray-200 md:pl-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <Zap size={18} className="mr-2 text-red-500" />
                    Contact Information
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded mr-3 flex-shrink-0">
                        <Phone size={18} className="text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Contact Number</p>
                        <p className="text-gray-800">{selectedOfficial.contactNo}</p>
                      </div>
                    </div>
                    
                    {selectedOfficial.email && (
                      <div className="flex items-start">
                        <div className="bg-red-100 p-2 rounded mr-3 flex-shrink-0">
                          <Mail size={18} className="text-red-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email Address</p>
                          <a href={`mailto:${selectedOfficial.email}`} className="text-gray-800 hover:text-red-500">
                            {selectedOfficial.email}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded mr-3 flex-shrink-0">
                        <Building size={18} className="text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="text-gray-800">{selectedOfficial.department}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <Briefcase size={18} className="mr-2 text-red-500" />
                      Office Address
                    </h4>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-800 font-medium">Odisha Film Development Corporation Ltd.</p>
                      <p className="text-gray-600">Rupali Square, Saheed Nagar</p>
                      <p className="text-gray-600">Bhubaneswar, Odisha 751007</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WhoIsWho;