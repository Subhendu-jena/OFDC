import { useState } from 'react';
import {
  createBooking,
  createOrder,
  getAllSlotByDate,
} from '../../config/controller';
import { useForm } from 'react-hook-form';
import { cbfc, filmTradeShow } from './fields';
import { loadRazorpay } from '../loadRazorpay';
import Confirmation from './Confirmation';
import Preview from './Preview';
import axios from 'axios';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';

export default function FlimTradeShow() {
  const [formData, setFormData] = useState<any>({
    podiumWithMic: false,
    cordlessMic: false,
    screeningFacilities: false,
    synopsisFile: null,
    castCreditsFile: null,
    songLinesFile: null,
    posterFile: null,
  });
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
   const [uploadedFiles, setUploadedFiles] = useState<{
      [key: string]: string;
    }>({});
    const [uploading,setUploading] = useState(false);
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
    const duration = `${String(data.durationHours).padStart(2, '0')}:${String(
      data.durationMinutes
    ).padStart(
      2,
      '0'
    )}:${String(data.durationSeconds).padStart(2, '0')}:${String(
      data.durationFrames
    ).padStart(2, '0')}`;
    const formattedJsonData = {
      bookedBy: userId,
      bookingType: 'Film Trade Show',
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
      screeningDetails: {
        nameOfFilm: data.nameOfFilm,
        languageOfFilm: data.languageOfFilm,
        durationOfFilm: duration,
        aspectRatio: data.aspectRatio,
        directorName: data.directorName,
        soundFormat: data.soundFormat,
        formatOfFilm: data.formatOfFilm,
      },
      productionDetails: {
        producerName: data.producerName,
        productionHouseName: data.productionHouseName,
        whatsappNo: data.productionWhatsappNo,
        email: data.productionEmail,
        altContactNo: data.productionAltContactNo,
        address: data.productionAddress,
        GST: data.productionGST,
      },
      billingDetails: {
        billingName: data.billingName,
        contactNo: data.billingContactNo,
        GSTIN: data.billingGSTIN,
        email: data.billingEmail,
        category: data.category,
        postalAddress: data.billingPostalAddress,
      },
      documentUploads: uploadedFiles,
      bookingDetails: {
        bookingDate: selectedDate,
        timeSlot: selectedSlot,
      },
    };
    setSendData(formattedJsonData);
    setBookingData({
      formData: formattedJsonData,
      selectedDate,
      selectedSlot,
    });
    setShowPreview(true);
  };

  const handleEdit = () => {
    setShowPreview(false);
  };
  const handleConfirm = async () => {
    try {
      const response = await createBooking({
        token: token,
        data: sendData,
      });

      if (response.success) {
        if (response?.data) {
          const createorderresponse = await createOrder({
            bookingId: response?.data?._id ?? '',
            data: { orderedBy: userId },
          });
          if (createorderresponse.success) {
            const onSuccess = (verifiedData: any) => {
              setShowPreview(false);
              setShowReceipt(true);
              setReceiptData({ verifiedData, selectedDate, selectedSlot });
            };
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
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('files', file);

    try {
      setUploading(true);
      const res = await axios.post(
        `${STRAPI_API_BASE_URL}/api/upload/`,
        formData
      );
      const fileUrl = res.data[0]?.url;
      if (fileUrl) {
        setUploadedFiles((prev) => ({
          ...prev,
          [fieldName]: `${STRAPI_API_BASE_URL}${fileUrl}`,
        }));
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
    finally {
      setUploading(false);
    }
  };
  return (
    <div className=" bg-gray-50  rounded-lg  text-sm">
      <h2 className="text-xl font-semibold text-center text-red-600 mb-6">
        Film Trade Show
      </h2>
      <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 grid gap-2 grid-cols-1 xl:grid-cols-2">
          {/* Applicant Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Applicant Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filmTradeShow.AppliCationDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
                    <label className="text-gray-700 font-medium col-span-1">
                      {label} :
                      <span className="text-red-600">{required && '*'}</span>
                    </label>
                    <input
                      type={type}
                      placeholder={label}
                      className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                      {...register(name, {
                        required: required && `${label} is required`,
                        pattern: pattern,
                      })}
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

          {/* Requirements Section */}
          <div className="p-5 bg-white rounded-lg shadow mt-6">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filmTradeShow.Requirements.map(({ name, label }, index) => (
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

          {/* Screening Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Screening Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filmTradeShow.ScreeningDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
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
              <div className="md:col-span-2 mb-2">
                <label
                  className="block  font-medium text-gray-700"
                  style={{ marginBottom: '1rem' }}
                >
                  Duration of the Film (HH:MM:SS:FF):{' '}
                  <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <input
                    type="number"
                    placeholder="HH"
                    {...register('durationHours', {
                      required: 'Hours are required',
                      min: { value: 0, message: 'Min 0' },
                      max: { value: 23, message: 'Max 23' },
                    })}
                    className="w-full p-2 border border-gray-400 rounded"
                  />
                  <input
                    type="number"
                    placeholder="MM"
                    {...register('durationMinutes', {
                      required: 'Minutes are required',
                      min: { value: 0, message: 'Min 0' },
                      max: { value: 59, message: 'Max 59' },
                    })}
                    className="w-full p-2 border border-gray-400 rounded"
                  />
                  <input
                    type="number"
                    placeholder="SS"
                    {...register('durationSeconds', {
                      required: 'Seconds are required',
                      min: { value: 0, message: 'Min 0' },
                      max: { value: 59, message: 'Max 59' },
                    })}
                    className="w-full p-2 border border-gray-400 rounded"
                  />
                  <input
                    type="number"
                    placeholder="FF"
                    {...register('durationFrames', {
                      required: 'Frames are required',
                      min: { value: 0, message: 'Min 0' },
                      max: { value: 29, message: 'Max 29' },
                    })}
                    className="w-full p-2 border border-gray-400 rounded"
                  />
                </div>
                {errors.durationHours && (
                  <p className="text-red-500 text-sm">
                    Duration Hours should be between 0 to 23
                  </p>
                )}
                {errors.durationMinutes && (
                  <p className="text-red-500 text-sm">
                    Duration Minutes should be between 0 to 59
                  </p>
                )}
                {errors.durationSeconds && (
                  <p className="text-red-500 text-sm">
                    Duration Seconds should be between 0 to 59
                  </p>
                )}
                {errors.durationFrames && (
                  <p className="text-red-500 text-sm">
                    Duration Frames should be between 0 to 29
                  </p>
                )}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label className="text-gray-700 font-medium col-span-1">
                  Sound Format :  <span className='text-red-500'>*</span>
                </label>
                <select
                  {...register('soundFormat', {
                    required: 'Sound Format is required',
                  })}
                  className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                >
                  <option value="">Select Sound Format </option>
                  <option value="mono">Mono</option>
                  <option value="stereo">Stereo</option>
                  <option value="Dolby 5.1"> Dolby 5.1 </option>
                  <option value="Dolby 7.1"> Dolby 7.1</option>
                </select>
                {typeof errors.soundFormat?.message === 'string' && (
                  <p className="text-red-500 text-sm">
                    {errors.soundFormat.message}
                  </p>
                )}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label className="text-gray-700 font-medium col-span-1">
                  Format of the Film :  <span className='text-red-500'>*</span>
                </label>
                <select
                  {...register('formatOfFilm', {
                    required: 'Format of the Film is required',
                  })}
                  className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                >
                  <option value="">Format of the Film</option>
                  <option value=" DVD"> DVD</option>
                  <option value="Hard disk">Hard disk</option>
                  <option value="Pendrive">Pendrive</option>
                  <option value="Blueray DVD">Blueray DVD</option>
                </select>
                {typeof errors.formatOfFilm?.message === 'string' && (
                  <p className="text-red-500 text-sm">
                    {errors.formatOfFilm.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Production Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Production Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filmTradeShow.ProductionDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
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
              Production Complete Postal Address :  <span className='text-red-500'>*</span>
              </label>
              <textarea
                {...register('productionAddress', {
                  required: 'Production Address is required',
                })}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
              ></textarea>
              {typeof errors.productionAddress?.message === 'string' && (
                <p className="text-red-500 text-sm">
                  {errors.productionAddress.message}
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
              {filmTradeShow.BillingDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
                    <label className="text-gray-700 font-medium col-span-1">
                      {label} :  <span className="text-red-600">{required && '*'}</span>
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
            <div style={{ marginBottom: '1rem' }}>
              <label className="text-gray-700 font-medium col-span-1">
                Select Category :  <span className='text-red-500'>*</span>
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

          {/* Document Uploads Section */}
          <div className="p-5 bg-white rounded-lg shadow mt-6">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Document Uploads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cbfc.Fields.map(({ name, label,required }, index) => (
                <div
                  key={index}
                  className="items-center gap-4"
                >
                  <label className="text-gray-700 font-medium">
                    {label} : <span className="text-red-600">{required && '*'}</span>
                  </label>
                  <input
                    type="file"
                    {...register(name, {
                        required: required && `${label} is required`,
                      })}
                    className="w-full py-2 mt-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                                         onChange={(e) => handleFileChange(e, name)}
                  />
                  {errors[name] && (
                      <p style={{ color: 'red' }}>
                        {String(errors[name]?.message)}
                      </p>
                    )}
                    {uploading && (
                      <p style={{ color: 'green' }}>Uploading...</p>
                    )}
                    {uploadedFiles[name] && (
                      <div className="mt-1">
                        <a
                          href={uploadedFiles[name]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View Uploaded PDF
                        </a>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Booking Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
              {filmTradeShow.BookingDetails.map(({ name, label, type }) => (
                <div key={name} style={{ marginBottom: '1rem' }}>
                  <label className="text-gray-700 font-medium col-span-1">
                    {label} :  <span className='text-red-500'>*</span>
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
                <div className="grid grid-cols-3 mt-4  ">
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
                                  ? 'bg-red-400 text-black border-red-400'
                                  : 'bg-white text-black border-gray-300 hover:border-red-400'
                            }`}
                            disabled={isBooked}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                     {!selectedSlot && ( 
                    <div className="text-red-500 mt-2 ml-3">
                      <p>Please select a slot</p>
                    </div>
                  )}
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
