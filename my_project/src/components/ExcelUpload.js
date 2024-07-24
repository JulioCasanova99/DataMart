import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #121212;
    color: #ffffff;
`;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #2e2e2e;
    color: #ffffff;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #1e90ff;
    color: #ffffff;
    cursor: pointer;
`;

const ExcelUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:3000/data/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        if (data.message === 'File uploaded and data saved') {
            alert('File uploaded successfully');
        } else {
            alert('File upload failed');
        }
    };

    return (
        <Container>
            <Input type="file" onChange={handleFileChange} />
            <Button onClick={handleUpload}>Upload</Button>
        </Container>
    );
};

export default ExcelUpload;
