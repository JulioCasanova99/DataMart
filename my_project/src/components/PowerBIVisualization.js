import React from 'react';
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

const Heading = styled.h1`
    color: #1e90ff;
`;

const PowerBIVisualization = () => {
    // Integrar aquí la lógica para la visualización con Power BI
    return (
        <Container>
            <Heading>Power BI Visualization</Heading>
        </Container>
    );
};

export default PowerBIVisualization;
