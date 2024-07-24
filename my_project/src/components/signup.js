import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                alert('User registered successfully');
                navigate('/login'); // Redirect to Login
            } else {
                alert('Registration failed: ' + data.error);
            }
        } catch (error) {
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="First Name" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
                <Input 
                    type="text" 
                    placeholder="Last Name" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
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
                <Input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <Button type="submit">Sign Up</Button>
                <StyledLink to="/login">Already have an account? Login</StyledLink>
            </Form>
        </Container>
    );
};

export default SignUp;
