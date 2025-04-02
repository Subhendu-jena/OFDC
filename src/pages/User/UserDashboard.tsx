import React from 'react';
import {
  Clock,
  FileCheck,
  PlusCircle,
  MapPin,
  Calendar,
  Clock3,
} from 'lucide-react';
import TableComponent from '../../components/Table';
import {  useNavigate } from 'react-router-dom';
import { paths } from '../../routes/Path';
const currentBooking = {
  location: 'Mountain View Manor',
  date: '2024-03-25',
  status: 'Confirmed',
  shootingTime: '9:00 AM - 6:00 PM',
  crew: 15,
};
const columns = [
  { label: 'Sl No.', field: 'sNo' },
  { label: 'Booking Type', field: 'bookingType' },
  { label: 'Booking Date', field: 'bookingDate' },
  { label: 'Screening Date', field: 'screeningDate' },
  { label: 'Status', field: 'status' },
  { label: 'View', field: 'view' },
];
const dataTable = [
  {
    slNo: 1,
    bookingType: 'CBFC Screening',
    bookingDate: '2023-10-01',
    screeningDate: '2023-10-01',
    status: 'Confirmed',
    view: 'View Details',
  },
  {
    slNo: 2,
    bookingType: 'Workshop Seminar',
    bookingDate: '2023-10-01',
    screeningDate: '2023-10-01',
    status: 'Completed',
    view: 'View Details',
  },
  {
    slNo: 3,
    bookingType: 'Film Trade Show',
    bookingDate: '2023-10-01',
    screeningDate: '2023-10-01',
    status: 'Completed',
    view: 'View Details',
  },
  {
    slNo: 4,
    bookingType: 'Film Audio/Video Visual Screening',
    bookingDate: '2023-10-01',
    screeningDate: '2023-10-01',
    status: 'Pending',
    view: 'View Details',
  },
];
const UserDashboard:React.FC=()=> {
  const navigate=useNavigate();
  return (
    <div className="pt-10 p-4 space-y-6 mx-auto bg-white">
      {/* Header */}

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Welcome back, Director!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Current Booking Status */}
          <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                Current Booking
              </h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {currentBooking.status}
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{currentBooking.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{currentBooking.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">
                  {currentBooking.shootingTime}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <button onClick={() => { navigate(paths.newBooking)}} className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                <PlusCircle className="w-5 h-5" />
                New Booking
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                <FileCheck className="w-5 h-5" />
                View Application Form
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 bg-white rounded-lg shadow-md ">
          <TableComponent
            columns={columns}
            data={dataTable}
            Heading="User Booking History"
            search={true}
          />
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;

// import React from 'react';
// import {
//   History,
//   Clock,
//   FileCheck,
//   PlusCircle,
//   Camera,
//   MapPin,
//   Calendar,
//   CheckCircle2,
//   Clock3,
//   Users,
//   DollarSign
// } from 'lucide-react';

// // Mock data for demonstration
// const bookingHistory = [
//   {
//     id: 1,
//     location: "Chilika Lagoon",
//     date: "2024-03-15",
//     status: "Completed",
//     price: "₹10,000",
//     image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&q=80&w=500"
//   },
//   {
//     id: 2,
//     location: "Deomali (Koraput)",
//     date: "2024-03-20",
//     status: "Pending",
//     price: "₹10,000",
//     image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=500"
//   }
// ];

// const currentBooking = {
//   location: "Kalinga Studio",
//   date: "2024-03-25",
//   status: "Confirmed",
//   shootingTime: "9:00 AM - 6:00 PM",
//   crew: 15,
//   image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=500"
// };

// function UserDashboard() {
//   return (
//     <div className="min-h-screen mt-30 p-4 space-y-6 mx-auto">
// {/* Dashboard Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">
//           Welcome back, Director!
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Current Booking Status */}
//           <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
//             <div className="h-48 relative">
//               <img
//                 src={currentBooking.image}
//                 alt={currentBooking.location}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
//                 <div className="p-6 text-white">
//                   <h3 className="text-2xl font-bold">{currentBooking.location}</h3>
//                   <p className="text-white/80">Current Booking</p>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium">
//                   {currentBooking.status}
//                 </span>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="p-4 bg-gray-50 rounded-xl">
//                   <div className="flex items-center gap-2 text-gray-600 mb-1">
//                     <Calendar className="w-4 h-4" />
//                     <span className="text-sm">Shooting Date</span>
//                   </div>
//                   <p className="text-gray-900 font-medium">{currentBooking.date}</p>
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-xl">
//                   <div className="flex items-center gap-2 text-gray-600 mb-1">
//                     <Clock3 className="w-4 h-4" />
//                     <span className="text-sm">Duration</span>
//                   </div>
//                   <p className="text-gray-900 font-medium">{currentBooking.shootingTime}</p>
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-xl">
//                   <div className="flex items-center gap-2 text-gray-600 mb-1">
//                     <Users className="w-4 h-4" />
//                     <span className="text-sm">Crew Size</span>
//                   </div>
//                   <p className="text-gray-900 font-medium">{currentBooking.crew} people</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">
//             <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
//             <div className="space-y-4">
//               <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg">
//                 <PlusCircle className="w-5 h-5" />
//                 New Booking
//               </button>
//               <button className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
//                 <FileCheck className="w-5 h-5" />
//                 View Application Form
//               </button>
//             </div>
//           </div>

//           {/* Booking History */}
//           <div className="col-span-1 lg:col-span-3 space-y-4">
//             <div className="flex items-center gap-2 mb-2">
//               <History className="w-5 h-5 text-indigo-600" />
//               <h3 className="text-xl font-semibold">Booking History</h3>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {bookingHistory.map((booking) => (
//                 <div key={booking.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                   <div className="h-40 relative">
//                     <img
//                       src={booking.image}
//                       alt={booking.location}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <h4 className="font-semibold text-gray-900">{booking.location}</h4>
//                         <p className="text-sm text-gray-500">{booking.date}</p>
//                       </div>
//                       <span className={`px-2 py-1 text-xs rounded-full ${
//                         booking.status === 'Completed'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {booking.status}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-900">
//                       <span className="font-medium">{booking.price}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default UserDashboard;
