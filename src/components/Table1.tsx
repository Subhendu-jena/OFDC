import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Column {
  header: string;
  accessor: string;
  render?: (row: any) => any;
  size?: number;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  isLoading?: boolean;
  onRowClick?: (row: any) => void;
  showPagination?: boolean;
}

const Table1: React.FC<TableProps> = ({
  columns,
  data,
  isLoading = false,
  onRowClick,
  showPagination = true,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
const [prevIndex,setPrevIndex] = useState(0);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const renderLoadingRows = () =>
    Array.from({ length: rowsPerPage }).map((_, index) => (
      <tr
        key={`loading-${index}`}
        className="bg-white border border-[#AAAAAA] border-x-0"
      >
        {columns.map((_, colIndex) => (
          <td key={colIndex} className="p-[16px] text-center">
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
          </td>
        ))}
      </tr>
    ));

  return (
    <>
      {' '}
      <div className="w-full text-[16px] overflow-x-auto max-h-[900px] min-h-[600px] relative overflow-y-auto text-[#0E1E2B]">
        <table className="w-full border-collapse relative">
          <thead className="sticky top-0 z-10">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="py-6 px-6 font-semibold text-[#0E1E2B] bg-[#F8FAFF]"
                  style={{ width: column.size ? `${column.size}px` : '100px' }}
                >
                  <div
                    className={`relative ml-1 ${column.header === 'User Information' ? 'text-start' : 'text-left'}`}
                  >
                    <span>{column.header}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              renderLoadingRows()
            ) : paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white  hover:bg-gray-100"
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-8 py-4 text-left">
                      {column.render
                        ? column.render(row)
                        : column.accessor === 'slno'
                          ? prevIndex + rowIndex + 1
                          : row[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-8 text-center text-gray-500"
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showPagination && (
        <div className="flex items-center justify-end pb-4 mt-4 space-x-2">
          <div>Rows per page</div>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // reset page when rows per page changes
            }}
            className="p-1 border rounded"
            disabled={isLoading}
          >
            {[5, 10, 25, 50].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
                setPrevIndex((prev)=>prev-rowsPerPage)
                setCurrentPage((prev) => prev - 1)}}
            disabled={currentPage === 1 || isLoading}
            className="p-2 border rounded disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center justify-center w-10 h-10 p-2 border rounded">
            {currentPage}
          </div>

          <button
            onClick={() => {setCurrentPage((prev) => prev + 1)
            setPrevIndex((prev)=>prev+rowsPerPage)
            }}
            disabled={currentPage >= totalPages || isLoading}
            className="p-2 border rounded disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default Table1;
