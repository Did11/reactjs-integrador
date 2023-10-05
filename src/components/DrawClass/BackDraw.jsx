import React from 'react';

const DrawClass = ({ data }) => {
    return (
        <svg width="200" height="174" xmlns="http://www.w3.org/2000/svg">
            {/* Fondo blanco detrás de todos los elementos */}
            <rect width="200" height="174" fill="white" />

            {/* Rectángulo Exterior */}
            <rect width="200" height="174" fill="none" stroke="red" strokeWidth="2" />

            {/* Fondo rosado para la sección del título con bordes rojos */}
            <rect width="198" height="56" x="1" y="1" fill="#FFC0CB" stroke="red" strokeWidth="2" />

            {/* Líneas divisorias */}
            <line x1="1" y1="58" x2="199" y2="58" stroke="red" strokeWidth="2" />
            <line x1="1" y1="116" x2="199" y2="116" stroke="black" strokeWidth="2" />

            {/* Título */}
            <text x="100" y="40" fontSize="16" fontWeight="bold" fill="red" textAnchor="middle">{data.name}</text>

            {/* Atributos con mayor espacio entre ellos */}
            {data.attributes.map((attr, index) => (
                <text key={index} x="10" y={70 + index * 25} fontSize="14" fill="red">{attr}</text>
            ))}

            {/* Método centrado en su recuadro */}
            <text x="10" y="145" fontSize="14" fill="red">{data.methods[0]}</text>
        </svg>
    );
};

export default DrawClass;
