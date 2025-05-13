import { useState } from 'react';
import { createBooking, createOrder, getAllSlotByDate } from '../../config/controller';
import { useForm } from 'react-hook-form';
import { cbfc } from './fields';
import { loadRazorpay } from '../loadRazorpay';
import Preview from './Preview';
import Confirmation from './Confirmation';
function CbfcScreening() {
  const userId = sessionStorage.getItem('userID');
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const token = sessionStorage.getItem('token');
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
  // const handleChange = (e: any) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === 'file' ? files[0] : value,
  //   });
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
  
  const onSubmit = async (data: any) => {
    const duration = `${String(data.durationHours).padStart(2, '0')}:${String(
      data.durationMinutes
    ).padStart(2, '0')}:${String(data.durationSeconds).padStart(2, '0')}:${String(
      data.durationFrames
    ).padStart(2, '0')}`;
    const formattedData = {
      bookedBy: userId,
      bookingType: 'CBFC SCREENING',
      filmDetails: {
        name: data.name,
        language: data.language,
        duration: duration,
        aspectRatio: data.aspectRatio,
        nameOfTheDirector: data.nameOfTheDirector,
        soundFormat: data.soundFormat,
        formatOfTheFilm: data.formatOfTheFilm,
      },
      productionDetails: {
        producerName: data.producerName,
        productionHouseName: data.productionHouseName,
        whatsappNo: data.whatsappNo,
        altContactNo: data.altContactNo,
        email: data.email,
        address: data.applicantAddress,
        GST: data.GST,
      },
      bookingDetails: {
        bookingDate: selectedDate,
        timeSlot: selectedSlot,
      },
      documentUploads: {
        synopsis: '111',
        castAndCredits: '1111',
        songLines: '1111',
        poster: '11111',
      },
    };
    setSendData(formattedData);
    setBookingData({
      formData: formattedData,
      selectedDate,
      selectedSlot,
    });
    setShowPreview(true);
    // try {
    //   const response = await createBooking({ token, data: formattedData });
    //   if (response.success) {
    //     createOrder({id:response?.data?._id ?? '', token: token , data: {orderedBy: userId}});
    //     console.log(response?.data?._id,"hgfhgfhgf");
    //     // navigate('/confirmation', { state: { bookingDetails: response } });
    //   } else {
    //     alert('Submission failed. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('An error occurred. Please try again.');
    // }
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
              setReceiptData({verifiedData, selectedDate, selectedSlot});
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
    <div className=" bg-gray-50   text-sm rounded-lg">
      <h2 className="text-xl font-semibold text-center text-red-600 mb-6 ">
        For CBFC SCREENING
      </h2>
      <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 grid gap-2 grid-cols-1 xl:grid-cols-2">
          {/* Film Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2  text-red-600">
              Film Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
              {cbfc.ScreeningDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
                    <label>
                      {label} :{' '}
                      <span className="text-red-600">{required && '*'}</span>
                    </label>
                    <br />
                    <input
                      type={type}
                      placeholder={label}
                      lang="en-GB"
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
<div className="md:col-span-2 mb-2">
  <label className="block mb-1 font-medium text-gray-700">
    Duration of the Film (HH:MM:SS:FF): <span className="text-red-600">*</span>
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
    <p className="text-red-500 text-sm">Duration Hours should be between 0 to 23</p>
  )}
  {errors.durationMinutes && (
    <p className="text-red-500 text-sm">Duration Minutes should be between 0 to 59</p>
  )}
  {errors.durationSeconds && (
    <p className="text-red-500 text-sm">Duration Seconds should be between 0 to 59</p>
  )}
  {errors.durationFrames && (
    <p className="text-red-500 text-sm">Duration Frames should be between 0 to 29</p>
  )}
</div>

              <div style={{ marginBottom: '1rem' }}>
                <label className="text-gray-700  text-sm font-medium col-span-1">
                  Sound Format : *
                </label>
                <br />
                <select
                  {...register('soundFormat', {
                    required: 'Sound Format is required',
                  })}
                  className="w-full  text-sm py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
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
                <label className="text-gray-700  text-sm col-span-1">
                  Format of the Film : *
                </label>
                <br />
                <select
                  {...register('formatOfTheFilm', {
                    required: 'Format of the Film is required',
                  })}
                  className="w-full py-2 px-2  text-sm text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                >
                  <option value="">Format of the Film</option>
                  <option value="DVD"> DVD</option>
                  <option value="Hard Disk">Hard disk</option>
                  <option value="Pendrive">Pendrive</option>
                  <option value="Blueray DVD">Blueray DVD</option>
                </select>
                {typeof errors.formatOfTheFilm?.message === 'string' && (
                  <p className="text-red-500 text-sm">
                    {errors.formatOfTheFilm.message}
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
              {cbfc.ProductionDetails.map(
                ({ name, label, type, required, pattern }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
                    <label>{label}</label>
                    <br />{' '}
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
                Complete Postal Address :
              </label>
              <textarea
                {...register('applicantAddress', {
                  required: 'Applicant Address is required',
                })}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
              ></textarea>
              {typeof errors.applicantAddress?.message === 'string' && (
                <p className="text-red-500 text-sm">
                  {errors.applicantAddress.message}
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
              {cbfc.BookingDetails.map(({ name, label, type }, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 items-center gap-4"
                >
                  <label className="text-gray-700 font-medium col-span-1">
                    {label} :
                  </label>
                  <input
                    type={type}
                    placeholder={label}
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

          {/* Document Uploads Section */}
          <div className="p-5 bg-white rounded-lg shadow ">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Document Uploads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'synopsis', label: 'Synopsis' },
                { name: 'castCredits', label: 'Cast & Credits' },
                { name: 'songlines', label: 'Song Lines' },
                { name: 'poster', label: 'Poster' },
              ].map(({ name, label }, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 items-center gap-4"
                >
                  <label className="text-gray-700 font-medium col-span-1">
                    {label} :
                  </label>
                  <input
                    type="file"
                    name={name}
                    accept="application/pdf,image/svg+xml,image/png"
                    className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                  />
                </div>
              ))}
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

export default CbfcScreening;
