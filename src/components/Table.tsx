import { useState, useEffect } from 'react';
import { Mail, Phone, Star, User,ScanEye  } from 'lucide-react';
import { Official, TableProps } from '../types/global';
import { paths } from '../routes/Path';
import {  useNavigate } from 'react-router-dom';

const TableComponent = ({
  Heading,
  columns,
  data,
  search,
  maxline,
}: TableProps & { Heading: string }) => {
  const itemsPerPage = maxline ?? 10;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Official[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData(data);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filtered = data.filter((item) =>
        Object.values(item).some((value) =>
          value?.toString().toLowerCase().includes(lowercasedFilter)
        )
      );
      setFilteredData(filtered);
    }
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, data]);

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
          <tr >
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider"
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
            currentData.map((official: Official, index) => (
              <tr key={official.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                      <img
                        src={
                          official.imageUrl ||
                          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                        }
                        alt={official.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {official.name}
                      </div>
                      <div className="text-sm text-red-500 font-medium">
                        {official.designation}
                      </div>
                    </div>
                  </div>

                  {official.bookingType && (
                    <div className="text-sm font-medium text-gray-900">
                      {official.bookingType}
                    </div>
                  )}
                </td>
                {official.applicantName && (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {official.applicantName}
                  </td>
                )}
                {official.bookingDate && (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {official.bookingDate}
                  </td>
                )}
                {official.screeningDate && (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {official.screeningDate}
                  </td>
                )}
                {official.paymentMode && (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {official.paymentMode}
                  </td>
                )}
                {official.paidOn && (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {official.paidOn}
                  </td>
                )}
                {official?.status && (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div
                      className={`px-2 py-1 text-xs rounded-full w-max inline-block ${
                        official.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : official.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {official.status}
                    </div>
                  </td>
                )}
                {official?.transcationStatus && (
                  <td className="px-9 py-4 text-sm text-gray-900 ">
                    <div
                      className={`px-2 py-1 text-xs rounded-full w-max inline-block ${
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

                {official.view && (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <button  className="border border-red-500 p-2 bg-red-600 text-white rounded-2xl text-sm cursor-pointer" onClick={()=> navigate(paths.preview)}>
                    <ScanEye />
                    </button>
                  </td>
                )}
                {(official.department || official.from) && (
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      {official.department || official.from}
                    </span>
                  </td>
                )}
                {official.to && (
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      {official.to}
                    </span>
                  </td>
                )}
                {official.contactNo && (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-1 text-gray-500" />
                      {official.contactNo}
                    </div>
                    {official.email && (
                      <div className="text-sm text-gray-500 flex items-center">
                        <Mail size={14} className="mr-1 text-gray-500" />
                        <a
                          href={`mailto:${official.email}`}
                          className="hover:text-red-500"
                        >
                          {official.email}
                        </a>
                      </div>
                    )}
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
                  {/* <button className='border border-red-500 p-2 bg-red-500 text-white rounded-2xl text-sm cursor-pointer' onClick={()=> navigate(paths.preview)}>Approve</button>
                  <button className='border p-2 rounded-2xl text-sm cursor-pointer' >Decline</button> */}
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
              className="px-3 py-1 bg-red-300 text-red-800 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span className="font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="px-3 py-1 bg-red-300 text-red-800 rounded disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
