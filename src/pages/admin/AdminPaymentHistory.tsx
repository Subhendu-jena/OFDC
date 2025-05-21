import React, { useEffect, useState } from 'react'
import Table1 from '../../components/Table1';
import { getAllPaymentsForAdmin } from '../../config/controller';
import { Star } from 'lucide-react';
// import ComingSoon from '../../components/ComingSoon';

const AdminPaymentHistory:React.FC = () => {
   const [data, setData] = useState<any>([]);
    const [searchTerm, setSearchTerm] = useState('');
     const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem('token');
    
 const columns: {
     header: string;
     accessor: string;
     render?: (row: any) => any;
     size?: number;
   }[] = [
     { header: 'Sl No.', accessor: 'slno' },
    {
      header: 'Booking Name',
      accessor: 'booking',
      render: (row: any) => {
        const bookingType = row?.booking?.bookingType;
        return <div>{bookingType ? bookingType : '-'}</div>;
      },
      size: 250,
    },
     {
       header: 'Applicant Name',
       accessor: 'user',
       render: (row: any) => {
        console.log(row, 'row');
         return <div>{row?.user.name}</div>;
       },
       size: 200,
 
     },
     {
       header: 'Contact Number',
       accessor: 'billingDetails',
       render: (row: any) => {
         return <div>{row?.user?.phoneNo}</div>;
       },
     },
      {
       header: 'Payment Id',
       accessor: 'razorpayOrderId',
       size: 100,
     },
      {
       header: 'Payment Status',
       accessor: 'payment_status',
       render: (row: any) => {
         return (
           <div
             className={`px-2 py-1   rounded-full w-max inline-block ${
               row.payment_status === 'PAID'
                 ? 'bg-green-100 text-green-800'
                 : row.payment_status === 'PENDING'
                   ? 'bg-yellow-100 text-yellow-800'
                   : row.payment_status === 'CANCELLED'
                     ? 'bg-red-100 text-red-800'
                     : 'bg-gray-100 text-gray-800'
             }`}
           >
             {row.payment_status}
           </div>
         );
       },
       size: 10,

     },
     {
       header: 'Payment Method',
       accessor: 'paymentMethod',
      //  render: (row: any) => {
      //    return (
      //      <div
      //        className={`px-2 py-1   rounded-full w-max inline-block ${
      //          row.approval === 'APPROVED'
      //            ? 'bg-green-100 text-green-800'
      //            : row.approval === 'PENDING'
      //              ? 'bg-yellow-100 text-yellow-800'
      //              : row.approval === 'REJECTED'
      //                ? 'bg-red-100 text-red-800'
      //                : 'bg-gray-100 text-gray-800'
      //        }`}
      //      >
      //        {row.approval}
      //      </div>
      //    );
      //  },
       
     },
   ];
  useEffect(() => {
    setLoading(true);
    getAllPaymentsForAdmin({ token: token }).then((res:any) => {
      const sendData = res?.payments
      setData(sendData);
      console.log(sendData, 'res?.data?.data');
    }).catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const filteredData = data.filter((row: any) => {
    const search = searchTerm.toLowerCase();
    return (
      row.razorpayOrderId?.toLowerCase().includes(search)
      // row.status?.toLowerCase().includes(search)
    );
  });
  console.log(filteredData, 'filteredData');
  return (
            <>
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
   
    </>
  )
}

export default AdminPaymentHistory
