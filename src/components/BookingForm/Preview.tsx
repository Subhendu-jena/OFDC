import { X } from 'lucide-react';
import { useState } from 'react';
import { formatDateToMMDDYYYY } from '../../variables/utils';
import { FileCheck } from 'lucide-react';
const Preview = ({
  formData,
  selectedDate,
  selectedSlot,
  onEdit,
  onConfirm,
  isEditMode = false,
}: any) => {
  const [cancel, setCancel] = useState(false);
  const [remark, setRemark] = useState('');
  const role = sessionStorage.getItem('role');

  const handleCancelSubmit = () => {
    onEdit();
  };
console.log(formData, 'formdata at preview');
  return (
    <div className="min-h-screen  py-8 px-2 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
            <div>
              {' '}
              <h2 className="text-xl font-semibold text-white">
                Booking Confirmation Preview
              </h2>
              <p className="text-red-100 mt-1">
                Please review all details before final submission
              </p>
            </div>
            <button
              onClick={() => onEdit()}
              className="flex items-center gap-2 p-2 rounded-xl cursor-pointer border-2 text-white bg-red-600"
            >
              <X />
            </button>
          </div>
          <div className="p-6 space-y-8">
            {/* Applicant Details */}

            {formData?.applicantDetails && (
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Applicant Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Name of Applicant</p>
                    <p className="text-base font-medium">
                      {formData?.applicantDetails?.nameOfApplicant}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp Number</p>
                    <p className="text-base font-medium">
                      {formData?.applicantDetails?.whatsappNo}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Alternative Contact</p>
                    <p className="text-base font-medium">
                      {formData?.applicantDetails?.altContactNo ||
                        'Not provided'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-base font-medium">
                      {formData?.applicantDetails?.email}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Postal Address</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.applicantDetails?.postalAddress}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {formData?.screeningDetails && (
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Screening Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Name of Film</p>
                    <p className="text-base font-medium">
                      {formData?.screeningDetails?.nameOfFilm}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Language of the Film
                    </p>
                    <p className="text-base font-medium">
                      {formData?.screeningDetails?.languageOfFilm}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Duration of the Film
                    </p>
                    <p className="text-base font-medium">
                      {formData?.screeningDetails?.durationOfFilm}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Aspect Ratio</p>
                    <p className="text-base font-medium">
                      {formData?.screeningDetails?.aspectRatio ||
                        'Not provided'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Name of the Director
                    </p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.screeningDetails?.directorName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sound Format</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.screeningDetails?.soundFormat}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Format of the Film</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.screeningDetails?.formatOfFilm}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {formData?.filmDetails && (
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Film Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Name of Film</p>
                    <p className="text-base font-medium">
                      {formData?.filmDetails?.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Language of the Film
                    </p>
                    <p className="text-base font-medium">
                      {formData?.filmDetails?.language}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Duration of the Film
                    </p>
                    <p className="text-base font-medium">
                      {formData?.filmDetails?.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Aspect Ratio</p>
                    <p className="text-base font-medium">
                      {formData?.filmDetails?.aspectRatio || 'Not provided'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Name of the Director
                    </p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.filmDetails?.nameOfTheDirector}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sound Format</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.filmDetails?.soundFormat}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Format of the Film</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.filmDetails?.formatOfTheFilm}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {formData?.productionDetails && (
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Production Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Name of the Producer
                    </p>
                    <p className="text-base font-medium">
                      {formData?.productionDetails?.producerName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Name of the Production House
                    </p>
                    <p className="text-base font-medium">
                      {formData?.productionDetails?.productionHouseName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Whatsapp No</p>
                    <p className="text-base font-medium">
                      {formData?.productionDetails?.whatsappNo}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Alternative Contact No
                    </p>
                    <p className="text-base font-medium">
                      {formData?.productionDetails?.altContactNo ||
                        'Not provided'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Id</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.productionDetails?.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GSTIN</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.productionDetails?.GST || 'Not provided'}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Complete Address</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.productionDetails?.address}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Details */}
            {formData?.billingDetails && (
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Billing Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Billing Name</p>
                    <p className="text-base font-medium">
                      {formData?.billingDetails?.billingName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact Number</p>
                    <p className="text-base font-medium">
                      {formData?.billingDetails?.contactNo}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GSTIN</p>
                    <p className="text-base font-medium">
                      {formData?.billingDetails?.GSTIN || 'Not provided'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-base font-medium">
                      {formData?.billingDetails?.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="text-base font-medium">
                      {formData?.billingDetails?.category}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Billing Address</p>
                    <p className="text-base font-medium whitespace-pre-line">
                      {formData?.billingDetails?.postalAddress}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {formData?.requirements && (
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Podium with Mic</p>
                    <p className="text-base font-medium">
                      {formData?.requirements?.podiumWithMic == true
                        ? 'Yes'
                        : 'No'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">2 Cordless Mic</p>
                    <p className="text-base font-medium">
                      {formData?.requirements?.cordlessMic == true
                        ? 'Yes'
                        : 'No'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Screening Facilities
                    </p>
                    <p className="text-base font-medium">
                      {formData?.requirements?.screeningFacilities == true
                        ? 'Yes'
                        : 'No'}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Booking Details */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Booking Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Booking Date</p>
                  <p className="text-base font-medium">
                    {selectedDate || formatDateToMMDDYYYY(formData?.bookingDetails?.bookingDate) || 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time Slot</p>
                  <p className="text-base font-medium">
                    {selectedSlot || formData?.bookingDetails?.timeSlot || 'N/A'}
                  </p>
                </div>
                {/* {bookingResponse?.data?._id && (
                  <div>
                    <p className="text-sm text-gray-500">Booking Reference</p>
                    <p className="text-base font-medium">
                      {bookingResponse.data._id}
                    </p>
                  </div>
                )} */}
              </div>
            </div>
            {formData?.documentUploads &&<div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Uploaded Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Synopsis</p>
                  <a className="text-base flex gap-3 font-medium underline" target='_blank' href={formData?.documentUploads?.synopsis}>
                   <FileCheck /> Synopsis
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cast & Credits</p>
                  <a className="text-base flex gap-3 font-medium underline" target='_blank' href={formData?.documentUploads?.songLines}>
                   <FileCheck /> Cast & Credits
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Song Lines</p>
                  <a className="text-base flex gap-3 font-medium underline" target='_blank' href={formData?.documentUploads?.songLines}>
                    <FileCheck /> Song Lines
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Poster</p>
                  <a className="text-base flex gap-3 font-medium underline" target='_blank' href={formData?.documentUploads?.poster}>
                    <FileCheck /> Poster
                  </a>
                </div>
              </div>
            </div>}
            {formData?.status && (
              <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Booking Status
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Payment Status</p>
                  <p className="text-base font-medium">
                    {formData?.status || 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500"> Admin Approval</p>
                  <p className="text-base font-medium">
                    {formData?.approval || 'N/A'}
                  </p>
                </div>
                {/* {bookingResponse?.data?._id && (
                  <div>
                    <p className="text-sm text-gray-500">Booking Reference</p>
                    <p className="text-base font-medium">
                      {bookingResponse.data._id}
                    </p>
                  </div>
                )} */}
              </div>
            </div>
            )}
          </div>

          <div
            className={`bg-gray-50 px-6 py-4 flex gap-4 ${isEditMode ? 'justify-end' : 'justify-between'}`}
          >
            {!isEditMode && role === 'ADMIN' && (
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" id="sendEmail" />
                <label htmlFor="sendEmail">Send confirmation email</label>
              </div>
            )}
            <div className="flex gap-4">
              <button
                onClick={() =>
                  isEditMode
                    ? onEdit()
                    : role === 'ADMIN'
                      ?  setCancel(true)
                      : onEdit()
                }
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {isEditMode
                  ? 'Edit Details'
                  : role === 'ADMIN'
                    ? 'Cancel Booking'
                    : 'Go Back'}
              </button>
              {/* <button
                onClick={() => onConfirm()}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                {isEditMode ? 'Confirm & Pay' : role === 'ADMIN' ?  'Confirm Booking' : ''}
              </button> */}
              {(isEditMode || (role === 'ADMIN' && formData)) && (
                <button
                  onClick={() => {if(onConfirm)onConfirm() ??  onEdit()}}
                  className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                   {isEditMode
                  ? 'Confirm & Pay'
                  : role === 'ADMIN'
                    ? 'Confirm Booking'
                    : 'GoTo dashboard'}
                  {/* {isEditMode ? 'Confirm & Pay' : 'Confirm Booking'} */}
                </button>
              )}
            </div>
          </div>

          {cancel && (
            <div className="px-6 py-4 flex flex-col gap-4 bg-gray-50 border-t">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Reason for Cancellation
                </h3>
                <textarea
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  rows={4}
                  placeholder="Please specify reason for cancellation..."
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setCancel(false)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleCancelSubmit}
                  className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                  Submit Cancellation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
