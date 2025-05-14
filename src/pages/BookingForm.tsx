import { useState } from 'react';
import FlimTradeShow from '../components/BookingForm/FlimTradeShow';
import WorkShopOrSeminar from '../components/BookingForm/WorkShopOrSeminar';
import CbfcScreening from '../components/BookingForm/CbfcScreening';
import FilmOrAudioVisualScreening from '../components/BookingForm/FilmOrAudioVisualScreening';

const BookingForm = () => {
  const [bookingType, setBookingType] = useState('For CBFC SCREENING');

  const bookingTypes = [
    'For CBFC SCREENING',
    'For Workshop/Seminar',
    'For Film Trade Show',
    'Film/Audio Visual Screening',
  ];

  return (
    <div className=" pt-3 bg-gradient-to-br min-h-screen text-white bg-white">
      <div className="container mx-auto ">
        <div className="bg-white text-gray-800 p-4 rounded-xl shadow-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-red-600 border-b-2 border-red-200 pb-3">
            {' '}
            Booking Form
          </h2>
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3 text-gray-700">
              Select Booking Type:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {/* <select >
              {bookingTypes.map((type) => (
                <option
                  key={type}
                  className={`px-3 py-2 border rounded-lg transition-all duration-300 text-sm md:text-base ${
                    bookingType === type
                      ? 'bg-red-500 text-white border-red-600 shadow-md font-medium'
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-300 hover:border-red-300'
                  }`}
                  onClick={() => setBookingType(type)}
                >
                  {type}
                </option>
              ))}</select> */}
              <select
                value={bookingType}
                onChange={(e) => setBookingType(e.target.value)}
                className="px-3 py-2 border rounded-lg transition-all duration-300 text-sm md:text-base bg-gray-50 border-gray-300 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {bookingTypes.map((type) => (
                  <option key={type} value={type} className="text-black">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Form Container with Card Shadow */}
          <div className="bg-gray-50 rounded-lg shadow-inner p-2">
            {bookingType === 'For CBFC SCREENING' && <CbfcScreening />}
            {bookingType === 'For Workshop/Seminar' && <WorkShopOrSeminar />}
            {bookingType === 'For Film Trade Show' && <FlimTradeShow />}
            {bookingType === 'Film/Audio Visual Screening' && (
              <FilmOrAudioVisualScreening />
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-white text-sm opacity-80">
        <p>© 2025 Cinema Booking Portal. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BookingForm;
