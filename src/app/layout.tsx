import '@/assets/styles/app.scss';
import AppWrapper from './AppWrapper';
import {JSX} from 'react';

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
    <head />
    <body>
    <AppWrapper>
      {children}
    </AppWrapper>
    </body>
    </html>
  );
}
