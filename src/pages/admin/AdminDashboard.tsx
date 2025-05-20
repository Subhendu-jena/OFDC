import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { paths } from '../../routes/Path';
import { adminApprove, adminReject, getAllBookingsForAdmin, refund, userCancel } from '../../config/controller';
import { Star } from 'lucide-react';
import Preview from '../../components/BookingForm/Preview';
import Table1 from '../../components/Table1';
import { formatDateToMMDDYYYY } from '../../variables/utils';
import { ScanEye } from 'lucide-react';

const AdminDashboard = () => {
  const data = [
    { name: 'Jan 01', blog: 400, social: 20 },
    { name: 'Jan 02', blog: 450, social: 35 },
    { name: 'Jan 03', blog: 420, social: 25 },
    { name: 'Jan 04', blog: 600, social: 40 },
    { name: 'Jan 05', blog: 200, social: 15 },
    { name: 'Jan 06', blog: 350, social: 22 },
    { name: 'Jan 07', blog: 220, social: 18 },
    { name: 'Jan 08', blog: 400, social: 30 },
    { name: 'Jan 09', blog: 700, social: 45 },
    { name: 'Jan 10', blog: 390, social: 28 },
    { name: 'Jan 11', blog: 410, social: 20 },
    { name: 'Jan 12', blog: 250, social: 12 },
  ];
const token = sessionStorage.getItem('token');
  const [filter, setFilter] = useState('monthly');
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
   const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data1, setData1] = useState<any>([]);
  const cardData: any = [
    {
      title: 'Total Bookings',
      value: '12',
      color: 'text-blue-500',
      bg: 'bg-blue-100',
      showDropdown: true,
      lastMonth: '10',
      lastYear: '100',
      totalValue: '1000',
    },
    {
      title: 'Rejected Applications',
      value: '2',
      color: 'text-red-500',
      bg: 'bg-red-100',
      lastMonth: '10',
      lastYear: '100',
      totalValue: '1000',
    },
    {
      title: 'Confirmed Applications',
      value: '8',
      color: 'text-green-500',
      bg: 'bg-green-100',
      lastMonth: '10',
      lastYear: '100',
      totalValue: '1000',
    },
    {
      title: 'Pending Approvals',
      value: '2',
      color: 'text-yellow-500',
      bg: 'bg-yellow-100',
      lastMonth: '10',
      lastYear: '100',
      totalValue: '1000',
    },
  ];
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
        size: 250,
      },
      {
        header: 'Applicant Name',
        accessor: 'applicantDetails',
        render: (row: any) => {
          return <div>{row?.applicantDetails?.nameOfApplicant}</div>;
        },
        size: 200,
  
      },
      {
        header: 'Contact Number',
        accessor: 'billingDetails',
        render: (row: any) => {
          return <div>{row?.billingDetails?.contactNo}</div>;
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
        header: 'Booking Date',
        accessor: 'bookingDetails',
        render: (row: any) => {
          return (
            <div>
              <p>{formatDateToMMDDYYYY(row?.bookingDetails?.bookingDate)}</p>
            </div>
          );
        },
        size: 200,
  
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
        size: 150,
  
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
      getAllBookingsForAdmin({})
      .then((res) => {
        setData1(res?.data);
        console.log(res?.data, 'res?.data?.data');
      }).catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);
       const handleConfirm = () => {
          setShowPreview(false);
          adminApprove({
            token: sessionStorage.getItem('token'),
            data: previewData,
            id: previewData?._id,
          });
        };
        const handlereject = async () => {
          setShowPreview(false);
          try {
            const response = await adminReject({
              token: sessionStorage.getItem('token'),
              id: previewData?._id,
            });
            if (response.success) {
              const response = await userCancel({
                token: sessionStorage.getItem('token'),
                id: previewData?._id,
              });
              if (response.success) {
                refund({
                  token: sessionStorage.getItem('token'),
                  id: previewData?._id,
                });
                 getAllBookingsForAdmin({ token: token })
              }
            }
          } catch (err) {}
        };
// const navigate = useNavigate();
  const filteredData = data1.filter((row: any) => {
    const search = searchTerm.toLowerCase();
    return (
      row.bookingType?.toLowerCase().includes(search) ||
      row.status?.toLowerCase().includes(search)
    );
  });
  return (
    <div className="bg-white p-4 space-y-6 mx-auto">
      {/* <div className='text-right border border-amber-500 text-amber-600 p-2 rounded-md w-fit cursor-pointer ' onClick={() => {
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('userID');
                    sessionStorage.removeItem('role');
                    sessionStorage.removeItem('name');
                    sessionStorage.removeItem('email');
                    sessionStorage.removeItem('phoneNo');
                    // window.location.reload();
                    navigate(paths.login, { replace: true });
                  }}>Logout</div> */}
      <div className="mt-2 flex justify-end">
        <select
          className="border outline-none border-amber-500 text-amber-600 p-2 rounded-md "
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="total">Total</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((item: any, index: number) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${item.bg} relative`}
          >
            {/* Card Title */}
            <h6 className="text-lg font-semibold text-gray-700">
              {item.title}
            </h6>

            {/* Dynamic Value Based on Filter */}
            <div className=" flex gap-8 justify-between items-center">
              <h4 className={`text-2xl font-bold ${item.color}`}>
                {filter === 'monthly'
                  ? item.lastMonth
                  : filter === 'yearly'
                    ? item.lastYear
                    : item.totalValue}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Graph & Income Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md md:col-span-2">
          <h6 className="text-lg font-semibold mb-4">Traffic Sources</h6>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="0 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="blog"
                fill="#F47216"
                name="Website Blog"
                radius={[10, 10, 0, 0]}
                barSize={30}
              />
              <Line
                type="monotone"
                dataKey="social"
                stroke="#2ECC71"
                name="Social Media"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Income Section */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <h6 className="text-lg font-semibold mb-4">Income</h6>
          <div className="relative w-32 h-32">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#E5E7EB"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#F47216"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="70"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
              75%
            </div>
          </div>
          <p className="text-gray-500 mt-2">32% Spending Target</p>
        </div>
      </div>

      {/* Data Table */}
      {showPreview && previewData ? (
        <Preview
          formData={previewData}
          onEdit={handlereject}
          onConfirm={handleConfirm}
          isEditMode={false}
        />
      ) : (
        <div className=" bg-white pt-2">
          <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center rounded-2xl ">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Star size={20} className="mr-2" />
              Admin Booking History
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
          <Table1 columns={columns} isLoading={loading} data={filteredData} />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
