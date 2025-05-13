import React, { useEffect, useState } from 'react';
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
import { getAllBookingsOfUser } from '../../config/controller';
import { formatDateToMMDDYYYY } from '../../variables/utils';

const columns = [
  { label: 'Sl No.', field: 'sNo' },
  { label: 'Booking Type', field: 'bookingType' },
  // { label: 'Booking Date', field: 'bookingDate' },
  // { label: 'Screening Date', field: 'screeningDate' },
  { label: 'Payment Status', field: 'status' },
  { label: 'Booking Status', field: 'status' },
  // { label: 'View', field: 'view' },
];
// const dataTable = [
//   {
//     slNo: 1,
//     bookingType: 'CBFC Screening',
//     bookingDate: '2023-10-01',
//     screeningDate: '2023-10-01',
//     status: 'Confirmed',
//     view: 'View Details',
//   },
//   {
//     slNo: 2,
//     bookingType: 'Workshop Seminar',
//     bookingDate: '2023-10-01',
//     screeningDate: '2023-10-01',
//     status: 'Completed',
//     view: 'View Details',
//   },
//   {
//     slNo: 3,
//     bookingType: 'Film Trade Show',
//     bookingDate: '2023-10-01',
//     screeningDate: '2023-10-01',
//     status: 'Completed',
//     view: 'View Details',
//   },
//   {
//     slNo: 4,
//     bookingType: 'Film Audio/Video Visual Screening',
//     bookingDate: '2023-10-01',
//     screeningDate: '2023-10-01',
//     status: 'Pending',
//     view: 'View Details',
//   },
// ];
// const currentBooking = {
//   location: 'Mountain View Manor',
//   date: '2024-03-25',
//   status: 'Confirmed',
//   shootingTime: '9:00 AM - 6:00 PM',
//   crew: 15,
// };
const UserDashboard:React.FC=()=> {
  const token = sessionStorage.getItem('token')
    const userId = sessionStorage.getItem('userID')
    const name = sessionStorage.getItem('name')
    console.log(userId, 'userId')
    const [data, setData] = useState<any>([])
    const [currentBooking, setCurrentBooking] = useState<any>([])
  const navigate=useNavigate();
  useEffect(() => {
    getAllBookingsOfUser({ token: token,userId: userId || '' })
     .then((res) => {
       setData(res?.data)
       setCurrentBooking(res?.data[0])
       console.log(res?.data[0], 'res?.data[0]')
     });
   }, [])
  return (
    <div className="pt-10  bg-white">
      {/* Header */}

      {/* Dashboard Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg: py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Welcome back, {name} !
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Current Booking Status */}
          <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                Current Booking
              </h3>
              <span  className={`px-2 py-1   rounded-full w-max inline-block ${
                        currentBooking?.approval === 'APPROVED'
                          ? 'bg-green-100 text-green-800'
                          : currentBooking?.approval === 'PENDING'
                            ? 'bg-yellow-100 text-yellow-800'
                            : currentBooking?.approval === 'REJECTED'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}>
                {currentBooking?.approval}
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-500" /> Booking Type :
                <span className="text-gray-700">{currentBooking?.bookingType}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-500" /> Booking ID :
                <span className="text-gray-700">{currentBooking?._id}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" /> Booking Date :
                <span className="text-gray-700">{formatDateToMMDDYYYY(currentBooking?.bookingDetails?.bookingDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-gray-500" /> Booking Slot :
                <span className="text-gray-700">
                {currentBooking?.bookingDetails?.timeSlot}
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
            data={data}
            Heading="User Booking History"
            search={true}
          />
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;