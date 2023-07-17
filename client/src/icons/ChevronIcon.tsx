import React from 'react';

interface ChevronProps {
  height: number;
  width: number;
  className?: string;
  color?: string;
}

const ChevronIcon: React.FC<ChevronProps> = ({ height, width, className, color }: ChevronProps) => {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
};

ChevronIcon.defaultProps = {
  className: '',
  color: 'currentColor',
};

export default ChevronIcon;
