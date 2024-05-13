import ThemeProvider from '@/lib/provider/theme-provider'
import QueryProvider from '@/lib/provider/query-provider'

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<QueryProvider>{children}</QueryProvider>
			</ThemeProvider>
		</>
	)
}
