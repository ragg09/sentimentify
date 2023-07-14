import React from 'react';
import { type ForwardedRef, forwardRef, type InputHTMLAttributes } from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  error?: string | boolean;
  className?: string;
  id: string;
}

const InputField = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      id,
      label,
      placeholder,
      register,
      error,
      className,
      type,
      ...rest
    } = props;

    const errorAlert = (error: string | boolean): string => {
      return error ? ' border-red-500' : ' border-gray-300';
    };

    return (
      <div className="mb-4">
        {label !== '' && (
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          {...register}
          {...rest}
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          className={`appearance-none border rounded text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full ${
            error !== undefined && errorAlert(error)
          } ${className}`}
        />
        {error !== undefined && (
          <div className="text-red-700 rounded relative" role="alert">
            <span className="block sm:inline text-sm">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

InputField.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  id: '',
  className: ''
};

export default InputField;
