import { useState } from 'react';
import {
  createBooking,
  createOrder,
  getAllSlotByDate,
} from '../../config/controller';
import { loadRazorpay } from '../loadRazorpay';
import { useForm } from 'react-hook-form';
import Preview from './Preview';
import Confirmation from './Confirmation';
import { film } from './fields';

function FilmOrAudioVisualScreening() {
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('userID');
  const allSlots = ['10AM-1PM', '2PM-5PM', '6PM-9PM'];
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const [sendData, setSendData] = useState<any>(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleCheckDateChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
    try {
      const response = await getAllSlotByDate({
        date: selectedDate,
      });
      if (response?.success && Array.isArray(response?.data)) {
        const booked = response?.data?.map(
          (booking: any) => booking?.bookingDetails?.timeSlot
        );
        setBookedSlots(booked);
      }
    } catch (error) {
      console.error('Error fetching slots:', error);
    }
  };
  const onSubmit = async (data: any) => {
    const formattedData = {
      bookedBy: userId,
      bookingType: 'Film Or Audio-Visual Screening Booking',
      applicantDetails: {
        nameOfApplicant: data.nameOfApplicant,
        whatsappNo: data.whatsappNo,
        altContactNo: data.altContactNo,
        email: data.email,
        postalAddress: data.postalAddress,
      },
      billingDetails: {
        billingName: data.billingName,
        contactNo: data.billingContactNo,
        GSTIN: data.GSTIN,
        email: data.billingEmail,
        category: data.category,
        postalAddress: data.billingPostalAddress,
      },
      bookingDetails: {
        bookingDate: selectedDate,
        timeSlot: selectedSlot,
      },
    };
    setSendData(formattedData);
    console.log(formattedData, 'formattedData');
    console.log(data, 'data');
    setBookingData({
      formData: formattedData,
      selectedDate,
      selectedSlot,
    });
    setShowPreview(true);
  };
  const handleEdit = () => {
    setShowPreview(false);
  };
  const handleConfirm = async () => {
    // console.log('formatted data', sendData);
    try {
      const response = await createBooking({
        token: token,
        data: sendData,
      });

      if (response.success) {
        if (response?.data) {
          const createorderresponse = await createOrder({
            bookingId: response?.data?._id ?? '',
            // token: token,
            data: { orderedBy: userId },
          });
          if (createorderresponse.success) {
            const onSuccess = (verifiedData: any) => {
              console.log('Final verified payment response:', verifiedData);
              setShowPreview(false);
              setShowReceipt(true);
              setReceiptData({verifiedData, selectedDate, selectedSlot});
            };
            console.log(createorderresponse, 'loadRazorpay response');
            loadRazorpay(createorderresponse, onSuccess);
          } else {
            console.error('redirection failed:', createorderresponse.message);
            alert('redirection failed. Please try again.');
          }
        }
      } else {
        console.error('Submission failed:', response.message);
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (showPreview && bookingData) {
    return (
      <Preview
        formData={bookingData.formData}
        selectedDate={bookingData.selectedDate}
        selectedSlot={bookingData.selectedSlot}
        onEdit={handleEdit}
        onConfirm={handleConfirm}
        isEditMode={true}
      />
    );
  }
  if (showReceipt && receiptData) {
    return (
      <Confirmation
      bookingDetails={receiptData.verifiedData}
        selectedDate={receiptData.selectedDate}
        selectedSlot={receiptData.selectedSlot}
      />
    );
  }
 

  return (
    <div className=" bg-gray-50  rounded-lg  text-sm">
      <h2 className="text-xl font-semibold text-center text-red-600 mb-6">
        Film Or Audio-Visual Screening Booking
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 grid gap-2 grid-cols-1 xl:grid-cols-2">
          {/* Applicant Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Applicant Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {film.AppliCationDetails.map(
                ({ name, label, type, required, pattern }, index) => (
                  <div style={{ marginBottom: '1rem' }} key={index}>
                    <label className="text-gray-700 font-medium col-span-1">
                      {label} :  <span className="text-red-600">{required && '*'}</span>
                    </label>
                    <br />
                    <input
                      type={type}
                      {...register(name, {
                        required: required && `${label} is required`,
                        pattern: pattern,
                      })}
                      placeholder={label}
                      className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    />
                    {errors[name] && (
                      <p style={{ color: 'red' }}>
                        {String(errors[name]?.message)}
                      </p>
                    )}
                    {errors.pattern && (
                      <p style={{ color: 'red' }}>
                        {String(errors.pattern?.message)}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="grid grid-cols-1 mt-4 items-center gap-4">
              <label className="text-gray-700 font-medium col-span-1">
              Applicant Complete Postal Address :  <span className='text-red-500'>*</span>
              </label>
              <textarea
                {...register('postalAddress', {
                  required: 'Postal Address is required',
                })}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
              ></textarea>
              {typeof errors.postalAddress?.message === 'string' && (
                <p className="text-red-500 text-sm">
                  {errors.postalAddress.message}
                </p>
              )}
            </div>
          </div>

          {/* Billing Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Billing Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {film.BillingDetails.map(
                ({ name, label, type, required, pattern }, index) => (
                  <div style={{ marginBottom: '1rem' }} key={index}>
                    <label className="text-gray-700 font-medium col-span-1">
                      {label} :  <span className="text-red-600">{required && '*'}</span>
                    </label>
                    <input
                      type={type}
                      placeholder={label}
                      {...register(name, {
                        required: required && `${label} is required`,
                        pattern: pattern,
                      })}
                      className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    />
                    {errors[name] && (
                      <p style={{ color: 'red' }}>
                        {String(errors[name]?.message)}
                      </p>
                    )}
                    {errors.pattern && (
                      <p style={{ color: 'red' }}>
                        {String(errors.pattern?.message)}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="grid grid-cols-1 mt-4 items-center gap-4">
              <label className="text-gray-700 font-medium col-span-1">
                Select Category :  <span className='text-red-500'>*</span>
              </label>
              <select
                className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                {...register('category', {
                  required: 'Category is required',
                })}
              >
                <option value="">Select Category</option>
                <option value="INDIVIDUAL">INDIVIDUAL</option>
                <option value="COMPANY">COMPANY</option>
                <option value="GOVT">GOVT</option>
              </select>
              {typeof errors.category?.message === 'string' && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 mt-4 items-center gap-4">
              <label className="text-gray-700 font-medium col-span-1">
              Billing Complete Postal Address :  <span className='text-red-500'>*</span>
              </label>
              <textarea
                {...register('billingPostalAddress', {
                  required: 'Postal Address is required',
                })}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
              ></textarea>
              {typeof errors.billingPostalAddress?.message === 'string' && (
                <p className="text-red-500 text-sm">
                  {errors.billingPostalAddress.message}
                </p>
              )}
            </div>
          </div>

          {/* Booking Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Booking Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
              {film.BookingDetails.map(({ name, label, type }, index) => (
                <div style={{ marginBottom: '1rem' }} key={index}>
                  <label className="text-gray-700 font-medium col-span-1">
                    {label} :  <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type={type}
                    {...register(name, {
                      required: `${label} is required`,
                      pattern: {
                        value: /^\d{4}-\d{2}-\d{2}$/,
                        message:
                          'Please enter a valid date in YYYY-MM-DD format',
                      },
                      onChange: handleCheckDateChange,
                    })}
                    placeholder={label}
                    className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                  />
                  {errors[name] && (
                    <p className="text-red-500 text-sm">
                      {String(errors[name]?.message)}
                    </p>
                  )}
                </div>
              ))}
              {selectedDate && (
                <div className="grid grid-cols-3 mt-4 items-center ">
                  <label
                    htmlFor=""
                    className="text-gray-700 font-medium col-span-1"
                  >
                    Available Slots :
                  </label>
                  <div className="col-span-2">
                    <div className="flex justify-around">
                      {allSlots.map((slot) => {
                        const isBooked = bookedSlots.includes(slot);
                        const isSelected = selectedSlot === slot;

                        return (
                          <button
                            key={slot}
                            onClick={(e) => {
                              e.preventDefault();
                              if (!isBooked) {
                                setSelectedSlot(slot);
                              }
                            }}
                            className={`border rounded-2xl px-5 py-1 transition-all duration-200${
                              isBooked
                                ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
                                : isSelected
                                  ? 'bg-red-600 text-red-600 border-red-600'
                                  : 'bg-white text-black border-gray-300 hover:border-red-400'
                            }`}
                            disabled={isBooked}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg transition-all"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default FilmOrAudioVisualScreening;
