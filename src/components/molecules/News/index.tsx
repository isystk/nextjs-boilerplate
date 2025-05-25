'use client';
import styles from './styles.module.scss';
import React from 'react';
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';
import dummyImage480x320 from '@/assets/images/dummy_480x320.png';

export type News = {
  title: string;
  text: string;
  date: string;
  imageUrl?: string;
};

type Props = {
  items: News[];
};

const News = ({ items = [] }: Props) => {
  return (
    <div className={styles.news}>
      <div className={styles.inner}>
        <ScrollIn>
          <p className={styles.title}>NEWS</p>
        </ScrollIn>
        <div className={styles.contents}>
          {items.map(({ title, text, date, imageUrl }, index) => (
            <ScrollIn key={index}>
              <div className={styles.newsItem}>
                <div className={styles.left}>
                  <div className={styles.leftInner}>
                    <p className={styles.date}>
                      {date}
                      <br />
                      {title}
                    </p>
                    <p className={styles.text}>{text}</p>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.imageWrapper}>
                    <Image src={imageUrl || dummyImage480x320.src} alt="dummy" />
                  </div>
                </div>
              </div>
            </ScrollIn>
          ))}
          <div className={styles.bottomSpace}></div>
        </div>
      </div>
    </div>
  );
};

export default News;
