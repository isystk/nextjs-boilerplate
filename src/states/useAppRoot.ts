import {useCallback, useEffect, useMemo } from 'react';
import { useAppState, useAppDispatch } from '@/states/AppContext';
import MainService from '@/services/main';
import RootState from '@/states/root';

const useAppRoot = () => {
  const { root: state } = useAppState();
  const dispatch = useAppDispatch();

  const setRootState = useCallback(
    async (root: RootState) => {
      dispatch({ type: 'SET_STATE', payload: root });
    },
    [dispatch],
  );

  const service = useMemo(() => {
    const effectiveState = state ?? new RootState();
    return new MainService(effectiveState, setRootState);
  }, [state, setRootState]);

  const { userId } = state?.auth || {};
  useEffect(() => {
    if (userId) {
      return
    }
    const check = async () => {
      await service.auth.loginCheck();
      await service.const.readConsts();
    };
    check();
  }, [userId, service]);

  return { state, service };
};

export default useAppRoot;
