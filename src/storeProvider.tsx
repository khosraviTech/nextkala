'use client';

import { useMemo } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/redux/store';
import { SessionProvider } from 'next-auth/react';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = useMemo(() => makeStore(), []);

  return  <SessionProvider><Provider store={store}>{children}</Provider></SessionProvider>;
}