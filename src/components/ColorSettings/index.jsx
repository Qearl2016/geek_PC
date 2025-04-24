import React, { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const ColorSettings = ({ onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState({ r: 245, g: 245, b: 245, a: 1 });

  const handleColorChange = (newColor) => {
    setColor(newColor);
    const rgbaColor = `rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, ${newColor.a})`;
    onColorChange(rgbaColor);
  };

  return (
    <div className="color-settings">
      <button 
        className="settings-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
        }}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faPalette} />
      </button>
      
      {isOpen && (
        <div className="color-picker-container">
          <h3>选择背景颜色</h3>
          <RgbaColorPicker color={color} onChange={handleColorChange} />
          <div className="color-preview">
            当前颜色: rgba({color.r}, {color.g}, {color.b}, {color.a})
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSettings;
