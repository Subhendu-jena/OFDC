import React from 'react';

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
    <div className='max-w-[800px] mx-auto'> 
      <div className='flex justify-end'>
        <h1>Phone : 304422/306532</h1>
      </div>
      <div>
        <h2>The Orissa Film Development Corporation Ltd.</h2>
      </div>
      <div>
        <h4>CHALACHITRA BHAWAN</h4>
      </div>
      <div>
        <h4>BUXI BAZAR , CUTTACK-753 001</h4>
      </div>
      <div>
        <div>M R. No. {mrNo || ''}</div>
        <div>Date : {date || ''}</div>
      </div>
      <div>
        <p>
        RECEIVED with thanks from M/s. {name || ''} of {location || ''} a sum of Rupees{' '}
          <span>Eleven Thousand Eight Hundred </span> only,Ref. No.{refNo || ''} Dated{' '}
          {date || ''} on against / our Bill Letter No. {billNo || ''} on behalf of BANK OF
          BARODA Bank in Full on account of {booking || ''} {filmName || ''}{' '}
        </p>
      </div>
      <div className='grid grid-cols-2'>
        <div>Rs. 11800/-</div>
        <div></div>
      </div>
    </div>
  );
};

export default BookingReceipt;
