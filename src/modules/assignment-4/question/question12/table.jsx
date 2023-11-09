import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';

const sampleData = [
    { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com' },
    { id: 2, name: 'Aditi Gupta', email: 'aditi@example.com' },
    { id: 3, name: 'Vikram Singh', email: 'vikram@example.com' },
    { id: 4, name: 'Anjali Verma', email: 'anjali@example.com' },
    { id: 5, name: 'Sachin Patel', email: 'sachin@example.com' },
    { id: 6, name: 'Pooja Yadav', email: 'pooja@example.com' },
    { id: 7, name: 'Rahul Khanna', email: 'rahul@example.com' },
    { id: 8, name: 'Sneha Kumar', email: 'sneha@example.com' },
    { id: 9, name: 'Neha Bhatia', email: 'neha@example.com' },
    { id: 10, name: 'Manish Agarwal', email: 'manish@example.com' },
    { id: 11, name: 'Amit Dubey', email: 'amit@example.com' },
    { id: 12, name: 'Aman Singh', email: 'aman@example.com' },
    { id: 13, name: 'Ankit Dubey', email: 'ankit@example.com' },
  ];
  
  

const rowsPerPageOptions = [5, 10, 25];

const DataTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortedData = stableSort(sampleData, getComparator(order, orderBy));
  const dataToShow = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Button onClick={() => handleRequestSort('id')}>ID</Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => handleRequestSort('name')}>Name</Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => handleRequestSort('email')}>Email</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToShow.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={sampleData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default DataTable;
