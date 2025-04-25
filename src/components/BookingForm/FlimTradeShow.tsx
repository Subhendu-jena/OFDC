import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookingForm, getAllSlotByDate } from '../../config/controller';

export default function FlimTradeShow() {
  const [formData, setFormData] = useState<any>({
    nameOfApplicant: '',
    whatsappNo: '',
    altContactNo: '',
    email: '',
    postalAddress: '',
    podiumWithMic: false,
    cordlessMic: false,
    screeningFacilities: false,
    nameOfFilm: '',
    languageOfFilm: '',
    durationOfFilm: '',
    aspectRatio: '',
    directorName: '',
    soundFormat: '',
    formatOfFilm: '',
    producerName: '',
    productionHouseName: '',
    productionWhatsappNo: '',
    productionEmail: '',
    productionAltContactNo: '',
    productionAddress: '',
    productionGST: '',
    billingName: '',
    billingContactNo: '',
    billingGSTIN: '',
    billingEmail: '',
    category: 'COMPANY',
    billingPostalAddress: '',
    bookingDate: '',
    synopsisFile: null,
    castCreditsFile: null,
    songLinesFile: null,
    posterFile: null
  });
const [bookedSlots, setBookedSlots] = useState<string[]>([]);
const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
const token = sessionStorage.getItem('token');
const userId = sessionStorage.getItem('userID');
const allSlots = ['10AM-2PM', '2PM-6PM', '6PM-10PM'];
const [selectedDate, setSelectedDate] = useState<string | null>(null);
const navigate=useNavigate()
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
  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const formattedJsonData = {
      bookedBy: userId, // From your session storage
      bookingType: "Film Trade Show",
      applicantDetails: {
        nameOfApplicant: formData.nameOfApplicant,
        whatsappNo: formData.whatsappNo,
        altContactNo: formData.altContactNo,
        email: formData.email,
        postalAddress: formData.postalAddress
      },
      requirements: {
        podiumWithMic: formData.podiumWithMic,
        cordlessMic: formData.cordlessMic,
        screeningFacilities: formData.screeningFacilities
      },
      screeningDetails: {
        nameOfFilm: formData.nameOfFilm,
        languageOfFilm: formData.languageOfFilm,
        durationOfFilm: formData.durationOfFilm,
        aspectRatio: formData.aspectRatio,
        directorName: formData.directorName,
        soundFormat: formData.soundFormat,
        formatOfFilm: formData.formatOfFilm
      },
      productionDetails: {
        producerName: formData.producerName,
        productionHouseName: formData.productionHouseName,
        whatsappNo: formData.productionWhatsappNo,
        email: formData.productionEmail,
        altContactNo: formData.productionAltContactNo,
        address: formData.productionAddress,
        GST: formData.productionGST
      },
      billingDetails: {
        billingName: formData.billingName,
        contactNo: formData.billingContactNo,
        GSTIN: formData.billingGSTIN,
        email: formData.billingEmail,
        category: formData.category,
        postalAddress: formData.billingPostalAddress
      },
      documentUploads: {
        synopsis: "11111",
        castAndCredits: "11111",
        songLines:  "11111",
        poster:  "111111"
      },
      bookingDetails: {
        bookingDate: selectedDate,
        timeSlot: selectedSlot
      }
    };
    try {
              const response = await bookingForm({
                token: token,
                data: formattedJsonData,
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
    console.log('Form Submitted:', formData);
  };

  const AppliCationDetails = [
    {
      name: 'nameOfApplicant',
      label: 'Name of the Applicant',
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
  ];
  const ScreeningDetails = [
    {
      name: 'nameOfFilm',
      label: 'Name of the Film',
      type: 'text',
    },
    {
      name: 'languageOfFilm',
      label: 'Language of the Film',
      type: 'text',
    },
    {
      name: 'durationOfFilm',
      label: 'Duration of the Film ',
      type: 'text',
    },
    {
      name: 'aspectRatio',
      label: 'Aspect Ratio',
      type: 'text',
    },
    {
      name: 'directorName',
      label: 'Name of the Director',
      type: 'text',
    },
  ];
  const ProductionDetails = [
    {
      name: 'producerName',
      label: 'Name of the Producer',
      type: 'text',
    },
    {
      name: 'productionHouseName',
      label: 'Name of the Production House ',
      type: 'text',
    },
    {
      name: 'productionWhatsappNo',
      label: 'Whatsapp No.',
      type: 'number',
    },
    {
      name: 'Alternative Contact No.',
      label: 'Alternative Contact No.',
      type: 'number',
    },
    {
      name: 'productionEmail',
      label: 'Email Id',
      type: 'email',
    },
    {
      name: 'productionGST',
      label: 'GSTIN (If any) ',
      type: 'text',
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
      type:'text'
    },
    {
      name: 'billingContactNo',
      label: 'Contact No.',
      type: 'number',
    },
    {
      name: 'billingGSTIN',
      label: 'GSTIN (If Any)',
      type: 'text',
    },
    {
      name: 'billingEmail',
      label: 'Email Id',
      type: 'email',
    },
  ];

  const BookingDetails = [
    {
      name: 'bookingDate',
      label: 'Booking Date',
      type: 'Date',
    },
  ];

  return (
    <div className=" bg-gray-50  rounded-lg  text-sm">
      <h2 className="text-xl font-semibold text-center text-red-600 mb-6">
        Film Trade Show
      </h2>
      <form
        className="space-y-6 "
        onSubmit={handleSubmit}
      >
        <div className="space-y-6 grid gap-2 grid-cols-1 xl:grid-cols-2">
          {/* Applicant Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Applicant Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AppliCationDetails.map(({ name, label,type }, index) => (
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
                    placeholder={name}
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
                name="postalAddress"
                onChange={handleChange}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
                required
              ></textarea>
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
              {ScreeningDetails.map(({ name, label,type }, index) => (
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
                    placeholder={name}
                    onChange={handleChange}
                    className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    required
                  />
                </div>
              ))}
              <div className="grid grid-cols-3 mt-4 items-center gap-4">
                <label className="text-gray-700 font-medium col-span-1">
                  Sound Format :
                </label>
                <select
                  name="soundFormat"
                  className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
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
                <label className="text-gray-700 font-medium col-span-1">
                  Format of the Film :
                </label>
                <select
                  name="formatOfFilm"
                  className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                  onChange={handleChange}
                  required
                >
                  <option value="">Format of the Film</option>
                  <option value=" DVD"> DVD</option>
                  <option value="Hard disk">Hard disk</option>
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
              {ProductionDetails.map(({ name, label,type }, index) => (
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
                    placeholder={name}
                    onChange={handleChange}
                    className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    required
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 mt-4 items-center gap-4">
              <label className="text-gray-700 font-medium col-span-1">
                Complete Postal Address :1
              </label>
              <textarea
                name="productionAddress"
                onChange={handleChange}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
                required
              ></textarea>
            </div>
          </div>

          {/* Billing Details */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-red-600">
              Billing Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BillingDetails.map(({ name, label,type }, index) => (
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
                    placeholder={name}
                    onChange={handleChange}
                    className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    required
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 mt-4 items-center gap-4">
              <label className="text-gray-700 font-medium col-span-1">
                Select Category :
              </label>
              <select
                name="category"
                className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="INDIVIDUAL">INDIVIDUAL</option>
                <option value="COMPANY">COMPANY</option>
              </select>
            </div>

            <div className="grid grid-cols-3 mt-4 items-center gap-4">
              <label className="text-gray-700 font-medium col-span-1">
                Complete Postal Address :
              </label>
              <textarea
                name="billingPostalAddress"
                onChange={handleChange}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
                required
              ></textarea>
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
            {/* <div className="grid grid-cols-3 mt-4 items-center gap-4">
              <label className="text-gray-700 font-medium col-span-1">
                Purpose of Booking (in Detail):
              </label>
              <textarea
                name="applicantAddress"
                onChange={handleChange}
                className="w-full py-2 px-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                rows={3}
                required
              ></textarea>
            </div> */}
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
                    placeholder={name}
                    onChange={handleCheckDateChange}
                    className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                    required
                  />
                </div>
              ))}
              {/* <div className="grid grid-cols-3 mt-4 items-center ">
                <label
                  htmlFor=""
                  className="text-gray-700 font-medium col-span-1"
                >
                  Available Slots :
                </label>
                <div className="col-span-2">
                  {' '}
                  <div className="flex justify-around">
                    {['10AM-1PM', '2PM-5PM', '6PM-9PM'].map((slot) => (
                      <button   onClick={() => setSelectedSlot(slot)}
                      className={`border rounded-2xl px-5 py-1 cursor-pointer transition-all duration-200
                        ${selectedSlot === slot ? 'bg-red-400 text-white border-red-400' : 'bg-white text-black border-gray-300'}`}>
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div> */}
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
                          className={`border rounded-2xl px-5 py-1 transition-all duration-200${ isBooked ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
                : isSelected
                  ? 'bg-red-400 text-white border-red-400'
                  : 'bg-white text-black border-gray-300 hover:border-red-400'}`}disabled={isBooked}
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
