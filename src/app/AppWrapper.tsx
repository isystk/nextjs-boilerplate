'use client';

import { ReactNode } from 'react';
import { AppProvider } from '@/states/AppContext';

type Props = {
  children: ReactNode;
};

export default function AppWrapper({ children }: Props) {
  
  // TODO セッションチェックをする CORSの問題で一旦コメントアウト
  // const [user, setUser] = useState<User>({} as User);
  // useEffect(() => {
  //   axios.post('https://localhost/api/session')
  //   .then(res => setUser(res.data))
  //   .catch(() => setUser({} as User));
  // }, []);

  return (
    <AppProvider>
      {children}
    </AppProvider>
  );
}
