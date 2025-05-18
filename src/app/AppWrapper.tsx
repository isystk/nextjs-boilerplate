'use client';

import { AppProvider } from '@/states/AppContext';
import {JSX} from 'react';

type Props = {
  children: JSX.Element;
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
