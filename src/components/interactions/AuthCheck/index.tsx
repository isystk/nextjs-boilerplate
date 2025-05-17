'use client';
import { redirect } from 'next/navigation';
import { Url } from '@/constants/url';
import {ReactNode} from 'react';
import {useAppState} from '@/states/AppContext';

type Props = {
  component: ReactNode;
};

const AuthCheck = ({ component }: Props) => {
  const { user } = useAppState();
  
  const { id, emailVerifiedAt } = user
  
  // ログインしてなければログイン画面へとばす
  if (!id) {
    return redirect(Url.LOGIN);
  }

  // 新規会員登録後、メール確認が未完了の場合
  if (!emailVerifiedAt) {
    return redirect(Url.EMAIL_VERIFY)
  }

  // ログイン済みの場合
  return <>{component}</>;
};

export default AuthCheck;
