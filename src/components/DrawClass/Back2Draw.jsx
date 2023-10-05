import React from 'react';
import './DrawClass.css';

const DrawClass = ({ data }) => {
  const { name, attributes, methods, borderColor, headColor, textColor } = data;
  const headHeight = 40;
  const sectionHeight = 20;
  const svgWidth = 220;
  const svgHeight = headHeight + ((attributes.length + methods.length) + 2) * sectionHeight;

  return (
    <div className="class-diagram" style={{ width: svgWidth, height: svgHeight }}>
      <svg width={svgWidth} height={svgHeight}>
        {/* Rectángulo Main */}
        <rect className="class-main-rect" width={svgWidth} height={svgHeight} stroke={borderColor} />
        
        {/* Rectángulo del Encabezado */}
        <rect className="class-title-rect" width={svgWidth} height={headHeight} stroke={borderColor} />
        
        {/* Título */}
        <text className="class-title" x="19" y="25" fill={textColor}>{name}</text>
        
        {attributes.map((attr, index) => (
          <text key={index} className="class-attribute" x="20" y={headHeight + ((sectionHeight) * (index + 1))} fill={textColor}>{attr}</text>
        ))}
        
        <line className="class-divider" y1={headHeight + (sectionHeight * (attributes.length + 1)) - 5} y2={headHeight + (sectionHeight * (attributes.length + 1)) - 5} />
        
        {methods.map((method, index) => (
          <text key={index} className="class-method" x="20" y={headHeight + (sectionHeight * (attributes.length + 2)) + ((sectionHeight) * (index))} fill={textColor}>{method}</text>
        ))}
      </svg>
    </div>
  );
};

export default DrawClass;
