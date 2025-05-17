import { useState, useEffect } from 'react';
import {  Star } from 'lucide-react';
import { TableProps } from '../types/global';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';


const PaymentTable = ({
  Heading,
//   columns,
  data,
  search,
  maxline,
}: TableProps & { Heading: string }) => {
  const [itemsPerPage, setItemsPerPage] = useState(maxline ?? 10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);
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
  return (
    <div className=" overflow-hidden min-h-screen p-4">
      <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center rounded-2xl">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Star size={20} className="mr-2" />
          {Heading}
        </h2>
      </div>
      {search === true && (
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-90 px-4 py-2 m-4   border rounded-lg"
          />
        </div>
      )}
      <table className="w-full border-collapse ">
         <div
          className={`${
            filteredData.length > 10 ? 'max-h-[900px]' : ''
          } overflow-y-auto w-full`}
        >
        {/* <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left  font-2xl text-black tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead> */}
       
          <table className="w-full border-collapse">
            <tbody
              className={` rounded-2xl `}
              style={{ transition: 'all 0.5s ease' }}
            >
              {currentData.length > 0 ? (
                currentData.map((official: any, index: number) => (
                  <tr key={official.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap   text-gray-900">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-6 py-4">
                      
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

                    
                  

                   
                 
                 
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No results found for "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </table>
      {/* {totalPages > 1 && (
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
      )} */}
      <div className='fixed'>{totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          {/* Rows per page selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="rowsPerPage" className="text-gray-600">
              Rows per page:
            </label>
            <select
              id="rowsPerPage"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1); // reset to first page when changing page size
              }}
              className="border rounded px-2 py-1"
            >
              {[5, 10, 20, 50, 100].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Page navigation buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              className="px-1 py-1 rounded-4xl bg-red-300 text-red-800 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </button>

            <span className="font-medium">
              {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
            </span>

            <button
              className="px-1 py-1 rounded-4xl bg-red-300 text-red-800 disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(filteredData.length / itemsPerPage)
                  )
                )
              }
              disabled={
                currentPage === Math.ceil(filteredData.length / itemsPerPage)
              }
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}</div>
    </div>
  );
};

export default PaymentTable;
