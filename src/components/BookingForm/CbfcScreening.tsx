import { useState } from 'react';
import { createBooking, createOrder, getAllSlotByDate } from '../../config/controller';
import { useForm } from 'react-hook-form';
function CbfcScreening() {
  const userId = sessionStorage.getItem('userID');
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const token = sessionStorage.getItem('token');
  const allSlots = ['10AM-2PM', '2PM-6PM', '6PM-10PM'];
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
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
    const formattedData = {
      bookedBy: userId,
      bookingType: 'CBFC SCREENING',
      filmDetails: {
        name: data.name,
        language: data.language,
        duration: data.duration,
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

    try {
      const response = await createBooking({ token, data: formattedData });
      if (response.success) {
        createOrder({id:response?.data?._id ?? '', token: token , data: {orderedBy: userId}});
        console.log(response?.data?._id,"hgfhgfhgf");
        // navigate('/confirmation', { state: { bookingDetails: response } });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const ScreeningDetails = [
    {
      name: 'name',
      label: 'Name of the Film',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z0-9\s&.-]+$/,
        message: 'Enter a valid name (letters, numbers, &, ., - allowed)',
      },
    },
    {
      name: 'language',
      label: 'Language of the Film',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
    {
      name: 'duration',
      label: 'Duration of the Film',
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
      name: 'nameOfTheDirector',
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
      label: 'Name of the Production House',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z0-9\s&.-]+$/,
        message: 'Enter a valid name (letters, numbers, &, ., - allowed)',
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
      label: 'Email Id *',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
    {
      name: 'GST',
      label: 'GSTIN (If any)',
      type: 'text',
      required: false,
      pattern: {
        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
        message: 'Enter a valid GSTIN (e.g. 22AAAAA0000A1Z5)',
      },
    },
  ];

  const BookingDetails = [
    {
      name: 'bookingDate',
      label: 'Booking Date *',
      type: 'Date',
      required: true,
      pattern: /^\d{4}-\d{2}-\d{2}$/, 
      errorMessage: 'Please enter a valid date in YYYY-MM-DD format',
    },
  ];

  return (
    <div className=" bg-gray-50   text-sm rounded-lg">
      <h2 className="text-xl font-semibold text-center text-red-600 mb-6">
        For CBFC SCREENING
      </h2>
      <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 grid gap-2 grid-cols-1 xl:grid-cols-2">
          {/* Film Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Film Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ScreeningDetails.map(
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
              {ProductionDetails.map(
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
              {BookingDetails.map(({ name, label, type }, index) => (
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
