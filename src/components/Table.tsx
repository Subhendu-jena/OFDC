import { useState, useEffect } from 'react';
import { Mail, Phone, Star, User, ScanEye } from 'lucide-react';
import { TableProps } from '../types/global';
import { STRAPI_API_BASE_URL } from '../config/httpClient';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useFontSize } from './home/FontSizeContext';
import Preview from './BookingForm/Preview';
import { adminApprove, adminReject, refund, userCancel } from '../config/controller';

const TableComponent = ({
  Heading,
  columns,
  data,
  search,
  maxline,
}: TableProps & { Heading: string }) => {
  const itemsPerPage = maxline ?? 10;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const { fontSize } = useFontSize();
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
  const role = sessionStorage.getItem('role');
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData(data);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filtered = data.filter((item: any) =>
        Object.values(item).some((value) =>
          value?.toString().toLowerCase().includes(lowercasedFilter)
        )
      );
      setFilteredData(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, data]);
  const handleConfirm = () => {
    setShowPreview(false);
    adminApprove({
      token: sessionStorage.getItem('token'),
      data: previewData,
      id: previewData?._id,
    });
  };
  const handlereject = async () => {
    setShowPreview(false);
    try {
      const response = await adminReject({
        token: sessionStorage.getItem('token'),
        id: previewData?._id,
      });
      if (response.success) {
       const response = await userCancel({
          token: sessionStorage.getItem('token'),
          id: previewData?._id,
        });
        if (response.success) {
          refund({
            token: sessionStorage.getItem('token'),
            id: previewData?._id,
          });
        }
      }
    } catch (err) {}
  };

  if (showPreview && previewData) {
    return (
      <Preview
        formData={previewData}
        onConfirm={() => {
          // handle confirm
          // setShowPreview(false);
          // setPreviewData(null);
          handleConfirm();
        }}
        onEdit={() => {
          // handle edit
          // setShowPreview(false);
          // setPreviewData(null);
          handlereject();
        }}
        isEditMode={false}
      />
    );
  }
  console.log(data, 'data on table');
  return (
    <div className=" overflow-hidden min-h-screen p-4">
      <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center rounded-2xl">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Star size={20} className="mr-2" />
          {Heading}
        </h2>
      </div>
      {search === true && (
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-90 px-4 py-2 m-4  border rounded-lg"
        />
      )}
      <table className="w-full border-collapse ">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left   font-medium text-gray-500 tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className={` rounded-2xl  overflow-hidden`}
          style={{ transition: 'all 0.5s ease' }}
        >
          {currentData.length > 0 ? (
            currentData.map((official: any, index: number) => (
              <tr key={official.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap   text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {official.bookingType ? null : official.isVacant ? (
                      <div className="h-12 w-12 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center">
                          <User size={24} className="text-gray-400" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative group inline-block">
                        <img
                          src={
                            official?.image?.url
                              ? STRAPI_API_BASE_URL + official?.image?.url
                              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                          }
                          alt={official.name}
                          className="h-12 w-12 rounded-full object-cover cursor-pointer"
                          onClick={() =>
                            setModalImage(
                              STRAPI_API_BASE_URL + official?.image?.url
                            )
                          }
                        />
                        {modalImage && (
                          <div
                            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                            onClick={() => setModalImage(null)} // click outside closes
                          >
                            <img
                              src={modalImage}
                              alt="Enlarged"
                              className="max-w-full max-h-[90%] rounded shadow-lg"
                              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
                            />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="ml-4">
                      <div className="  font-medium text-gray-900">
                        {official.name}
                      </div>
                      <div className="  text-red-500 font-medium">
                        {official.designation}
                      </div>
                    </div>
                  </div>

                  {official.bookingType && (
                    <div className="  font-medium text-gray-900">
                      {official.bookingType}
                    </div>
                  )}
                </td>
                {official.applicantName && (
                  <td className="px-6 py-4   text-gray-900">
                    {official.applicantName}
                  </td>
                )}
                {official.talentType && (
                  <td className="px-6 py-4   text-gray-900">
                    {official.talentType}
                  </td>
                )}
                {official.bookingDate && (
                  <td className="px-6 py-4   text-gray-900">
                    {official.bookingDate}
                  </td>
                )}
                {official.screeningDate && (
                  <td className="px-6 py-4   text-gray-900">
                    {official.screeningDate}
                  </td>
                )}
                {official.paymentMode && (
                  <td className="px-6 py-4   text-gray-900">
                    {official.paymentMode}
                  </td>
                )}
                {official.paidOn && (
                  <td className="px-6 py-4   text-gray-900">
                    {official.paidOn}
                  </td>
                )}
                {official?.status && (
                  <td className="px-6 py-4   text-gray-900">
                    <div
                      className={`px-2 py-1   rounded-full w-max inline-block ${
                        official.status === 'CONFIRMED'
                          ? 'bg-green-100 text-green-800'
                          : official.status === 'PENDING'
                            ? 'bg-yellow-100 text-yellow-800'
                            : official.status === 'CANCELLED'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {official.status}
                    </div>
                  </td>
                )}
                {official?.approval && (
                  <td className="px-6 py-4   text-gray-900">
                    <div
                      className={`px-2 py-1   rounded-full w-max inline-block ${
                        official.approval === 'APPROVED'
                          ? 'bg-green-100 text-green-800'
                          : official.approval === 'PENDING'
                            ? 'bg-yellow-100 text-yellow-800'
                            : official.approval === 'REJECTED'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {official.approval}
                    </div>
                  </td>
                )}
                {official?.transcationStatus && (
                  <td className="px-9 py-4   text-gray-900 ">
                    <div
                      className={`px-2 py-1   rounded-full w-max inline-block ${
                        official.transcationStatus === 'Success'
                          ? 'bg-green-100 text-green-800'
                          : official.transcationStatus === 'Failed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {official.transcationStatus}
                    </div>
                  </td>
                )}

                {/* {official.view && ( */}
             {role=== 'ADMIN' &&   <td className="px-6 py-4   text-gray-900">
                  <button
                    className="border border-red-500 p-2 bg-red-600 text-white rounded-2xl   cursor-pointer"
                    onClick={() => {
                      setShowPreview(true);
                      setPreviewData(official);
                    }}
                  >
                    <ScanEye />
                  </button>
                </td>}

                {/* )} */}
                {(official.department || official.from) && (
                  <td
                    className="px-6 py-4"
                    style={{ fontSize: `${fontSize - 4}px` }}
                  >
                    <span className="px-2 py-1  font-semibold rounded-full bg-red-100 text-red-800">
                      {official.department || official.from}
                    </span>
                  </td>
                )}
                {official.to && (
                  <td
                    className="px-6 py-4"
                    style={{ fontSize: `${fontSize - 4}px` }}
                  >
                    <span className="px-2 py-1   font-semibold rounded-full bg-red-100 text-red-800">
                      {official.to}
                    </span>
                  </td>
                )}

                {official.contact && (
                  <td className="px-6 py-4   text-gray-900">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-1 text-gray-500" />
                      {official.contact}
                    </div>
                    {/* {official.email && (
                      <div className="  text-gray-500 flex items-center">
                        <Mail size={14} className="mr-1 text-gray-500" />
                        <a
                          href={`mailto:${official.email}`}
                          className="hover:text-red-500"
                        >
                          {official.email}
                        </a>
                      </div>
                    )} */}
                  </td>
                )}
                {official.email && (
                  <td className="px-6 py-4">
                    <div className=" text-gray-500 flex items-center">
                      <Mail size={14} className="mr-1 text-gray-500" />
                      <a
                        href={`mailto:${official.email}`}
                        className="hover:text-red-500"
                      >
                        {official.email === null ? null : official.email}
                      </a>
                    </div>
                  </td>
                )}
                {official.action && (
                  <td className="px-6 py-4 flex items-center gap-4 ">
                    {/* <label className=" cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isOn}
                          onChange={() => setIsOn(!isOn)}
                        />
                        <div
                          className={`w-12 h-6 bg-gray-300 rounded-full transition ${
                            isOn ? 'bg-red-300' : 'bg-gray-300'
                          }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition ${
                            isOn ? 'translate-x-6' : ''
                          }`}
                        ></div>
                      </div>
                    </label> */}
                    {/* <button className='border border-red-500 p-2 bg-red-500 text-white rounded-2xl   cursor-pointer' onClick={()=> navigate(paths.preview)}>Approve</button>
                  <button className='border p-2 rounded-2xl   cursor-pointer' >Decline</button> */}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                No results found for "{searchTerm}"
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div>
          {' '}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              className="px-1 py-1 rounded-4xl bg-red-300 text-red-800  disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </button>

            <span className="font-medium">
              {currentPage} of {totalPages}
            </span>

            <button
              className="px-1 py-1  rounded-4xl bg-red-300 text-red-800  disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
