'use client';
import React from 'react';
import { createContext, useReducer, useContext, Dispatch, JSX } from 'react';
import RootState from '@/states/root';

// --- 型定義 ---
type AppState = {
  root: RootState | null;
};

type Action = { type: 'SET_STATE'; payload: RootState };

// --- Reducer ---
function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, root: action.payload };
    default:
      return state;
  }
}

// --- Context定義 ---
const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

// --- Providerコンポーネント ---
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(appReducer, {
    root: null,
  });
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

// --- カスタムフックでContextを使いやすく ---
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) throw new Error('useAppState must be used within AppProvider');
  return context;
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (!context) throw new Error('useAppDispatch must be used within AppProvider');
  return context;
}
