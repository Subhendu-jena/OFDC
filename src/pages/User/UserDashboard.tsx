import React, { useEffect, useState } from 'react';
import {
  Clock,
  FileCheck,
  PlusCircle,
  MapPin,
  Calendar,
  Clock3,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/Path';
import { getAllBookingsOfUser } from '../../config/controller';
import { formatDateToMMDDYYYY } from '../../variables/utils';
import Preview from '../../components/BookingForm/Preview';
import { Star } from 'lucide-react';
import Table1 from '../../components/Table1';
import { ScanEye } from 'lucide-react';

const UserDashboard: React.FC = () => {
  const userId = sessionStorage.getItem('userID');
  console.log(userId, 'userId');
  const name = sessionStorage.getItem('name');
  const [data, setData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentBooking, setCurrentBooking] = useState<any>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
  const [viewApplicationForm, setViewApplicationForm] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const columns: {
    header: string;
    accessor: string;
    render?: (row: any) => any;
    size?: number;
  }[] = [
    { header: 'Sl No.', accessor: 'slno' },
    {
      header: 'Booking Name',
      accessor: 'bookingType',
      size: 300,
    },
    {
      header: 'Booking Status',
      accessor: 'approval',
      render: (row: any) => {
        return (
          <div
            className={`px-2 py-1   rounded-full w-max inline-block ${
              row.approval === 'APPROVED'
                ? 'bg-green-100 text-green-800'
                : row.approval === 'PENDING'
                  ? 'bg-yellow-100 text-yellow-800'
                  : row.approval === 'REJECTED'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
            }`}
          >
            {row.approval}
          </div>
        );
      },
    },
    {
      header: 'Payment Status',
      accessor: 'status',
      render: (row: any) => {
        return (
          <div
            className={`px-2 py-1   rounded-full w-max inline-block ${
              row.status === 'CONFIRMED'
                ? 'bg-green-100 text-green-800'
                : row.status === 'PENDING'
                  ? 'bg-yellow-100 text-yellow-800'
                  : row.status === 'CANCELLED'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
            }`}
          >
            {row.status}
          </div>
        );
      },
    },
    {
      header: 'Booking Date',
      accessor: 'bookingDetails',
      render: (row: any) => {
        return (
          <div>
            <p>{formatDateToMMDDYYYY(row?.bookingDetails?.bookingDate)}</p>
          </div>
        );
      },
    },
    {
      header: 'Time Slot',
      accessor: 'timeSlot',
      render: (row: any) => {
        return (
          <div>
            <p>{row?.bookingDetails?.timeSlot}</p>
          </div>
        );
      },
    },
    {
      header: 'View',
      accessor: 'view',
      render: (row: any) => {
        return (
          <div>
            <button
              className="border border-red-500 p-2 bg-red-600 text-white rounded-2xl   cursor-pointer"
              onClick={() => {
                setShowPreview(true);
                setPreviewData(row);
              }}
            >
              <ScanEye />
            </button>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    setLoading(true);
    getAllBookingsOfUser({ userId: userId || '' })
      .then((res) => {
        setData(res?.data);
        //  setCurrentBooking(res?.at(-1)?.data[0])
        setCurrentBooking(res?.data?.slice(-1)?.[0]);
        console.log(res?.data?.slice(-1)?.[0], 'res?.data[0]');
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const viewCurrentBooking = () => {
    setViewApplicationForm(true);
  };
  const onEdit = () => {
    setViewApplicationForm(false);
  };
  const handlereject = async () => {
    setShowPreview(false);
  };
  const filteredData = data.filter((row: any) => {
    const search = searchTerm.toLowerCase();
    return (
      row.bookingType?.toLowerCase().includes(search) ||
      row.status?.toLowerCase().includes(search)
    );
  });

  return (
    <>
      {' '}
      {viewApplicationForm ? (
        <Preview formData={currentBooking} onEdit={onEdit} />
      ) : showPreview && previewData ? (
        <Preview
          formData={previewData}
          onEdit={handlereject}
          // onEdit={handlereject}
          isEditMode={false}
        />
      ) : (
        <>
          {' '}
          <div className="pt-10  bg-white">
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
                    <span
                      className={`px-2 py-1   rounded-full w-max inline-block ${
                        currentBooking?.approval === 'APPROVED'
                          ? 'bg-green-100 text-green-800'
                          : currentBooking?.approval === 'PENDING'
                            ? 'bg-yellow-100 text-yellow-800'
                            : currentBooking?.approval === 'REJECTED'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {currentBooking?.approval}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-500" /> Booking Type
                      :
                      <span className="text-gray-700">
                        {currentBooking?.bookingType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-500" /> Booking ID :
                      <span className="text-gray-700">
                        {currentBooking?._id}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gray-500" /> Booking
                      Date :
                      <span className="text-gray-700">
                        {formatDateToMMDDYYYY(
                          currentBooking?.bookingDetails?.bookingDate
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 className="w-5 h-5 text-gray-500" /> Booking Slot
                      :
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
                    <button
                      onClick={() => {
                        navigate(paths.newBooking);
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <PlusCircle className="w-5 h-5" />
                      New Booking
                    </button>
                    <button
                      className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={viewCurrentBooking}
                    >
                      <FileCheck className="w-5 h-5" />
                      View Application Form
                    </button>
                  </div>
                </div>
              </div>
              <div className=" bg-white pt-2">
                <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center rounded-2xl ">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <Star size={20} className="mr-2" />
                    User Booking History
                  </h2>
                  <div className="flex justify-end">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-90 bg-white placeholder:text-black text-black border-none outline-none px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <Table1
                  columns={columns}
                  isLoading={loading}
                  data={filteredData}
                />
              </div>
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default UserDashboard;
