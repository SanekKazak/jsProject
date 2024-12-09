import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/Actions';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TableSortLabel, TablePagination, Paper, TextField, Checkbox
} from '@mui/material';

function TaskTable({ tasks }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('title');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState('');
  const [columns, setColumns] = useState({
    id: true,
    title: true,
    description: true
  });

  const dispatch = useDispatch();

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleColumnChange = (event) => {
    setColumns({ ...columns, [event.target.name]: event.target.checked });
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase()) ||
    task.description.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (orderBy === 'title' || orderBy === 'description') {
      return order === 'asc'
        ? a[orderBy].localeCompare(b[orderBy])
        : b[orderBy].localeCompare(a[orderBy]);
    }
    return order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
  });

  const paginatedTasks = sortedTasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <TextField
        label="Filter"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
        style={{ margin: '20px' }}
      />

      <div style={{ margin: '20px' }}>
        <Checkbox
          checked={columns.id}
          onChange={handleColumnChange}
          name="id"
        /> ID
        <Checkbox
          checked={columns.title}
          onChange={handleColumnChange}
          name="title"
        /> Title
        <Checkbox
          checked={columns.description}
          onChange={handleColumnChange}
          name="description"
        /> Description
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.id && (
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'id'}
                    direction={orderBy === 'id' ? order : 'asc'}
                    onClick={() => handleRequestSort('id')}
                  >
                    ID
                  </TableSortLabel>
                </TableCell>
              )}
              {columns.title && (
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'title'}
                    direction={orderBy === 'title' ? order : 'asc'}
                    onClick={() => handleRequestSort('title')}
                  >
                    Title
                  </TableSortLabel>
                </TableCell>
              )}
              {columns.description && (
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'description'}
                    direction={orderBy === 'description' ? order : 'asc'}
                    onClick={() => handleRequestSort('description')}
                  >
                    Description
                  </TableSortLabel>
                </TableCell>
              )}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTasks.map(task => (
              <TableRow key={task.id}>
                {columns.id && <TableCell>{task.id}</TableCell>}
                {columns.title && <TableCell>{task.title}</TableCell>}
                {columns.description && <TableCell>{task.description || 'No description'}</TableCell>}
                <TableCell>
                  <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <tfoot>
            <TableRow>
              <TableCell colSpan={3}>Total Tasks: {filteredTasks.length}</TableCell>
            </TableRow>
          </tfoot>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredTasks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Paper>
  );
}

export default TaskTable;