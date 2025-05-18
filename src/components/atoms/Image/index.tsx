import React from 'react';
type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  className?: string;
};

const Image = ({ src, alt = '', loading = 'lazy', ...props }: Props) => {
  const subDirectory = process.env.NEXT_PUBLIC_SUB_DIRECTORY || '';
  return <img src={`${subDirectory}${src}`} alt={alt} loading={loading} {...props} />;
};

export default Image;
