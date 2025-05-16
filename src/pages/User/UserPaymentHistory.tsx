import React, { useEffect, useState } from 'react'
  import {  getAllPaymentsOfUser } from '../../config/controller';
import PaymentTable from '../../components/PaymentTable';

const UserPaymentHistory:React.FC = () => {
   const token = sessionStorage.getItem('token')
    const [data, setData] = useState<any>([])
  const columns = [
    { label: 'Sl No.', field: 'slNo' },
    { label: 'Booking Type', field: 'bookingType' },
    { label: 'Booking Date', field: 'bookingDate' },
    { label: 'Payment Mode', field: 'paymentMode' },
    { label: 'Paid On', field: 'paidOn' },
    { label: 'Transcation Status', field: 'transcationStatus' },
  ];
  // const dataTable = [
  //   { slNo: 1, bookingType: 'CBFC Screening', bookingDate: '2023-10-01' , paymentMode: 'UPI', paidOn: '2023-10-01',transcationStatus: 'Success' },
  //   { slNo: 2, bookingType: 'Workshop Seminar', bookingDate: '2023-10-01' , paymentMode: 'Debit Card', paidOn: '2023-10-01',transcationStatus: 'Pending' },
  //   { slNo: 3, bookingType: 'Film Trade Show', bookingDate: '2023-10-01' , paymentMode: 'Credit Card', paidOn: '2023-10-01',transcationStatus: 'Failed' },
  //   { slNo: 4, bookingType: 'Film Audio/Video Visual Screening', bookingDate: '2023-10-01' , paymentMode: 'Net Banking', paidOn: '2023-10-01',transcationStatus: 'Success' },
  // ]

    // useEffect(async () => {
    //  const response= await getAllPaymentsOfUser({ token: token})
    //   if(response.success){
        
    //     setData(response?.data?.payments || [])
    //     console.log(response?.data?.payments, 'res?.data?.payments')
    //   }

    // }, [])
    useEffect(() => {
  getAllPaymentsOfUser({ token: token})
    .then(response => {
      if(response.success){
        setData(response?.payments ??  response?.payments)
        console.log(response?.payments, 'res?.data?.payments')
      }
    })
    .catch(error => console.error(error));
}, [])
  return (
    <div className='w-full min-h-screen bg-white px-auto py-auto'>
            <PaymentTable columns={columns} data={data} Heading='User Payment History' search={true} />
    </div>
  )
}

export default UserPaymentHistory
