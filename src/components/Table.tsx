import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

type Order = 'asc' | 'desc';

const TableComponent = ({ columns, data }: any) => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    // Filter data based on search term
    if (searchTerm.trim() === '') {
      setFilteredData(data);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filtered = data.filter((item: any) => {
        return Object.keys(item).some((key) => {
          const value = item[key];
          return (
            value !== null &&
            value !== undefined &&
            value.toString().toLowerCase().includes(lowercasedFilter)
          );
        });
      });
      setFilteredData(filtered);
    }
    setPage(0); // Reset to first page when search changes
  }, [searchTerm, data]);

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Sort function
  const descendingComparator = (a: any, b: any, orderByProperty: string) => {
    if (b[orderByProperty] < a[orderByProperty]) {
      return -1;
    }
    if (b[orderByProperty] > a[orderByProperty]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order: Order, orderByProperty: string) => {
    return order === 'desc'
      ? (a: any, b: any) => descendingComparator(a, b, orderByProperty)
      : (a: any, b: any) => -descendingComparator(a, b, orderByProperty);
  };

  const sortedData = orderBy
    ? [...filteredData].sort(getComparator(order, orderBy))
    : filteredData;

  // Pagination
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ padding: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column: any, index: number) => (
                <TableCell
                  key={index}
                  align={column.align || 'center'}
                  sortDirection={orderBy === column.field ? order : false}
                  sx={{
                    backgroundColor: '#F47216',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === column.field}
                    direction={orderBy === column.field ? order : 'asc'}
                    onClick={() => handleRequestSort(column.field)}
                    sx={{
                      '&.MuiTableSortLabel-root': {
                        color: 'white !important',
                      },
                      '&.MuiTableSortLabel-root:hover': {
                        color: 'white !important',
                      },
                      '&.MuiTableSortLabel-root.Mui-active': {
                        color: 'white !important',
                      },
                      '& .MuiTableSortLabel-icon': {
                        color: 'white !important',
                      },
                    }}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row: any, rowIndex: number) => (
              <TableRow key={rowIndex}>
                {columns.map((column: any, colIndex: number) => (
                  <TableCell key={colIndex} align={column.align || 'center'}>
                    {row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;
