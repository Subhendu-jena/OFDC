import { useState } from 'react';
import {
  createBooking,
  createOrder,
  getAllSlotByDate,
} from '../../config/controller';
import { useForm } from 'react-hook-form';
import { workShop } from './fields';
import { loadRazorpay } from '../loadRazorpay';
import Preview from './Preview';
import Confirmation from './Confirmation';

function WorkShopOrSeminar() {
  const [formData, setFormData] = useState<any>({
    nameOfApplicant: '',
    whatsappNo: '',
    altContactNo: '',
    email: '',
    postalAddress: '',
    podiumWithMic: false,
    cordlessMic: false,
    screeningFacilities: false,
    billingName: '',
    billingContactNo: '',
    GSTIN: '',
    billingEmail: '',
    category: 'INDIVIDUAL',
    billingPostalAddress: '',
    bookingDate: '',
  });
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('userID');
  const allSlots = ['10AM-2PM', '2PM-6PM', '6PM-10PM'];
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
  const handleChange = (e: any) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

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
  const onSubmit = async (data: any) => {
    const formattedData = {
      bookedBy: userId,
      bookingType: 'Workshop Or Seminar',
      applicantDetails: {
        nameOfApplicant: data.nameOfApplicant,
        whatsappNo: data.whatsappNo,
        altContactNo: data.altContactNo,
        email: data.email,
        postalAddress: data.postalAddress,
      },
      requirements: {
        podiumWithMic: formData.podiumWithMic,
        cordlessMic: formData.cordlessMic,
        screeningFacilities: formData.screeningFacilities,
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
    // try {
    //   const response = await createBooking({
    //     token: token,
    //     data: formattedData,
    //   });

    //   if (response.success) {
    //     // navigate('/confirmation', { state: { bookingDetails: response } });
    //   } else {
    //     console.error('Submission failed:', response.message);
    //     alert('Submission failed. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   // alert('An error occurred. Please try again.');
    // }
    // console.log('Form Submitted:', formData);
    // Handle form submission (e.g., send data to backend)
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
            id: response?.data?._id ?? '',
            token: token,
            data: { orderedBy: userId },
          });
          if (createorderresponse.success) {
            const onSuccess = (verifiedData: any) => {
              console.log('Final verified payment response:', verifiedData);
              // navigate(paths.confirmation, {
              //   state: { bookingDetails: verifiedData,selectedDate,selectedSlot },
              // });
              setShowPreview(false);
              setShowReceipt(true);
              setReceiptData({ verifiedData, selectedDate, selectedSlot });
            };
            loadRazorpay(createorderresponse, onSuccess);
            console.log(onSuccess, 'onSuccess');
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
        For Workshop Or Seminar
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 grid gap-2 grid-cols-1 xl:grid-cols-2">
          {/* Applicant Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Applicant Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workShop.AppliCationDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
                    <label className="text-gray-700 font-medium col-span-1">
                      {label} :
                    </label>
                    <br />
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
          {/* Requirements Section */}
          <div className="p-5 bg-white rounded-lg shadow mt-6">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {workShop.Requirements.map(({ name, label }, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={name}
                    onChange={handleChange}
                    className="w-5 h-5 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label className="text-gray-700 font-medium">{label}</label>
                </div>
              ))}
            </div>
          </div>
          {/* Billing Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Billing Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workShop.BillingDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
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
                {...register('category', {
                  required: 'Category is required',
                })}
                className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
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
                  required: 'Billing Postal Address is required',
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
              {workShop.BookingDetails.map(({ name, label, type }, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 items-center gap-4"
                >
                  <label className="text-gray-700 font-medium col-span-1">
                    {label} :
                  </label>
                  <input
                    type={type}
                    placeholder={name}
                    {...register(name, {
                      required: `${label} is required`,
                      pattern: {
                        value: /^\d{4}-\d{2}-\d{2}$/,
                        message:
                          'Please enter a valid date in YYYY-MM-DD format',
                      },
                      onChange: handleCheckDateChange,
                    })}
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
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default WorkShopOrSeminar;
