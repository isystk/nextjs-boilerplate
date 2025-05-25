'use client';
import styles from './styles.module.scss';
import BasicLayout from '@/components/templates/BasicLayout';

const Index = () => {
  return (
    <BasicLayout title="Index Page">
      <div className={styles.container}>
        <h1 className={styles.heading}>Index Page</h1>
        <ul className={styles.menu}>
          <li>
            <a href="/shop" className={styles.link}>
              🛒 LaraEC
            </a>
          </li>
          <li>
            <a href="/lp" className={styles.link}>
              📄 Landing Page
            </a>
          </li>
        </ul>
      </div>
    </BasicLayout>
  );
};

export default Index;
