import '@/assets/styles/app.scss';
import { JSX } from 'react';
import { AppProvider } from '@/states/AppContext';
import AppWrapper from '@/app/AppWrapper';

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head />
      <body>
        <AppProvider>
          <AppWrapper>{children}</AppWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
