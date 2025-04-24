import { useState } from 'react';
import { bookingForm, getAllSlotByDate } from '../../config/controller';

function FilmOrAudioVisualScreening() {
  const [formData, setFormData] = useState({
    nameOfApplicant: '',
    whatsappNo: '',
    altContactNo: '',
    email: '',
    postalAddress: '',
    billingName: '',
    billingContactNo: '',
    GSTIN: '',
    billingEmail: '',
    category: '',
    billingPostalAddress: '',
  });
const [bookedSlots, setBookedSlots] = useState<string[]>([]);
const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
const token = sessionStorage.getItem('token');
const userId = sessionStorage.getItem('userID');
const allSlots = ['10AM-2PM', '2PM-6PM', '6PM-10PM'];
const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

      if (response?.success) {
        const booked = response?.data?.map(
          (booking: any) => booking?.bookingDetails?.timeSlot
        );
        setBookedSlots(booked);
      }
    } catch (error) {
      console.error('Error fetching slots:', error);
    }
  };
  const handleSubmit =async (e: any) => {
    e.preventDefault();
    const formattedData = {
      bookedBy: userId, // From your session storage
      bookingType: "Film Or Audio-Visual Screening Booking",
      applicantDetails: {
        nameOfApplicant: formData.nameOfApplicant,
        whatsappNo: formData.whatsappNo,
        altContactNo: formData.altContactNo,
        email: formData.email,
        postalAddress: formData.postalAddress
      },
      billingDetails: {
        billingName: formData.billingName,
        contactNo: formData.billingContactNo,
        GSTIN: formData.GSTIN,
        email: formData.billingEmail,
        category: formData.category,
        postalAddress: formData.billingPostalAddress
      },
      bookingDetails: {
        bookingDate: selectedDate,
        timeSlot: selectedSlot // From your state
      }
    };
     try {
          const response = await bookingForm({
            token: token,
            data: formattedData,
          });
    
          if (response.success) {
            navigate('/success-page'); // or wherever you want to redirect
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
      type:'text'
    },
    {
      name: 'whatsappNo',
      label: 'Whatsapp No.',
      type:'number'
    },
    {
      name: 'altContactNo',
      label: 'Alternative Contact No.',
      type:'number'
    },
    {
      name: 'email',
      label: 'Email Id',
      type:'email'
    },
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
      type:'number'
    },
    {
      name: 'GSTIN',
      label: 'GSTIN (If Any)',
      type:'text'
    },
    {
      name: 'billingEmail',
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
                name="postalAddress"
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
                name="postalAddress"
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
                    placeholder={label}
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
