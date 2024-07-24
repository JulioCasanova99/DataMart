import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    background-color: #1e1e1e;
    border-radius: 10px;
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

const StyledLink = styled(Link)`
    color: #1e90ff;
    margin: 10px 0;
    cursor: pointer;
    text-decoration: none;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            navigate('/dashboard'); // Redirect to Dashboard
        } else {
            alert('Login failed');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button type="submit">Login</Button>
                <StyledLink to="#">Forgot Password?</StyledLink>
                <StyledLink to="/signup">Sign Up</StyledLink>
            </Form>
        </Container>
    );
};

export default Login;
