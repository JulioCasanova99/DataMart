import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #121212;
    color: #ffffff;
`;

const Heading = styled.h1`
    color: #1e90ff;
`;

const Link = styled.a`
    margin: 10px;
    color: #1e90ff;
    cursor: pointer;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #1e90ff;
    color: #ffffff;
    cursor: pointer;
    margin-top: 20px;
`;

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Container>
            <Heading>Dashboard</Heading>
            <Link href="/upload">Upload Data</Link>
            <Link href="/visualize">Visualize Data</Link>
            <Button onClick={handleLogout}>Log Out</Button>
        </Container>
    );
};

export default Dashboard;
