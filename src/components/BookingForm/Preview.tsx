import React, { useState } from 'react';
import { Calendar, FileText, Film, Users, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  // Film Details
  filmTitle?: string;
  language?: string;
  duration?: string;
  soundFormat?: string;
  filmFormat?: string;
  
  // Production Details
  producerName?: string;
  productionHouse?: string;
  contactNumber?: string;
  email?: string;
  applicantAddress?: string;

  // Booking Details
  screeningDate?: string;
  screeningTime?: string;
  numberOfPeople?: string;

  // File uploads
  synopsis?: File;
  castCredits?: File;
  songlines?: File;
  poster?: File;
}

const Preview:React.FC =()=> {
  const [formData] = useState<FormData>({});

  const handleEdit = () => {
    // Handle edit action
    console.log('Edit clicked');
  };
const navigate=useNavigate()
  const handleConfirmSubmission = () => {
    navigate('/confirmation')
    console.log('Submission confirmed');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Preview Your Submission</h2>
            <p className="text-red-100 mt-1">Please review all details before final submission</p>
          </div>

          <div className="p-6 space-y-8">
            {/* Film Details Preview */}
            <div className="border-b pb-6">
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-900">Film Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Film Title</p>
                  <p className="text-base font-medium">{formData.filmTitle || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Language</p>
                  <p className="text-base font-medium">{formData.language || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-base font-medium">{formData.duration || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sound Format</p>
                  <p className="text-base font-medium">{formData.soundFormat || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Film Format</p>
                  <p className="text-base font-medium">{formData.filmFormat || 'Not provided'}</p>
                </div>
              </div>
            </div>

            {/* Production Details Preview */}
            <div className="border-b pb-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-900">Production Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Producer Name</p>
                  <p className="text-base font-medium">{formData.producerName || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Production House</p>
                  <p className="text-base font-medium">{formData.productionHouse || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact Number</p>
                  <p className="text-base font-medium">{formData.contactNumber || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-base font-medium">{formData.email || 'Not provided'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Complete Postal Address</p>
                  <p className="text-base font-medium">{formData.applicantAddress || 'Not provided'}</p>
                </div>
              </div>
            </div>

            {/* Booking Details Preview */}
            <div className="border-b pb-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-900">Booking Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Screening Date</p>
                  <p className="text-base font-medium">{formData.screeningDate || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Screening Time</p>
                  <p className="text-base font-medium">{formData.screeningTime || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Number of People</p>
                  <p className="text-base font-medium">{formData.numberOfPeople || 'Not provided'}</p>
                </div>
              </div>
            </div>

            {/* Uploaded Documents Preview */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-900">Uploaded Documents</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['synopsis', 'castCredits', 'songlines', 'poster'].map((doc) => (
                  <div key={doc} className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">{doc.charAt(0).toUpperCase() + doc.slice(1)}</p>
                      <p className="text-base font-medium">
                        {/* {formData[doc as keyof FormData]?.name || 'Not uploaded'} */}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 flex justify-end gap-4">
            <button
              onClick={handleEdit}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Edit Details
            </button>
            <button
              onClick={handleConfirmSubmission}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Confirm & Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;