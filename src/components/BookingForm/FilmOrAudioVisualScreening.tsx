import {  useState } from 'react';
import {
  createBooking,
  createOrder,
  getAllSlotByDate,
} from '../../config/controller';
import { loadRazorpay } from '../loadRazorpay';
import { useForm } from 'react-hook-form';
import Preview from './Preview';

function FilmOrAudioVisualScreening() {
  // const [formData, setFormData] = useState({
  //   nameOfApplicant: '',
  //   whatsappNo: '',
  //   altContactNo: '',
  //   email: '',
  //   postalAddress: '',
  //   billingName: '',
  //   billingContactNo: '',
  //   GSTIN: '',
  //   billingEmail: '',
  //   category: '',
  //   billingPostalAddress: '',
  // });
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('userID');
  const allSlots = ['10AM-2PM', '2PM-6PM', '6PM-10PM'];
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const [createBookingResponse, setCreateBookingResponse] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  const handleCheckDateChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
    try {
      const response = await getAllSlotByDate({
        token: token,
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
  const onSubmit = async ( ) => {

    
    setBookingData({
      formData: getValues(),
      selectedDate,
      selectedSlot,
    });
    setShowPreview(true);
    
  };
  const handleEdit = () => {
    setShowPreview(false);
  };
  const handleConfirm = async (data: any) =>  {
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
    console.log(formattedData, 'data');

    try {
      const response = await createBooking({
        token: token,
        data: formattedData,
      });

      if (response.success) {
        console.log(data, 'response');
        setCreateBookingResponse(response);
        // navigate('/preview', { state: { bookingDetails: response } });
        // const createorderresponse = await createOrder({id:response?.data?._id ?? '', token: token , data: {orderedBy: userId}});
        // if (createorderresponse.success)
        //   {
        //    loadRazorpay(createorderresponse);
        //    console.log(createorderresponse,"rammm");

        //  }
        //  else {
        //   console.error('redirection failed:', createorderresponse.message);
        //   alert('redirection failed. Please try again.');
        // }
        console.log('Booking confirmed', bookingData);
        const createorderresponse = await createOrder({id:createBookingResponse?.data?._id ?? '', token: token , data: {orderedBy: userId}});
           if (createorderresponse.success)
             {
               console.log(createorderresponse,"rammm");
              loadRazorpay(createorderresponse);
   
            }
            else {
             console.error('redirection failed:', createorderresponse.message);
             alert('redirection failed. Please try again.');
           }
      } else {
        console.error('Submission failed:', response.message);
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    // Handle confirmation logic (e.g., payment processing)
   
    // You might want to reset the form here if needed
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
  const AppliCationDetails = [
    {
      name: 'nameOfApplicant',
      label: 'Name of the Applicant',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Name should contain only letters and spaces',
      },
    },
    {
      name: 'whatsappNo',
      label: 'Whatsapp No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit WhatsApp number',
      },
    },
    {
      name: 'altContactNo',
      label: 'Alternative Contact No.',
      type: 'number',
      required: false,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit contact number',
      },
    },
    {
      name: 'email',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
  ];
  const BillingDetails = [
    {
      name: 'billingName',
      label: 'Billing Name',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Name should contain only letters and spaces',
      },
    },
    {
      name: 'billingContactNo',
      label: 'Contact No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit Contact number',
      },
    },
    {
      name: 'GSTIN',
      label: 'GSTIN (If Any)',
      type: 'text',
      required: false,
      pattern: {
        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
        message: 'Enter a valid GSTIN (e.g. 22AAAAA0000A1Z5)',
      },
    },
    {
      name: 'billingEmail',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
  ];
  const BookingDetails = [
    {
      name: 'bookingDate',
      label: 'Booking Date',
      type: 'Date',
      required: true,
      pattern: /^\d{4}-\d{2}-\d{2}$/,
      errorMessage: 'Please enter a valid date in YYYY-MM-DD format',
    },
  ];

  return (
    <div className=" bg-gray-50  rounded-lg  text-sm">
      <h2 className="text-xl font-semibold text-center text-red-600 mb-6">
        Film Or Audio-Visual Screening Booking
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit(handleConfirm)}>
        <div className="space-y-6 grid gap-2 grid-cols-1 xl:grid-cols-2">
          {/* Applicant Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Applicant Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AppliCationDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div style={{ marginBottom: '1rem' }}>
                    <label className="text-gray-700 font-medium col-span-1">
                      {label} :
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
                Complete Postal Address :
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
              {BillingDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div style={{ marginBottom: '1rem' }}>
                    <label className="text-gray-700 font-medium col-span-1">
                      {label} :
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
                Select Category :
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
                Complete Postal Address :
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
              {BookingDetails.map(({ name, label, type }) => (
                <div style={{ marginBottom: '1rem' }}>
                  <label className="text-gray-700 font-medium col-span-1">
                    {label} :
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
         onClick={()=>onSubmit()}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg transition-all"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default FilmOrAudioVisualScreening;
