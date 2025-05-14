import React, { useEffect, useState } from 'react'
import TableComponent from '../../components/Table';
import { getAllBookingsOfUser } from '../../config/controller';

const UserPaymentHistory:React.FC = () => {
   const token = sessionStorage.getItem('token')
    const userId = sessionStorage.getItem('userID')
    const [ setData] = useState<any>([])
  const columns = [
    { label: 'Sl No.', field: 'slNo' },
    { label: 'Booking Type', field: 'bookingType' },
    { label: 'Booking Date', field: 'bookingDate' },
    { label: 'Payment Mode', field: 'paymentMode' },
    { label: 'Paid On', field: 'paidOn' },
    { label: 'Transcation Status', field: 'transcationStatus' },
  ];
  const dataTable = [
    { slNo: 1, bookingType: 'CBFC Screening', bookingDate: '2023-10-01' , paymentMode: 'UPI', paidOn: '2023-10-01',transcationStatus: 'Success' },
    { slNo: 2, bookingType: 'Workshop Seminar', bookingDate: '2023-10-01' , paymentMode: 'Debit Card', paidOn: '2023-10-01',transcationStatus: 'Pending' },
    { slNo: 3, bookingType: 'Film Trade Show', bookingDate: '2023-10-01' , paymentMode: 'Credit Card', paidOn: '2023-10-01',transcationStatus: 'Failed' },
    { slNo: 4, bookingType: 'Film Audio/Video Visual Screening', bookingDate: '2023-10-01' , paymentMode: 'Net Banking', paidOn: '2023-10-01',transcationStatus: 'Success' },
  ]

    useEffect(() => {
      getAllBookingsOfUser({ token: token,userId: userId || '' })
      .then((res) => {
        setData(res?.data)
        console.log(res?.data, 'res?.data?.data')
      });
    }, [])
  return (
    <div className='w-full min-h-screen bg-white px-auto py-auto'>
            <TableComponent columns={columns} data={dataTable} Heading='User Payment History' search={true} />
    </div>
  )
}

export default UserPaymentHistory
