// import React, { useState, useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import TablePagination from '@mui/material/TablePagination';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
// import Box from '@mui/material/Box';

// type Order = 'asc' | 'desc';

// const TableComponent = ({ columns, data }: any) => {
//   const [order, setOrder] = useState<Order>('asc');
//   const [orderBy, setOrderBy] = useState<string>('');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState<any[]>([]);

//   useEffect(() => {
//     // Filter data based on search term
//     if (searchTerm.trim() === '') {
//       setFilteredData(data);
//     } else {
//       const lowercasedFilter = searchTerm.toLowerCase();
//       const filtered = data.filter((item: any) => {
//         return Object.keys(item).some((key) => {
//           const value = item[key];
//           return (
//             value !== null &&
//             value !== undefined &&
//             value.toString().toLowerCase().includes(lowercasedFilter)
//           );
//         });
//       });
//       setFilteredData(filtered);
//     }
//     setPage(0); // Reset to first page when search changes
//   }, [searchTerm, data]);

//   const handleRequestSort = (property: string) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleChangePage = (_event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   // Sort function
//   const descendingComparator = (a: any, b: any, orderByProperty: string) => {
//     if (b[orderByProperty] < a[orderByProperty]) {
//       return -1;
//     }
//     if (b[orderByProperty] > a[orderByProperty]) {
//       return 1;
//     }
//     return 0;
//   };

//   const getComparator = (order: Order, orderByProperty: string) => {
//     return order === 'desc'
//       ? (a: any, b: any) => descendingComparator(a, b, orderByProperty)
//       : (a: any, b: any) => -descendingComparator(a, b, orderByProperty);
//   };

//   const sortedData = orderBy
//     ? [...filteredData].sort(getComparator(order, orderBy))
//     : filteredData;

//   // Pagination
//   const paginatedData = sortedData.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <Box sx={{ padding: 2 }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           size="small"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>

//       <TableContainer sx={{ maxHeight: 400 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column: any, index: number) => (
//                 <TableCell
//                   key={index}
//                   align={column.align || 'center'}
//                   sortDirection={orderBy === column.field ? order : false}
//                   sx={{
//                     backgroundColor: '#F47216',
//                     color: 'white',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   <TableSortLabel
//                     active={orderBy === column.field}
//                     direction={orderBy === column.field ? order : 'asc'}
//                     onClick={() => handleRequestSort(column.field)}
//                     sx={{
//                       '&.MuiTableSortLabel-root': {
//                         color: 'white !important',
//                       },
//                       '&.MuiTableSortLabel-root:hover': {
//                         color: 'white !important',
//                       },
//                       '&.MuiTableSortLabel-root.Mui-active': {
//                         color: 'white !important',
//                       },
//                       '& .MuiTableSortLabel-icon': {
//                         color: 'white !important',
//                       },
//                     }}
//                   >
//                     {column.label}
//                   </TableSortLabel>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedData.map((row: any, rowIndex: number) => (
//               <TableRow key={rowIndex}>
//                 {columns.map((column: any, colIndex: number) => (
//                   <TableCell key={colIndex} align={column.align || 'center'}>
//                     {row[column.field]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={filteredData.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default TableComponent;






import  { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Star, User } from 'lucide-react';
export interface Official {
  slNo?: number;
  id?: string;
  isVacant?: boolean;
  name?: string;
  designation?: string;
  department?: string;
  contactNo?: string;
  email?: string;
  imageUrl?: string;
  status?:string;
  from?:string;
  to?:string;
}
interface Column {
  label: string;
  field: string;
}

interface TableProps {
  columns: Column[];
  data: Official[];
}

const TableComponent = ({ columns, data }:TableProps) => {
  const [searchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Official[]>([]);
  const [selectedOfficial, setSelectedOfficial] = useState<Official>();

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData(data);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filtered = data.filter((item) => {
        return Object.values(item).some((value) =>
          value?.toString().toLowerCase().includes(lowercasedFilter)
        );
      });
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden m-4">
      <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Star size={20} className="mr-2" />
              Official Directory
            </h2>
          </div>
      {/* <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-lg"
      /> */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
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
        <tbody className="divide-y divide-gray-200">
          {filteredData.length > 0 ? (
            filteredData.map((official:Official, index) => (
              <tr key={official.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                      {official.isVacant ? (
                        <div className="h-full w-full flex items-center justify-center">
                          <User size={24} className="text-gray-400" />
                        </div>
                      ) : (
                        <img src={official.imageUrl} alt={official.name} className="h-full w-full object-cover" />
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{official.name}</div>
                      <div className="text-sm text-red-500 font-medium">{official.designation}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    {official.department}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center">
                    <Phone size={14} className="mr-1 text-gray-500" />
                    {official.contactNo}
                  </div>
                  {official.email && (
                    <div className="text-sm text-gray-500 flex items-center">
                      <Mail size={14} className="mr-1 text-gray-500" />
                      <a href={`mailto:${official.email}`} className="hover:text-red-500">
                        {official.email}
                      </a>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => setSelectedOfficial(official)}
                    className={`px-3 py-1 rounded-full flex items-center transition-colors ${
                      selectedOfficial?.id === official.id
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-500'
                    }`}
                  >
                    Details
                    <ChevronDown
                      size={14}
                      className={`ml-1 transform transition-transform ${
                        selectedOfficial?.id === official.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </td>
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
    </div>
  );
};

export default TableComponent;
