'use client';

import { JSX, useEffect, useState } from 'react';
import useAppRoot from '@/states/useAppRoot';

type Props = {
  children: JSX.Element;
};

export default function AppWrapper({ children }: Props) {
  const { state, service } = useAppRoot();
  const [checking, setChecking] = useState(true);

  const { userId } = state?.auth || {};
  useEffect(() => {
    if (userId) {
      return;
    }
    const check = async () => {
      await service.auth.loginCheck();
      await service.const.readConsts();
      setChecking(false);
    };
    check();
  }, [userId, service]);

  if (checking) {
    return <></>;
  }

  return <>{children}</>;
}
