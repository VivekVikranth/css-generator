import React from 'react';

interface ColorPickerProps {
    label: string;
    color: string;
    setColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, setColor }) => {
    return(
        <div>
            <label>{label}</label>
            <input 
                type='color'
                value={color}
                onChange={(e) => setColor(e.target.value)} />
        </div>        
    );
};

export default ColorPicker;