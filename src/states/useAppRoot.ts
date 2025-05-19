import { useCallback, useMemo } from 'react';
import { useAppState, useAppDispatch } from '@/states/AppContext';
import MainService from '@/services/main';
import RootState from '@/states/root';

const useAppRoot = () => {
  const { root: state } = useAppState();
  const dispatch = useAppDispatch();

  // const [service, setService] = useState<MainService | null>(null);

  const setRootState = useCallback(
    async (root: RootState) => {
      dispatch({ type: 'SET_STATE', payload: root });
    },
    [dispatch],
  );

  // useEffect(() => {
  //   if (!state) {
  //     const initialState = new RootState();
  //     setRootState(initialState);
  //     setService(new MainService(initialState, setRootState));
  //   } else {
  //     setService(new MainService(state, setRootState));
  //   }
  // }, [state, setRootState]);

  const service = useMemo(() => {
    const effectiveState = state ?? new RootState();
    return new MainService(effectiveState, setRootState);
  }, [state, setRootState]);

  return { state, service };
};

export default useAppRoot;
