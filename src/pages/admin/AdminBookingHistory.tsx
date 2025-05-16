import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/Table';
import { getAllBookingsForAdmin } from '../../config/controller';

const AdminBookingHistory: React.FC = () => {
  const token = sessionStorage.getItem('token');
  const [data, setData] = useState<any>([]);
  const columns = [
    { label: 'Sl No.', field: 'slNo' },
    { label: 'Booking Type', field: 'bookingType' },
    // { label: 'Applicant Name', field: 'applicantName' },
    // { label: 'Booking Date', field: 'bookingDate' },
    // { label: 'Screening Date', field: 'screeningDate' },
    { label: 'Payment Status', field: 'status' },
    { label: 'Booking Status', field: 'status' },
    { label: 'View', field: 'view' },
  ];
  // const dataTable = [
  //   { slNo: 1,applicantName: 'John Doe', bookingType: 'CBFC Screening', bookingDate: '2023-10-01' , screeningDate: '2023-10-01', status: 'Confirmed', view: 'View Details' },
  //   { slNo: 2,applicantName: 'John Doe', bookingType: 'Workshop Seminar', bookingDate: '2023-10-01' , screeningDate: '2023-10-01', status: 'Completed', view: 'View Details' },
  //   { slNo: 3,applicantName: 'John Doe', bookingType: 'Film Trade Show', bookingDate: '2023-10-01' , screeningDate: '2023-10-01', status: 'Completed', view: 'View Details' },
  //   { slNo: 4,applicantName: 'John Doe', bookingType: 'Film Audio/Video Visual Screening', bookingDate: '2023-10-01' , screeningDate: '2023-10-01', status: 'Pending', view: 'View Details' },
  // ]
  useEffect(() => {
    getAllBookingsForAdmin({ token: token }).then((res) => {
      setData(res?.data);
      console.log(res?.data, 'res?.data?.data');
    });
  }, [data]);
  return (
    <div className="w-full min-h-screen bg-white px-auto py-auto">
      <TableComponent
        columns={columns}
        data={data}
        Heading="Admin Booking History"
        search={true}
      />
    </div>
  );
};

export default AdminBookingHistory;
