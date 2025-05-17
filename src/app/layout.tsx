import '@/assets/styles/app.scss';
import { ReactNode } from 'react';
import AppWrapper from './AppWrapper';

type Props = {
  children: ReactNode;
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
