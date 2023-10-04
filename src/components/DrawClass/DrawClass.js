// DrawClass.js

import React from 'react';

const DrawClass = ({ data }) => {
    return (
        <svg width="200" height="200">
            {/* Rectángulo del encabezado con el nombre de la clase */}
            <rect x="0" y="0" width="200" height="50" fill={data.headColor} stroke={data.borderColor} />
            <text x="10" y="30" fill={data.textColor}>{data.name}</text>

            {/* Atributos de la clase */}
            {data.attributes.map((attr, index) => (
                <text key={index} x="10" y={60 + index * 20} fill={data.textColor}>{attr}</text>
            ))}

            {/* Métodos de la clase */}
            {data.methods.map((method, index) => (
                <text key={index} x="10" y={60 + data.attributes.length * 20 + index * 20} fill={data.textColor}>{method}</text>
            ))}
        </svg>
    );
}

export default DrawClass;
