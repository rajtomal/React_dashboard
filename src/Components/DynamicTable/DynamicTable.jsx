import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination
} from '@mui/material';
import './DynamicTable.scss';

const DynamicTable = ({ columns, data, renderRowActions }) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState(columns[0].field); // Default to first column for sorting
    const [page, setPage] = useState(0); // Pagination state
    const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page state

    const handleRequestSort = (property) => {
        const isAscending = orderBy === property && order === 'asc';
        setOrder(isAscending ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const sortData = (array, comparator) => {
        const stabilizedArray = array.map((el, index) => [el, index]);
        stabilizedArray.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedArray.map((el) => el[0]);
    };

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
            : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
    };

    const paginatedData = (array) => {
        return array.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    };

    return (
        <div>
            {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}> */}
            <TableContainer style={{ width: '100%', overflowX: 'auto' }}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align={column.align || 'left'} >
                                    <TableSortLabel
                                        active={orderBy === column.field}
                                        direction={orderBy === column.field ? order : 'asc'}
                                        onClick={() => handleRequestSort(column.field)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData(sortData(data, getComparator(order, orderBy))).map((row, index) => (
                            <TableRow key={row.id || `row-${index}`}>
                                {columns.map((column) => (
                                    <TableCell key={column.field} align={column.align || 'left'} style={{ minWidth: column.minWidth }}>
                                        {row[column.field]}
                                    </TableCell>
                                ))}
                                <TableCell width={160} align="center">
                                    {renderRowActions(row)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={data.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 25, 50]}
            />
            {/* </Paper> */}
        </div>
    );
};

export default DynamicTable;
