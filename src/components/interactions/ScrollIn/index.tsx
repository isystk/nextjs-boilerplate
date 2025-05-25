import React, { useRef, useEffect, useState, JSX } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
  className?: string;
  delay?: string;
};

const ScrollIn = ({ children, className = '', delay = '0s' }: Props) => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = myRef.current;
      if (!element || isVisible) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isVisible]);

  const style = isVisible
    ? {
        animationDelay: delay,
      }
    : undefined;

  return (
    <div
      ref={myRef}
      className={`${className} ${styles.scrollInBase} ${isVisible ? styles.animated : ''} ${isVisible ? 'show' : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollIn;
