const generateArrowStyles = (direction: string, size: number, color: string): string => {
    return `
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${direction === 'top'
            ? `0 ${size}px ${size}px ${size}px`
            : direction === 'bottom'
                ? `${size}px ${size}px 0 ${size}px`
                : direction === 'left'
                    ? `${size}px ${size}px ${size}px 0`
                    : `${size}px 0 ${size}px ${size}px`
        };
    border-color: ${direction === 'top'
            ? `transparent transparent ${color} transparent`
            : direction === 'bottom'
                ? `${color} transparent transparent transparent`
                : direction === 'left'
                    ? `transparent ${color} transparent transparent`
                    : `transparent transparent transparent ${color}`
        };
  `;
};

export default generateArrowStyles;