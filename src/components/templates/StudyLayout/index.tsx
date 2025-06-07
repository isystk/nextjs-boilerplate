'use client';
import React from 'react';
import styles from './styles.module.scss';
import { ReactNode, useEffect } from 'react';
import useAppRoot from '@/states/useAppRoot';
import { ErrorBoundary } from '@/components/interactions/ErrorBoundary';
import ScrollTopButton from '@/components/interactions/ScrollTopButton';
import SideMenu from '@/components/molecules/SideMenu';

type Props = {
  children: ReactNode;
  title: string;
  sideMenuId?: string;
};

const StudyLayout = ({ children, title, sideMenuId }: Readonly<Props>) => {
  const { state } = useAppRoot();

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (!state) return <></>;

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <p className="font-bold text-3xl p-5 bg-blue-100">React Hooks 全19種の解説とサンプル</p>
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-4 md:p-5">
              <div className="flex items-center mb-5">
                <h1 className="font-bold text-2xl">{title}</h1>
              </div>
              {children}
            </div>
            <SideMenu id={sideMenuId} className="md:col-span-1 md:order-first mt-5 md:mt-0" />
          </div>
        </main>
        <ScrollTopButton theme="dark" />
      </div>
    </ErrorBoundary>
  );
};

export default StudyLayout;
