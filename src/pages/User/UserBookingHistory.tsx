import React, { useEffect, useState } from 'react'
import TableComponent from '../../components/Table'
import { getAllBookingsOfUser } from '../../config/controller';

const UserBookingHistory:React.FC = () => {
  const token = sessionStorage.getItem('token')
  const userId = sessionStorage.getItem('userID')
  console.log(userId, 'userId')
  const [data, setData] = useState<any>([])
  const columns = [
    { label: 'Sl No.', field: 'slNo' },
    { label: 'Booking Type', field: 'bookingType' },
    // { label: 'Booking Date', field: 'bookingDate' },
    // { label: 'Screening Date', field: 'screeningDate' },
    { label: 'Status', field: 'status' },
    { label: 'View', field: 'view' },
  ];
  // const dataTable = [
  //   { slNo: 1, bookingType: 'CBFC Screening', bookingDate: '2023-10-01' , screeningDate: '2023-10-01', status: 'Confirmed', view: 'View Details' },
  //   { slNo: 2, bookingType: 'Workshop Seminar', bookingDate: '2023-10-01' , screeningDate: '2023-10-01', status: 'Completed', view: 'View Details' },
  //   { slNo: 3, bookingType: 'Film Trade Show', bookingDate: '2023-10-01' , screeningDate: '2023-10-01', status: 'Completed', view: 'View Details' },
  //   { slNo: 4, bookingType: 'Film Audio/Video Visual Screening', bookingDate: '2023-10-01' , screeningDate: '2023-10-01', status: 'Pending', view: 'View Details' },
  // ]
  useEffect(() => {
    getAllBookingsOfUser({ token: token,userId: userId || '' })
    .then((res) => {
      setData(res?.data)
      console.log(res?.data, 'res?.data?.data')
    });
  }, [])
  
  return (
    <div className='w-full min-h-screen bg-white px-auto py-auto'>
            <TableComponent columns={columns} data={data} Heading='User Booking History' search={true}  />
    </div>
  )
}

export default UserBookingHistory
