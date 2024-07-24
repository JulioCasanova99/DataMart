import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login.js';
import SignUp from './components/signup.js';
import Dashboard from './components/Dashboard.js';
import ExcelUpload from './components/ExcelUpload';
import PowerBIVisualization from './components/PowerBIVisualization';
import GlobalStyle from './globalstyles';
import PrivateRoute from './components/privateroute'; // Importa PrivateRoute

function App() {
    return (
        <Router>
            <GlobalStyle />
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route 
                        path="/dashboard" 
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } 
                    />
                    <Route 
                        path="/upload" 
                        element={
                            <PrivateRoute>
                                <ExcelUpload />
                            </PrivateRoute>
                        } 
                    />
                    <Route 
                        path="/visualize" 
                        element={
                            <PrivateRoute>
                                <PowerBIVisualization />
                            </PrivateRoute>
                        } 
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

const ErrorPage = () => (
    <div style={{ color: 'white', textAlign: 'center', paddingTop: '20%' }}>
        <h1>404 - Page Not Found</h1>
        <a href="/login" style={{ color: '#1e90ff' }}>Go to Login</a>
    </div>
);

export default App;
