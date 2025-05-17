'use client';

import { ReactNode, useEffect, useState } from 'react';
import { AppProvider } from '@/states/AppContext';
import type { User } from '@/states/auth';
import axios from 'axios';

type Props = {
  children: ReactNode;
};

export default function AppWrapper({ children }: Props) {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    axios.post('https://localhost/api/session')
    .then(res => setUser(res.data))
    .catch(() => setUser({} as User));
  }, []);
  
  console.log({user})

  return (
    <AppProvider user={user}>
      {children}
    </AppProvider>
  );
}
