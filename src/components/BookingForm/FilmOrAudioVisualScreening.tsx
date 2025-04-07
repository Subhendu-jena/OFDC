import { useState } from 'react';

function FilmOrAudioVisualScreening() {
  const [formData, setFormData] = useState({
    applicantName: '',
    applicantAddress: '',
    whatsapp: '',
    altContact: '',
    email: '',
    category: '',
    billingName: '',
    billingAddress: '',
    billingContact: '',
    billingEmail: '',
    gstin: '',
    purpose: '',
    bookingDate: '',
    bookingTimeFrom: '',
    bookingTimeTo: '',
  });
const [selectedSlot,setSelectedSlot]=useState('');
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const AppliCationDetails = [
    {
      name: 'Name of the Applicant',
      label: 'Name of the Applicant',
      type:'text'
    },
    {
      name: 'Whatsapp No.',
      label: 'Whatsapp No.',
      type:'number'
    },
    {
      name: 'Alternative Contact No.',
      label: 'Alternative Contact No.',
      type:'number'
    },
    {
      name: 'Email Id',
      label: 'Email Id',
      type:'email'
    },
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
      type:'number'
    },
    {
      name: 'GSTIN (If Any)',
      label: 'GSTIN (If Any)',
      type:'text'
    },
    {
      name: 'Email Id',
      label: 'Email Id',
      type:'email'
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
        Film Or Audio-Visual Screening Booking
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
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
                <option value="GOVT">GOVT</option>
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
