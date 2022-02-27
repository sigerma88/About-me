import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import jsonData from './table3.json';

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
        { id: 2, title: "Great Expectations", firstName: 'Charles', lastName: 'Dickens', genre: 'Bildungsroman, novel', rating: 8, recommend: 'yes' },
    ];

    return (
        <div style={{ height: 650, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
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
            />
        </div>
    );
}

function Form(props) {

    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [genre, setGenre] = useState('');

    const changeTitle = (event) => {
        setTitle(event.target.value);
    };

    const changeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const changeLastName = (event) => {
        setLastName(event.target.value);
    };

    const changeGenre = (event) => {
        setGenre(event.target.value);
    };

    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            title,
            firstName,
            lastName,
            genre
        };
        props.func(val);
        clearState();
    };

    const clearState = () => {
        setTitle('');
        setFirstName('');
        setLastName('');
        setGenre('');
    };

    return (
        <div className= "table3InputGeneral">
            <label className="table3Input">Title</label>
            <input type="text" value={title} onChange={changeTitle} />
            <label className="table3Input">First name</label>
            <input type="text" value={firstName} onChange={changeFirstName} />
            <label className="table3Input">Last name</label>
            <input type="text" value={lastName} onChange={changeLastName} />
            <label className="table3Input">Genre</label>
            <input type="text" value={genre} onChange={changeGenre} />
            <button className="table3InputButton" onClick={transferValue}>Suggest</button>
        </div>
    );
}

function Table3() {
    const [bookData, setBookData] = useState(jsonData);

    const tableRows = bookData.map((info) => {
        return (
            <tr>
                <td className="table3Body">{info.title}</td>
                <td className="table3Body">{info.firstName}</td>
                <td className="table3Body">{info.lastName}</td>
                <td className="table3Body">{info.genre}</td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalBooks = bookData.length;
        data.id = totalBooks + 1;
        const updatedBookData = [...bookData];
        updatedBookData.push(data);
        setBookData(updatedBookData);
    };

    return (
        <div style={{ height: 650, width: '100%' }}>
            <table className="table3">
                <thead>
                    <tr>
                        <th className = "table3Head">Title</th>
                        <th className = "table3Head">First name</th>
                        <th className = "table3Head">Last name</th>
                        <th className = "table3Head">Genre</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
            <Form func={addRows} />
        </div>
    );
}

export { Table1, Table2, Table3 }