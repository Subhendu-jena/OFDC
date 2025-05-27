import React, { useEffect } from 'react';
import {
  CheckCircle,
  Calendar,
  MapPin,
  ArrowRight,
  Download,
} from 'lucide-react';
import {  useNavigate } from 'react-router-dom';
// import { formatDateTime } from '../../variables/utils';
import { paths } from '../../routes/Path';
interface ConfirmationProps {
  bookingDetails: any;
  selectedDate: any;
  selectedSlot: any;
}
const Confirmation: React.FC<ConfirmationProps> = ({bookingDetails,selectedDate, selectedSlot}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(paths.userDashboard);
    }, 20000);

    return () => clearTimeout(timer); 
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-3xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for choosing OFDC. Your booking has been successfully
            processed.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Booking Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Booking Reference</p>
                <p className="text-lg font-medium">{bookingDetails._id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount Paid</p>
                <p className="text-lg font-medium text-green-600">
                  ₹ {(bookingDetails.amount / 100 ) || 11800}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="text-lg font-medium">
                    {/* {bookingDetails?.updatedAt && (
                      <p>{`on ${formatDateTime(bookingDetails.updatedAt)}`}</p>
                    )} */}
                    {selectedDate && selectedSlot && (
                      <p>{`on ${selectedDate} at ${selectedSlot}`}</p>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-medium">
                    {bookingDetails.location ||
                      'Preview Theatre,Kalinga Studio'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-5 h-5" />
              Download Receipt
            </button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Next Steps
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-500 mt-1" />
              <p className="text-blue-900">
                Check your email for detailed instructions
              </p>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-500 mt-1" />
              <p className="text-blue-900">
                Review the pre-screening requirements and complete any necessary
                preparations
              </p>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-500 mt-1" />
              <p className="text-blue-900">
                Arrive 15 minutes before your scheduled time
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
