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
import { useState } from 'react';
import TableComponent from '../../components/Table';

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

  const columns = [
    { label: 'Sl No.', field: 'slNo' },
    { label: 'Booking Type', field: 'bookingType' },
    { label: 'Applicant Name', field: 'applicantName' },
    { label: 'Booking Date', field: 'bookingDate' },
    { label: 'Payment Mode', field: 'paymentMode' },
    { label: 'Paid On', field: 'paidOn' },
    { label: 'Transcation Status', field: 'transcationStatus' },
  ];
  const dataTable = [
    { slNo: 1,applicantName: 'John Doe', bookingType: 'CBFC Screening', bookingDate: '2023-10-01' , paymentMode: 'UPI', paidOn: '2023-10-01',transcationStatus: 'Success' },
    { slNo: 2,applicantName: 'John Doe', bookingType: 'Workshop Seminar', bookingDate: '2023-10-01' , paymentMode: 'Debit Card', paidOn: '2023-10-01',transcationStatus: 'Pending' },
    { slNo: 3,applicantName: 'John Doe', bookingType: 'Film Trade Show', bookingDate: '2023-10-01' , paymentMode: 'Credit Card', paidOn: '2023-10-01',transcationStatus: 'Failed' },
    { slNo: 4,applicantName: 'John Doe', bookingType: 'Film Audio/Video Visual Screening', bookingDate: '2023-10-01' , paymentMode: 'Net Banking', paidOn: '2023-10-01',transcationStatus: 'Success' },
    { slNo: 1,applicantName: 'John Doe', bookingType: 'CBFC Screening', bookingDate: '2023-10-01' , paymentMode: 'UPI', paidOn: '2023-10-01',transcationStatus: 'Success' },
    { slNo: 2,applicantName: 'John Doe', bookingType: 'Workshop Seminar', bookingDate: '2023-10-01' , paymentMode: 'Debit Card', paidOn: '2023-10-01',transcationStatus: 'Pending' },
    { slNo: 3,applicantName: 'John Doe', bookingType: 'Film Trade Show', bookingDate: '2023-10-01' , paymentMode: 'Credit Card', paidOn: '2023-10-01',transcationStatus: 'Failed' },
    { slNo: 4,applicantName: 'John Doe', bookingType: 'Film Audio/Video Visual Screening', bookingDate: '2023-10-01' , paymentMode: 'Net Banking', paidOn: '2023-10-01',transcationStatus: 'Success' },
    { slNo: 1,applicantName: 'John Doe', bookingType: 'CBFC Screening', bookingDate: '2023-10-01' , paymentMode: 'UPI', paidOn: '2023-10-01',transcationStatus: 'Success' },
    { slNo: 2,applicantName: 'John Doe', bookingType: 'Workshop Seminar', bookingDate: '2023-10-01' , paymentMode: 'Debit Card', paidOn: '2023-10-01',transcationStatus: 'Pending' },
    { slNo: 3,applicantName: 'John Doe', bookingType: 'Film Trade Show', bookingDate: '2023-10-01' , paymentMode: 'Credit Card', paidOn: '2023-10-01',transcationStatus: 'Failed' },
    { slNo: 4,applicantName: 'John Doe', bookingType: 'Film Audio/Video Visual Screening', bookingDate: '2023-10-01' , paymentMode: 'Net Banking', paidOn: '2023-10-01',transcationStatus: 'Success' },
  ]

  const [filter, setFilter] = useState('monthly');
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

  return (
    <div className="bg-white p-4 space-y-6 mx-auto">
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
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h6 className="text-lg font-semibold mb-4">Recent Transactions</h6>
        <TableComponent columns={columns} data={dataTable} Heading='Transcation History' maxline={5}/>
      </div>
    </div>
  );
};

export default AdminDashboard;
