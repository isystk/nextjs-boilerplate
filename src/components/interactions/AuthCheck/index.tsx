'use client';
import React, { JSX } from 'react';
import { redirect } from 'next/navigation';
import { Url } from '@/constants/url';
import { User } from '@/states/auth';

type Props = {
  user: User;
  component: JSX.Element;
};

const AuthCheck = ({ user, component }: Props) => {
  // ログインしてなければログイン画面へとばす
  if (!user.id) {
    return redirect(Url.LOGIN);
  }

  // 新規会員登録後、メール確認が未完了の場合
  if (!user.email_verified_at) {
    return redirect(Url.EMAIL_VERIFY);
  }

  // ログイン済みの場合
  return <>{component}</>;
};

export default AuthCheck;
