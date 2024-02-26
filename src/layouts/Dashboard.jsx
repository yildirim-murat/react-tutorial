import React, { useState } from 'react';
import Table from "../components/table";
import axios from 'axios';

const Dashboard = () => {
    const [data, setResponseData] = useState(-1);
    const [userName, setUserName] = useState('');

    const handleButtonClick = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users/count");
            console.log('İstek başarıyla gönderildi', response.data);
            setResponseData(response.data);
        } catch (error) {
            console.error('İstek gönderilirken bir hata oluştu', error);
        }
    };

    const handleQuery = async () => {
        try {
            const data = { name: userName };
            const headers = {
                'Content-Type': 'application/json'
            };
            const response = await axios.post('http://localhost:8080/users', data, { headers });
            console.log('İstek başarıyla gönderildi', response.data);
            setResponseData(response.data);
        } catch (error) {
            console.error('İstek gönderilirken bir hata oluştu', error);
        }
    };

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };

    return (
        <>
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Adı:</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Kullanıcı Adı"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="inputField"
                        value={userName}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" className="btn btn-success" onClick={handleButtonClick}>Sorgula</button>
                <span className="input-group-text">Döndürülen Değer: {data}</span>
                <button type="button" className="btn btn-danger" onClick={handleQuery}>Kaydet</button>
            </div>
            <div>
                <Table value={data}/>
            </div>
        </>
    )
};

export default Dashboard;
