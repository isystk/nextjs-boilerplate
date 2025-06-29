import React from 'react';
import styles from './styles.module.scss';
import Logo from '@/components/atoms/Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Logo hasLink={false} />
        <p className={styles.footerCopy}>
          ©️isystk このページは架空のページです。実際の人物・団体とは関係ありません。
        </p>
      </div>
    </footer>
  );
};

export default Footer;
