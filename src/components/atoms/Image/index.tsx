import React from 'react';
import NextImage from 'next/image';
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
  return <NextImage src={`${subDirectory}${src}`} alt={alt} loading={loading} {...props} />;
};

export default Image;
