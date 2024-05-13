'use client'

// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
// import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

const SEGUNDO = 1_000 * 1 // 1 segundo
const MINUTE = SEGUNDO * 60 // 1 minuto
const HORA = MINUTE * 60 // 1 hora
const DIA = HORA * 24 // 1 dia

export default function QueryProvider({
	children,
}: {
	children: React.ReactNode
}) {
	// const queryClient = new QueryClient()

	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						staleTime: SEGUNDO * 30, // 30Seg
						// gcTime: DIA,
						// refetchInterval: 4 * 1000,
					},
				},
			})
	)

	// const persister = createSyncStoragePersister({
	// 	storage: window.localStorage, // AsyncStorage
	// })

	return (
		<>
			<QueryClientProvider client={queryClient}>
				{/* <PersistQueryClientProvider
				client={queryClient}
				persistOptions={{ persister }}
			> */}
				<ReactQueryDevtools initialIsOpen={false} />
				{children}
				{/* </PersistQueryClientProvider> */}
			</QueryClientProvider>
		</>
	)
}
