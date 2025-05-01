// import React, { useState } from 'react';
// import { Calendar, FileText, Film, Users, Upload } from 'lucide-react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { paths } from '../../routes/Path';




// const Preview: React.FC = ({formData}:any) => {
//   const [searchParams] = useSearchParams();
//   const edit = searchParams.get('edit') === 'true';
//   const navigate = useNavigate();
// const [cancel,setcancel]=useState(false);
//   const handleEdit = () => {
//     if (edit) {
//       console.log('Edit clicked');
//     } else {
//       // navigate(-1);
//       setcancel(true);
//     }
//   };
//   const handleConfirmSubmission = () => {
//     if (edit) {
//       navigate(paths.confirmation);
//       console.log('Submission confirmed');
//     } else {
//       navigate(paths.adminDashboard);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="bg-red-600 px-6 py-4">
//             <h2 className="text-xl font-semibold text-white">
//               Preview Your Submission
//             </h2>
//             <p className="text-red-100 mt-1">
//               Please review all details before final submission
//             </p>
//           </div>

//           <div className="p-6 space-y-8">
//             {/* Film Details Preview */}
//             <div className="border-b pb-6">
//               <div className="flex items-center gap-2 mb-4">
//                 <Film className="w-5 h-5 text-red-600" />
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Film Details
//                 </h3>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Film Title</p>
//                   <p className="text-base font-medium">
//                     {formData.filmTitle || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Language</p>
//                   <p className="text-base font-medium">
//                     {formData.language || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Duration</p>
//                   <p className="text-base font-medium">
//                     {formData.duration || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Sound Format</p>
//                   <p className="text-base font-medium">
//                     {formData.soundFormat || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Film Format</p>
//                   <p className="text-base font-medium">
//                     {formData.filmFormat || 'Not provided'}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Production Details Preview */}
//             <div className="border-b pb-6">
//               <div className="flex items-center gap-2 mb-4">
//                 <Users className="w-5 h-5 text-red-600" />
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Production Details
//                 </h3>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Producer Name</p>
//                   <p className="text-base font-medium">
//                     {formData.producerName || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Production House</p>
//                   <p className="text-base font-medium">
//                     {formData.productionHouse || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Contact Number</p>
//                   <p className="text-base font-medium">
//                     {formData.contactNumber || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Email</p>
//                   <p className="text-base font-medium">
//                     {formData.email || 'Not provided'}
//                   </p>
//                 </div>
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">
//                     Complete Postal Address
//                   </p>
//                   <p className="text-base font-medium">
//                     {formData.applicantAddress || 'Not provided'}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Details Preview */}
//             <div className="border-b pb-6">
//               <div className="flex items-center gap-2 mb-4">
//                 <Calendar className="w-5 h-5 text-red-600" />
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Booking Details
//                 </h3>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Screening Date</p>
//                   <p className="text-base font-medium">
//                     {formData.screeningDate || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Screening Time</p>
//                   <p className="text-base font-medium">
//                     {formData.screeningTime || 'Not provided'}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Number of People</p>
//                   <p className="text-base font-medium">
//                     {formData.numberOfPeople || 'Not provided'}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Uploaded Documents Preview */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Upload className="w-5 h-5 text-red-600" />
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Uploaded Documents
//                 </h3>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {['synopsis', 'castCredits', 'songlines', 'poster'].map(
//                   (doc) => (
//                     <div key={doc} className="flex items-center gap-2">
//                       <FileText className="w-5 h-5 text-gray-400" />
//                       <div>
//                         <p className="text-sm text-gray-500">
//                           {doc.charAt(0).toUpperCase() + doc.slice(1)}
//                         </p>
//                         <p className="text-base font-medium">
//                           {/* {formData[doc as keyof FormData]?.name || 'Not uploaded'} */}
//                         </p>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>

