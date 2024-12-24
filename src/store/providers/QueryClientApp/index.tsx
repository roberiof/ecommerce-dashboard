/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

const gcTime = 1000 * 60 * 60 * 24 * 5; // 5 dias

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime
    }
  }
});

export const persister = createSyncStoragePersister({
  storage: typeof window !== "undefined" ? window.localStorage : undefined
});

export default function QueryClientProviderApp({ children }: any) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
