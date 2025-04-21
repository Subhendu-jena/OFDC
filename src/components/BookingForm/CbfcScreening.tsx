import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CbfcScreening() {
  const [formData, setFormData] = useState({
    filmName: '',
    language: '',
    synopsisEnglish: '',
    synopsisFilmLang: '',
    duration: '',
    aspectRatio: '',
    soundFormat: '',
    filmFormat: '',
    director: '',
    castCredit: '',
    songlines: '',
    lyricist: '',
    musicDirector: '',
    singers: '',
    filmPoster: null,
  });
const [selectedSlot,setSelectedSlot]=useState('');
  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/preview?edit=true');
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

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
      type: 'time',
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
                    placeholder={name}
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
                  name="category"
                  className="w-full  text-sm py-2 px-2 text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
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
                <label className="text-gray-700  text-sm col-span-1">
                  Format of the Film :
                </label>
                <select
                  name="category"
                  className="w-full py-2 px-2  text-sm text-gray-900 border-b border-gray-600 rounded-md focus:outline-none focus:border-red-500 col-span-2"
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
                    {['10AM-1PM', '2PM-5PM', '6PM-9PM'].map((slot) => (
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