//           <div
//             className={`bg-gray-50 px-6 py-4 flex gap-4 ${edit == true ? 'justify-end' : 'justify-between'}`}
//           >
//             {!edit && (
//               <div>
//                 <input
//                   type="checkbox"
//                   className="mr-3 flex-col  items-center "
//                 />
//                 Send email to CFBC
//               </div>
//             )}
//             <div className="flex gap-4">
//               {' '}
//               <button
//                 onClick={handleEdit}
//                 className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//               >
//                 {edit ? ' Edit Details' : 'Reject'}
//               </button>
//               <button
//                 onClick={handleConfirmSubmission}
//                 className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
//               >
//                 {edit ? 'Confirm & Submit' : 'Approve'}
//               </button>
//             </div>
//           </div>
//          {cancel && <div className='px-6 py-4  flex flex-col gap-4'>
//             <div><h3 className="text-lg font-semibold text-gray-900">
//              Remark
//             </h3>
//             <textarea name="reason" id="" className='p-2 border-1 rounded-2xl w-[50%]' rows={4}></textarea></div>
//             <button className='px-4 py-2 text-white w-1/2 bg-red-600 rounded-md hover:bg-red-700' onClick={()=>navigate(paths.adminDashboard)}>Submit</button>
//           </div>}
//         </div>
//       </div>
//     </div>
//   //   <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//   //   <div className="max-w-7xl mx-auto">
//   //     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//   //       <div className="bg-red-600 px-6 py-4">
//   //         <h2 className="text-xl font-semibold text-white">
//   //           Preview Your Submission
//   //         </h2>
//   //         <p className="text-red-100 mt-1">
//   //           Please review all details before final submission
//   //         </p>
//   //       </div>

//   //       <div className="p-6 space-y-8">
//   //         {/* Applicant Details Preview */}
//   //         <div className="border-b pb-6">
//   //           <h3 className="text-lg font-semibold text-gray-900">
//   //             Applicant Details
//   //           </h3>
//   //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//   //             <div>
//   //               <p className="text-sm text-gray-500">Name of Applicant</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('nameOfApplicant')}
//   //               </p>
//   //             </div>
//   //             <div>
//   //               <p className="text-sm text-gray-500">WhatsApp Number</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('whatsappNo')}
//   //               </p>
//   //             </div>
//   //             <div>
//   //               <p className="text-sm text-gray-500">Alternative Contact</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('altContactNo') || 'Not provided'}
//   //               </p>
//   //             </div>
//   //             <div>
//   //               <p className="text-sm text-gray-500">Email</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('email')}
//   //               </p>
//   //             </div>
//   //             <div className="col-span-2">
//   //               <p className="text-sm text-gray-500">Postal Address</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('postalAddress')}
//   //               </p>
//   //             </div>
//   //           </div>
//   //         </div>

//   //         {/* Billing Details Preview */}
//   //         <div className="border-b pb-6">
//   //           <h3 className="text-lg font-semibold text-gray-900">
//   //             Billing Details
//   //           </h3>
//   //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//   //             <div>
//   //               <p className="text-sm text-gray-500">Billing Name</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('billingName')}
//   //               </p>
//   //             </div>
//   //             <div>
//   //               <p className="text-sm text-gray-500">Contact Number</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('billingContactNo')}
//   //               </p>
//   //             </div>
//   //             <div>
//   //               <p className="text-sm text-gray-500">GSTIN</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('GSTIN') || 'Not provided'}
//   //               </p>
//   //             </div>
//   //             <div>
//   //               <p className="text-sm text-gray-500">Email</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('billingEmail')}
//   //               </p>
//   //             </div>
//   //             <div>
//   //               <p className="text-sm text-gray-500">Category</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('category')}
//   //               </p>
//   //             </div>
//   //             <div className="col-span-2">
//   //               <p className="text-sm text-gray-500">Billing Address</p>
//   //               <p className="text-base font-medium">
//   //                 {getValues('billingPostalAddress')}
//   //               </p>
//   //             </div>
//   //           </div>
//   //         </div>

//   //         {/* Booking Details Preview */}
//   //         <div className="border-b pb-6">
//   //           <h3 className="text-lg font-semibold text-gray-900">
//   //             Booking Details
//   //           </h3>
//   //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//   //             <div>
//   //               <p className="text-sm text-gray-500">Booking Date</p>
//   //               <p className="text-base font-medium">
//   //                 {selectedDate}
//   //               </p>
//   //             </div>
//   //             <div>
//   //               <p className="text-sm text-gray-500">Time Slot</p>
//   //               <p className="text-base font-medium">
//   //                 {selectedSlot}
//   //               </p>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>

