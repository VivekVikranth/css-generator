import React, { useState, useEffect } from 'react';
import ColorPicker from './components/ColorPicker';
import generateArrowStyles from './helpers/helper';
import CSSArrowGenerator from './components/CSSArrowGenerator';
// import BorderRadius from './components/BorderRadius';
// import FontPicker from './components/FontPicker';
import CSSOutput from './components/CSSOutput';

const App: React.FC = () => {
  const [backgroundColor, setbackgroundColor] = useState<string>('#ffffff');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [borderRadius, setBorderRadius] = useState<number>(10);
  const [fontSize, setFontSize] = useState<number>(16);

  // Arrow State
  const [arrowDirection, setArrowDirection] = useState<string>('top');
  const [arrowSize, setArrowSize] = useState<number>(10);
  const [arrowColor, setArrowColor] = useState<string>('#000000');
  const [arrowStyles, setArrowStyles] = useState<string>('');

  useEffect(() => {
    const styles = generateArrowStyles(arrowDirection, arrowSize, arrowColor);
    setArrowStyles(styles);
  }, [arrowDirection, arrowSize, arrowColor]);

  return (
    <div className="app">
      <h1>CSS Generator</h1>
      <div className="controls">
        <ColorPicker
          label="Background Color"
          color={backgroundColor}
          setColor={setbackgroundColor}
        />
        <ColorPicker
          label="Text Color"
          color={textColor}
          setColor={setTextColor}
        />
      </div>
      <div className="preview" style={{ backgroundColor, color: textColor }}>
        <p>This is a live preview!</p>
      </div>
      <CSSOutput
        backgroundColor={backgroundColor}
        textColor={textColor}
        arrowStyles={arrowStyles}
      />

      <CSSArrowGenerator
        arrowDirection={arrowDirection}
        arrowSize={arrowSize}
        arrowColor={arrowColor}
        setArrowDirection={setArrowDirection}
        setArrowSize={setArrowSize}
        setArrowColor={setArrowColor}
      />
    </div>
  )
}

export default App;