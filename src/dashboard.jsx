import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import StorageInfo from './storageInfo';
import Screens from './screens';
import { useState } from 'react';

const data = [
    {
        "id": 1,
        "camScreenName": "cam1",
        "camAreaName": "front",
        "camFacing": "east",
        "camType": "fixed",
        "camDetails": "view",
        "camScreen": "screen"
    },
    {
        "id": 2,
        "camScreenName": "cam2",
        "camAreaName": "front",
        "camFacing": "east",
        "camType": "fixed",
        "camDetails": "view",
        "camScreen": "screen"
    },
    {
        "id": 3,
        "camScreenName": "cam3",
        "camAreaName": "front",
        "camFacing": "east",
        "camType": "fixed",
        "camDetails": "view",
        "camScreen": "screen"
    },
    {
        "id": 4,
        "camScreenName": "cam4",
        "camAreaName": "front",
        "camFacing": "east",
        "camType": "fixed",
        "camDetails": "view",
        "camScreen": "screen"
    },
    {
        "id": 5,
        "camScreenName": "cam5",
        "camAreaName": "front",
        "camFacing": "east",
        "camType": "fixed",
        "camDetails": "view",
        "camScreen": "screen"
    },
    {
        "id": 6,
        "camScreenName": "cam6",
        "camAreaName": "front",
        "camFacing": "east",
        "camType": "fixed",
        "camDetails": "view",
        "camScreen": "screen"
    },
    {
        "id": 7,
        "camScreenName": "cam7",
        "camAreaName": "front",
        "camFacing": "east",
        "camType": "fixed",
        "camDetails": "view",
        "camScreen": "screen"
    }
]

function List() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const storageInfo = (id) => {
        navigate(`/StorageInfo/${id}`)
    }

    const screenInfo = (id) => {
        navigate(`/Screens/${id}`)
    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    return (
        <div className="App">
             
            <div className="cam-list-title">
                <h4>Cam List :</h4>
            </div>           
            <div className="cam-list-table">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Cam Id</th>
                            <th>Cam Screen</th>
                            <th>Cam Area Name</th>
                            <th>Cam Facing</th>
                            <th>Cam Type</th>
                            <th>Cam Details</th>
                            <th>Cam Screen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val, key) => (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.camScreenName}</td>
                                <td>{val.camAreaName}</td>
                                <td>{val.camFacing}</td>
                                <td>{val.camType}</td>
                                <td onClick={() => storageInfo(val.id)}><a className="link blue">{val.camDetails}</a></td>
                                <td onClick={() => screenInfo(val.id)}><a className="link blue">{val.camScreen}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;
