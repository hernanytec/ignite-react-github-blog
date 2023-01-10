import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const defaultCacheTime = 1000 * 60 * 5 // 5 minutes

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: defaultCacheTime,
      },
    },
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
