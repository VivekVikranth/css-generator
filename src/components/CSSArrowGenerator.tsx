import React from 'react';

interface CSSArrowGeneratorProps {
    arrowDirection: string;
    arrowSize: number;
    arrowColor: string;
    setArrowDirection: (direction: string) => void;
    setArrowSize: (size: number) => void;
    setArrowColor: (color: string) => void;
}

const CSSArrowGenerator: React.FC<CSSArrowGeneratorProps> = ({
    arrowDirection,
    arrowSize,
    arrowColor,
    setArrowDirection,
    setArrowSize,
    setArrowColor,
}) => {
    console.log("Current arrowDirection:", arrowDirection);

    const arrowStyles = {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth:
            arrowDirection === 'top'
                ? `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`
                : arrowDirection === 'bottom'
                    ? `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`
                    : arrowDirection === 'left'
                        ? `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`
                        : `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
        borderColor:
            arrowDirection === 'top'
                ? `transparent transparent ${arrowColor} transparent`
                : arrowDirection === 'bottom'
                    ? `${arrowColor} transparent transparent transparent`
                    : arrowDirection === 'left'
                        ? `transparent ${arrowColor} transparent transparent`
                        : `transparent transparent transparent ${arrowColor}`,
    };

    return (
        <div>
            <h3> CSS4 Arrow Generator</h3>
            <div>
                <label>Arrow Direction: </label>
                <select value={arrowDirection}

                    onChange={(e) => {
                        console.log(e.target.value);
                        setArrowDirection(e.target.value);
                    }}
                >
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label>Arrow Size: </label>
                <input
                    type='number'
                    value={arrowSize}
                    onChange={(e) => setArrowSize(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Arrow Color: </label>
                <input
                    type="color"
                    value={arrowColor}
                    onChange={(e) => setArrowColor(e.target.value)}
                />
            </div>

            <div style={{ margin: '20px 0' }}>
                <div style={arrowStyles}></div>
            </div>
        </div>
    );
};

export default CSSArrowGenerator;