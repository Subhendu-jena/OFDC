import React, { useEffect, useState } from 'react';
import { adminApprove, adminReject, getAllBookingsForAdmin, refund, userCancel } from '../../config/controller';
import { formatDateToMMDDYYYY } from '../../variables/utils';
import { ScanEye } from 'lucide-react';
import Table1 from '../../components/Table1';
import { Star } from 'lucide-react';
import Preview from '../../components/BookingForm/Preview';

const AdminBookingHistory: React.FC = () => {
  const token = sessionStorage.getItem('token');
  const [data, setData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
 const [loading, setLoading] = useState(false);
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
      accessor: 'bookedBy',
     render: (row: any) => {
        const bookingType = row?.bookedBy?.name;
        return <div>{bookingType ? bookingType : '-'}</div>;
      },
      size: 200,

    },
    {
      header: 'Contact Number',
      accessor: 'bookedBy',
      render: (row: any) => {
        const bookingType = row?.bookedBy?.phoneNo;
        return <div>{bookingType ? bookingType : '-'}</div>;
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
            <p>{row?.bookingDetails?.timeSlot || 'N/A'}</p>
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
    const handleConfirm = () => {
      setShowPreview(false);
     adminApprove({ data: { bookingId: previewData?._id } });
    };
    const handlereject = async () => {
      setShowPreview(false);
      try {
        const response = await adminReject({data:{
          bookingId: previewData?._id,
        }});
        if (response.success) {
          const response = await userCancel({
           data:{ bookingId: previewData?._id},
          });
          if (response.success) {
            refund({
              data:{bookingId: previewData?._id},
            });
             getAllBookingsForAdmin({ token: token })
          }
        }
      } catch (err) {}
    };
  useEffect(() => {
    setLoading(true);
    getAllBookingsForAdmin({ token: token }).then((res) => {
      setData(res?.data);
      console.log(res?.data, 'res?.data?.data');
    }).catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // const filteredData = data.filter((row: any) => {
  //   const search = searchTerm.toLowerCase();
  //   return (
  //     row.bookingType?.toLowerCase().includes(search) ||
  //     row.status?.toLowerCase().includes(search)
  //   );
  // });
  const filteredData = data
  .filter((row: any) => row.bookingType !== "Ghost Booking")
  .filter((row: any) => {
    const search = searchTerm.toLowerCase();
    return (
      row.bookingType?.toLowerCase().includes(search) ||
      row.status?.toLowerCase().includes(search)
    );
  });
  return (
    <>
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
    </>
  );
};

export default AdminBookingHistory;
