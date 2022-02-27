import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



function Table1() {

    const columns = [
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'firstName', headerName: 'First name of author', width: 200 },
    { field: 'lastName', headerName: 'Last name of author', width: 200 },
    { field: 'genre', headerName: 'Genre', width: 200 },
    {
        field: 'rating',
        headerName: 'Rating/10',
        type: 'number',
        width: 100,
    },
    { field: 'recommend', headerName: 'Recommended', width: 130 },
    ];

    const rows = [
    { id: 1, title: "L'Assommoir", firstName: 'Émile', lastName: 'Zola', genre: 'Roman naturaliste', rating: 1, recommend: 'no' },
    ];

    return (
        <div style={{ height: 650, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
        </div>
    );
}

function Table2() {

    const columns = [
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'firstName', headerName: 'First name of author', width: 200 },
    { field: 'lastName', headerName: 'Last name of author', width: 200 },
    { field: 'genre', headerName: 'Genre', width: 200 },
    { field: 'progress', headerName: 'Progress%', width: 130 },
    ];

    const rows = [
    { id: 1, title: "Dune", firstName: 'Frank', lastName: 'Herbert', genre: 'Science fiction', progress: '42' },
    ];

    return (
        <div style={{ height: 650, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
        </div>
    );
}

function Table3() {

    const columns = [
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'firstName', headerName: 'First name of author', width: 200 },
    { field: 'lastName', headerName: 'Last name of author', width: 200 },
    { field: 'genre', headerName: 'Genre', width: 200 },
    ];

    const rows = [
    { id: 1, title: "Origin", firstName: 'Dan', lastName: 'Brown', genre: 'Crime mystery thriller' },
    ];

    return (
        <div style={{ height: 650, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
        </div>
    );
}

export {Table1, Table2, Table3}