import { Fragment, type ReactNode } from 'react';

export interface HeadingProps {
  option: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  className?: string;
}

const Headings: React.FC<HeadingProps> = ({
  option,
  text,
  className
}: HeadingProps): ReactNode => {
  const HeadingTag = option;
  const classNameMapping = {
    h1: 'text-5xl font-extrabold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-bold',
    h4: 'text-2xl font-bold',
    h5: 'text-xl font-bold',
    h6: 'text-lg font-bold'
  };

  return (
    <div className="mb-4">
      <HeadingTag className={className ? className : classNameMapping[option]}>
        {text}
      </HeadingTag>
    </div>
  );
};

export default Headings;
