import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookingForm, getAllSlotByDate } from '../../config/controller';

function CbfcScreening() {
  const userId = sessionStorage.getItem('userID');
  const [formData, setFormData] = useState({
    name: '',
    language: '',
    duration: '',
    aspectRatio: '',
    nameOfTheDirector: '',
    soundFormat: '',
    formatOfTheFilm: '',
    producerName: '',
    productionHouseName: '',
    whatsappNo: '',
    altContactNo: '',
    email: '',
    applicantAddress: '',
    GST: '',
    bookingDate: '',
    synopsis: null,
    castCredit: null,
    songlines: null,
    filmPoster: null,
  });
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const token = sessionStorage.getItem('token');
  const allSlots = ['10AM-2PM', '2PM-6PM', '6PM-10PM'];
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
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
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formattedData = {
      bookedBy: userId,
      bookingType: 'CBFC SCREENING',
      filmDetails: {
        name: formData.name,
        language: formData.language,
        duration: formData.duration,
        aspectRatio: formData.aspectRatio,
        nameOfTheDirector: formData.nameOfTheDirector,
        soundFormat: formData.soundFormat,
        formatOfTheFilm: formData.formatOfTheFilm,
      },
      productionDetails: {
        producerName: formData.producerName,
        productionHouseName: formData.productionHouseName,
        whatsappNo: formData.whatsappNo,
        altContactNo: formData.altContactNo,
        email: formData.email,
        address: formData.applicantAddress,
        GST: formData.GST,
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
      const response = await bookingForm({
        token: token,
        data: formattedData,
      });

      if (response.success) {
        navigate('/confirmation', { state: { bookingDetails: response } });
      } else {
        console.error('Submission failed:', response.message);
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // alert('An error occurred. Please try again.');
    }
    // navigate('/preview?edit=true');
    console.log('Form Data Submitted:', formData);
  };

  const ScreeningDetails = [
    {
      name: 'name',
      label: 'Name of the Film',
      type: 'text',
    },
    {
      name: 'language',
      label: 'Language of the Film',
      type: 'text',
    },
    {
      name: 'duration',
      label: 'Duration of the Film ',
      type: 'time',
    },
    {
      name: 'aspectRatio',
      label: 'Aspect Ratio',
      type: 'text',
    },
    {
      name: 'nameOfTheDirector',
      label: 'Name of the Director',
      type: 'text',
    },
  ];

  const ProductionDetails = [
    {
      name: 'producerName',
      label: 'Name of the Producer',
      type: 'text',
      value: formData.producerName,
    },
    {
      name: 'productionHouseName',
      label: 'Name of the Production House ',
      type: 'text',
    },
    {
      name: 'whatsappNo',
      label: 'Whatsapp No.',
      type: 'number',
    },
    {
      name: 'altContactNo',
      label: 'Alternative Contact No.',
      type: 'number',
    },
    {
      name: 'email',
      label: 'Email Id',
      type: 'email',
    },
    {
      name: 'GST',
      label: 'GSTIN (If any) ',
      type: 'text',
    },
  ];

  const BookingDetails = [
    {
      name: 'bookingDate',
      label: 'Booking Date',
      type: 'Date',
    },
  ];
  console.log(userId, 'userId');
  return (
    <div className=" bg-gray-50   text-sm rounded-lg">
      <h2 className="text-xl font-semibold text-center text-red-600 mb-6">
        For CBFC SCREENING
      </h2>
      <form className="space-y-6 " onSubmit={handleSubmit}>
        <div className="space-y-6 grid gap-2 grid-cols-1 xl:grid-cols-2">
          {/* Film Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Film Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ScreeningDetails.map(({ name, label }, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 items-center gap-4"
                >
                  <label className="text-gray-700 text-sm col-span-1">
                    {label} :
                  </label>
                  <input
                    type={ScreeningDetails[index].type || 'text'}
                    name={name}
                    placeholder={label}
                    lang="en-GB"
                    onChange={handleChange}
                    className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    required
                  />
                </div>
              ))}
              <div className="grid grid-cols-3 mt-4 items-center gap-4">
                <label className="text-gray-700  text-sm font-medium col-span-1">
                  Sound Format :
                </label>
                <select
                  name="soundFormat"
                  className="w-full  text-sm py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Sound Format </option>
                  <option value="mono">Mono</option>
                  <option value="stereo">Stereo</option>
                  <option value="Dolby 5.1"> Dolby 5.1 </option>
                  <option value="Dolby 7.1"> Dolby 7.1</option>
                </select>
              </div>
              <div className="grid grid-cols-3 mt-4 items-center gap-4">
                <label className="text-gray-700  text-sm col-span-1">
                  Format of the Film :
                </label>
                <select
                  name="formatOfTheFilm"
                  className="w-full py-2 px-2  text-sm text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                  onChange={handleChange}
                  required
                >
                  <option value="">Format of the Film</option>
                  <option value="DVD"> DVD</option>
                  <option value="Hard Disk">Hard disk</option>
                  <option value="Pendrive">Pendrive</option>
                  <option value="Blueray DVD">Blueray DVD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Production Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Production Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ProductionDetails.map(({ name, label, type }, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 items-center gap-4"
                >
                  <label className="text-gray-700 font-medium col-span-1">
                    {label} :
                  </label>
                  <input
                    type={type}
                    name={name}
                    placeholder={label}
                    onChange={handleChange}
                    className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    required
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 mt-4 items-center gap-4">
              <label className="text-gray-700 font-medium col-span-1">
                Complete Postal Address :
              </label>
              <textarea
                name="applicantAddress"
                onChange={handleChange}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
                required
              ></textarea>
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
                  className="grid grid-cols-3 items-center gap-4"
                >
                  <label className="text-gray-700 font-medium col-span-1">
                    {label} :
                  </label>
                  <input
                    type={type}
                    name={name}
                    placeholder={label}
                    onChange={handleCheckDateChange}
                    className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    required
                  />
                </div>
              ))}
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
                          onClick={() => {
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
              </div>
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
                    onChange={handleChange}
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
