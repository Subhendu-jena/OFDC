import { useState } from 'react';
import { createBooking, getAllSlotByDate } from '../../config/controller';
import { useForm } from 'react-hook-form';

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
  const allSlots = ['10AM-2PM', '2PM-6PM', '6PM-10PM'];
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
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
        durationOfFilm: data.durationOfFilm,
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
      documentUploads: {
        synopsis: '11111',
        castAndCredits: '11111',
        songLines: '11111',
        poster: '111111',
      },
      bookingDetails: {
        bookingDate: selectedDate,
        timeSlot: selectedSlot,
      },
    };
    try {
      const response = await createBooking({
        token: token,
        data: formattedJsonData,
      });

      if (response.success) {
        // navigate('/confirmation', { state: { bookingDetails: response } });
      } else {
        console.error('Submission failed:', response.message);
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // alert('An error occurred. Please try again.');
    }
    console.log('Form Submitted:', formData);
  };

  const AppliCationDetails = [
    {
      name: 'nameOfApplicant',
      label: 'Name of the Applicant',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
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
  const ScreeningDetails = [
    {
      name: 'nameOfFilm',
      label: 'Name of the Film',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z0-9\s&.-]+$/,
        message: 'Enter a valid name (letters, numbers, &, ., - allowed)',
      },
    },
    {
      name: 'languageOfFilm',
      label: 'Language of the Film',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
    {
      name: 'durationOfFilm',
      label: 'Duration of the Film ',
      type: 'text',
      required: true,
      pattern: {
        value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]:[0-2][0-9]$/,
        message: 'Duration must be in HH:MM:SS:FF format',
      },
    },
    {
      name: 'aspectRatio',
      label: 'Aspect Ratio',
      type: 'text',
      required: false,
      pattern: {
        value: /^\d+(\.\d+)?:\d+(\.\d+)?$/,
        message: 'Enter a valid aspect ratio like 16:9 or 2.39:1',
      },
    },
    {
      name: 'directorName',
      label: 'Name of the Director',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
  ];
  const ProductionDetails = [
    {
      name: 'producerName',
      label: 'Name of the Producer',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Name should contain only letters and spaces',
      },
    },
    {
      name: 'productionHouseName',
      label: 'Name of the Production House ',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z0-9\s&.-]+$/,
        message: 'Enter a valid name (letters, numbers, &, ., - allowed)',
      },
    },
    {
      name: 'productionWhatsappNo',
      label: 'Whatsapp No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit WhatsApp number',
      },
    },
    {
      name: 'Alternative Contact No.',
      label: 'Alternative Contact No.',
      type: 'number',
      required: false,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit contact number',
      },
    },
    {
      name: 'productionEmail',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
    {
      name: 'productionGST',
      label: 'GSTIN (If any) ',
      type: 'text',
      required: false,
      pattern: {
        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
        message: 'Enter a valid GSTIN (e.g. 22AAAAA0000A1Z5)',
      },
    },
  ];
  const Requirements = [
    { name: 'podiumWithMic', label: 'Podium with Mic' },
    { name: 'cordlessMic', label: '2 Cordless Mic' },
    { name: 'screeningFacilities', label: 'Screening Facilities' },
  ];
  const BillingDetails = [
    {
      name: 'billingName',
      label: 'Billing Name',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
    {
      name: 'billingContactNo',
      label: 'Contact No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit contact number',
      },
    },
    {
      name: 'billingGSTIN',
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
              {AppliCationDetails.map(
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
              {Requirements.map(({ name, label }, index) => (
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
              {ScreeningDetails.map(
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
              <div  style={{ marginBottom: '1rem' }}>
                <label className="text-gray-700 font-medium col-span-1">
                  Sound Format :
                </label>
                <select
                  {...register('soundFormat', {
                    required: 'Format of the Film is required',
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
              <div  style={{ marginBottom: '1rem' }}>
                <label className="text-gray-700 font-medium col-span-1">
                  Format of the Film :
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
              {ProductionDetails.map(
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
                Complete Postal Address :1
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
              {BillingDetails.map(
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
            <div  style={{ marginBottom: '1rem' }}>
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

          {/* Document Uploads Section */}
          <div className="p-5 bg-white rounded-lg shadow mt-6">
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
                    className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    onChange={handleChange}
                  />
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
              {BookingDetails.map(
                ({ name, label, type }) => (
                  <div key={name} style={{ marginBottom: '1rem' }}>
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
                )
              )}
             {selectedDate && <div className="grid grid-cols-3 mt-4 items-center ">
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
                                ? 'bg-red-400 text-white border-red-400'
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
              </div>}
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
