import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import welcome from './welcome-image.jpg';
const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner [a"> <img style = {{paddingTop: '5px'}} alt = 'logo' src = { welcome }></img></div>
            </Tilt>
        </div>
    );
}

export default Logo; 