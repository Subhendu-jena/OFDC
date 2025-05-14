import React from 'react';
import logo from '../../../public/Logo/OFDC Logo Black.png';
import bg from '../../../public/Logo/Logo OFDC Booking Page.png';

const BookingReceipt: React.FC = ({
  mrNo,
  date,
  name,
  billNo,
  refNo,
  location,
  booking,
  filmName,
}: any) => {
  return (
    <div className="relative max-w-[800px] mx-auto p-4 rounded-2xl shadow-lg bg-red-50 overflow-hidden">
      {/* Background image with 50% opacity */}
      <div className="absolute flex justify-center items-center inset-0 z-0 opacity-20">
        <img
          src={bg} // path from public
          alt="Background"
          className="w-90 h-60  object-cover"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="w-20 h-20 absolute mt-4 ml-2">
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex justify-end">
          <h1>Phone : 304422/306532</h1>
        </div>
        <div className="text-center text-2xl text-red-600 font-bold">
          <h2>The Orissa Film Development Corporation Ltd.</h2>
        </div>
        <div className="text-center text-md font-medium">
          <h4>CHALACHITRA BHAWAN</h4>
        </div>
        <div className="text-center text-md font-medium">
          <h4>BUXI BAZAR , CUTTACK-753 001</h4>
        </div>

        <div className="flex justify-between text-md font-medium">
          <div>
            M R. No.{' '}
            <span className="underline decoration-dotted underline-offset-6">
              {mrNo || '2517451744'}
            </span>
          </div>
          <div>
            Date :{' '}
            <span className="underline decoration-dotted underline-offset-6">
              {date || '14/05/2025'}
            </span>
          </div>
        </div>

        <div className="p-3 text-lg">
          <p>
            RECEIVED with thanks from M/s.{' '}
            <span className="underline decoration-dotted underline-offset-6">
              {name || 'Koustav Dream works Pvt Ltd '}
            </span>
            of{' '}
            <span className="underline decoration-dotted underline-offset-6">
              {location || 'Bhubaneswar '}
            </span>
            a sum of Rupees{' '}
            <span className="underline decoration-dotted underline-offset-6">
              Eleven Thousand Eight Hundred
            </span>{' '}
            only, Ref. No.
            <span className="underline decoration-dotted underline-offset-6">
              {' '}
              {refNo || '2517451744 '}
            </span>
            Dated{' '}
            <span className="underline decoration-dotted underline-offset-6">
              {date || ''}
            </span>{' '}
            on against / our Bill Letter No.{` `}
            <span className="underline decoration-dotted underline-offset-6">
              {billNo || 'od/22/321212/'}
            </span>{' '}
            on behalf of BANK OF BARODA Bank in Full on account of{' '}
            <span className="underline decoration-dotted underline-offset-6">
              {booking || 'CBFC SCREENING'}
            </span>{' '}
            of{' '}
            <span className="underline decoration-dotted underline-offset-6">
              {filmName || 'GHAMAGHOT'}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className="text-2xl">Rs. 11800/-</div>
          <div></div>
        </div>
        <div className="text-sm text-center">
          ** This is a computer generated receipt and does not require any
          signature **
        </div>
      </div>
    </div>
  );
};

export default BookingReceipt;
