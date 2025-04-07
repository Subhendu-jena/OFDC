import { useState } from 'react';

export default function FlimTradeShow() {
  const [formData, setFormData] = useState({
    applicantName: '',
    postalAddress: '',
    whatsapp: '',
    altContact: '',
    email: '',
    podiumMic: false,
    cordlessMic: false,
    screeningFacilities: false,
    filmName: '',
    language: '',
    duration: '',
    aspectRatio: '',
    soundFormat: 'Mono',
    filmFormat: 'DVD',
    director: '',
    producer: '',
    productionHouse: '',
    productionAddress: '',
    prodWhatsapp: '',
    prodAltContact: '',
    prodEmail: '',
    gstin: '',
    category: 'INDIVIDUAL',
    billingName: '',
    billingAddress: '',
    billingContact: '',
    billingGstin: '',
    purpose: 'Seminar',
    bookingDate: '',
    bookingTimeFrom: '',
    bookingTimeTo: '',
    synopsis: null,
    castCredits: null,
    songlines: null,
    poster: null,
  });
const [selectedSlot, setSelectedSlot] = useState('');
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const AppliCationDetails = [
    {
      name: 'Name of the Applicant',
      label: 'Name of the Applicant',
      type: 'text',
    },
    {
      name: 'Whatsapp No.',
      label: 'Whatsapp No.',
      type: 'number',
    },
    {
      name: 'Alternative Contact No.',
      label: 'Alternative Contact No.',
      type: 'number',
    },
    {
      name: 'Email Id',
      label: 'Email Id',
      type: 'email',
    },
  ];
  const ScreeningDetails = [
    {
      name: 'Name of the Film',
      label: 'Name of the Film',
      type: 'text',
    },
    {
      name: 'Language of the Film',
      label: 'Language of the Film',
      type: 'text',
    },
    {
      name: 'Duration of the Film ',
      label: 'Duration of the Film ',
      type: 'text',
    },
    {
      name: 'Aspect Ratio',
      label: 'Aspect Ratio',
      type: 'text',
    },
    {
      name: 'Name of the Director',
      label: 'Name of the Director',
      type: 'text',
    },
  ];
  const ProductionDetails = [
    {
      name: 'Name of the Producer',
      label: 'Name of the Producer',
      type: 'text',
    },
    {
      name: 'Name of the Production House ',
      label: 'Name of the Production House ',
      type: 'text',
    },
    {
      name: 'Whatsapp No.',
      label: 'Whatsapp No.',
      type: 'number',
    },
    {
      name: 'Alternative Contact No.',
      label: 'Alternative Contact No.',
      type: 'number',
    },
    {
      name: 'Email Id',
      label: 'Email Id',
      type: 'email',
    },
    {
      name: 'GSTIN (If any) ',
      label: 'GSTIN (If any) ',
      type: 'text',
    },
  ];
  const Requirements = [
    { name: 'podiumMic', label: 'Podium with Mic' },
    { name: 'cordlessMic', label: '2 Cordless Mic' },
    { name: 'screeningFacilities', label: 'Screening Facilities' },
  ];
  const BillingDetails = [
    {
      name: 'Billing Name',
      label: 'Billing Name',
      type:'text'
    },
    {
      name: 'Contact No.',
      label: 'Contact No.',
      type: 'number',
    },
    {
      name: 'GSTIN (If Any)',
      label: 'GSTIN (If Any)',
      type: 'text',
    },
    {
      name: 'Email Id',
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
    // {
    //   name: 'from',
    //   label: 'From',
    //   type: 'time',
    // },
    // {
    //   name: 'to',
    //   label: 'To',
    //   type: 'time',
    // },
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
                name="applicantAddress"
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
                  name="category"
                  className="w-full py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Sound Format </option>
                  <option value="Mono">Mono</option>
                  <option value="Stereo">Stereo</option>
                  <option value=" Dolby 5.1 "> Dolby 5.1 </option>
                  <option value=" Dolby 7.1"> Dolby 7.1</option>
                </select>
              </div>
              <div className="grid grid-cols-3 mt-4 items-center gap-4">
                <label className="text-gray-700 font-medium col-span-1">
                  Format of the Film :
                </label>
                <select
                  name="category"
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
                name="applicantAddress"
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
                    onChange={handleChange}
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
                  {' '}
                  <div className="flex justify-around">
                    {['10AM-2PM', '2PM-6PM', '6PM-10PM'].map((slot) => (
                      <button   onClick={() => setSelectedSlot(slot)}
                      className={`border rounded-2xl px-5 py-1 cursor-pointer transition-all duration-200
                        ${selectedSlot === slot ? 'bg-red-400 text-white border-red-400' : 'bg-white text-black border-gray-300'}`}>
                        {slot}
                      </button>
                    ))}
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
