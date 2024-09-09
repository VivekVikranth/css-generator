import React from 'react';

interface CSSOutputProps {
  backgroundColor: string;
  textColor: string;
//   borderRadius: number;
//   fontSize: number;
}

const CSSOutput: React.FC<CSSOutputProps> = ({ backgroundColor, textColor }) => {
  const cssCode = `
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    alert('CSS copied to clipboard!');
  };

  return (
    <div>
      <pre>{cssCode}</pre>
      <button onClick={copyToClipboard}>Copy CSS</button>
    </div>
  );
};

export default CSSOutput;
