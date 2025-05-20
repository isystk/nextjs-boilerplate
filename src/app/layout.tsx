import '@/assets/styles/app.scss';
import {JSX} from 'react';
import { AppProvider } from '@/states/AppContext';

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head />
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
