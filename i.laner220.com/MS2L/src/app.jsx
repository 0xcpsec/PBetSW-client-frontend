import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';

import { AppProvider } from '@contexts/app-context';
import { AppContainer } from './pages/app/app-container';
import { AppBody } from './pages/app/app-body';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
			refetchOnReconnect:false,
		}
	}
});

export function App({ 
	lang = 'en', 
	platform, 
	onKafkaSet = () => {} 
}) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider>
				<AppProvider
					lang={lang} 
					platform={platform}
					onKafkaSet={onKafkaSet}
				>
					<AppContainer lang={lang}>
						<AppBody />
					</AppContainer>
				</AppProvider>
			</Provider>
		</QueryClientProvider>
	);
}