//   //       <div className="bg-gray-50 px-6 py-4 flex justify-end gap-4">
//   //         <button
//   //           onClick={handleEdit}
//   //           className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//   //         >
//   //           Edit Details
//   //         </button>
//   //         <button
//   //           onClick={handleConfirm}
//   //           className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
//   //         >
//   //           Confirm & Submit
//   //         </button>
//   //       </div>
//   //     </div>
//   //   </div>
//   // </div>
//   );
// };

// export default Preview;






import { useState } from 'react';

interface PreviewProps {
  formData: {
    nameOfApplicant: string;
    whatsappNo: string;
    altContactNo?: string;
    email: string;
    postalAddress: string;
    billingName: string;
    billingContactNo: string;
    GSTIN?: string;
    billingEmail: string;
    category: string;
    billingPostalAddress: string;
  };
  // bookingResponse: any;
  selectedDate: string | null;
  selectedSlot: string | null;
  onEdit: () => void;
  onConfirm: (data: any) => Promise<void>;
  isEditMode?: boolean;
}

const Preview = ({
  formData,
  // bookingResponse,
  selectedDate,
  selectedSlot,
  onEdit,
  onConfirm,
  isEditMode = false
}: PreviewProps) => {
  const [cancel, setCancel] = useState(false);
  const [remark, setRemark] = useState('');

  const handleCancelSubmit = () => {
    // Handle cancel submission with remark
    console.log('Cancellation remark:', remark);
    onConfirm(remark); // Or handle differently for cancel case
  };
 
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              Booking Confirmation Preview
            </h2>
            <p className="text-red-100 mt-1">
              Please review all details before final submission
            </p>
          </div>

          <div className="p-6 space-y-8">
            {/* Applicant Details */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Applicant Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Name of Applicant</p>
                  <p className="text-base font-medium">
                    {formData.nameOfApplicant}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp Number</p>
                  <p className="text-base font-medium">
                    {formData.whatsappNo}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Alternative Contact</p>
                  <p className="text-base font-medium">
                    {formData.altContactNo || 'Not provided'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-base font-medium">
                    {formData.email}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Postal Address</p>
                  <p className="text-base font-medium whitespace-pre-line">
                    {formData.postalAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Billing Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Billing Name</p>
                  <p className="text-base font-medium">
                    {formData.billingName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact Number</p>
                  <p className="text-base font-medium">
                    {formData.billingContactNo}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">GSTIN</p>
                  <p className="text-base font-medium">
                    {formData.GSTIN || 'Not provided'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-base font-medium">
                    {formData.billingEmail}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="text-base font-medium">
                    {formData.category}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Billing Address</p>
                  <p className="text-base font-medium whitespace-pre-line">
                    {formData.billingPostalAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Booking Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Booking Date</p>
                  <p className="text-base font-medium">
                    {selectedDate || 'Not selected'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time Slot</p>
                  <p className="text-base font-medium">
                    {selectedSlot || 'Not selected'}
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
          </div>

          <div className={`bg-gray-50 px-6 py-4 flex gap-4 ${isEditMode ? 'justify-end' : 'justify-between'}`}>
            {!isEditMode && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3"
                  id="sendEmail"
                />
                <label htmlFor="sendEmail">Send confirmation email</label>
              </div>
            )}
            <div className="flex gap-4">
              <button
                onClick={() => isEditMode ? onEdit() : setCancel(true)}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {isEditMode ? 'Edit Details' : 'Cancel Booking'}
              </button>
              <button
                onClick={()=>onConfirm(formData)}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                {isEditMode ? 'Confirm & Pay' : 'Confirm Booking'}
              </button>
            </div>
          </div>

          {cancel && (
            <div className='px-6 py-4 flex flex-col gap-4 bg-gray-50 border-t'>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reason for Cancellation</h3>
                <textarea
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  className='p-2 border border-gray-300 rounded-md w-full'
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