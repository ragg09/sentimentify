import React, { type ReactElement } from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  onClick,
  type,

}: ButtonProps) => {
  return (
    <div className="flex flex-row">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
};

export default Button;