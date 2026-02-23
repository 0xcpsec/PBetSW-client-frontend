import { createContext, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ 
	lang, 
	platform, 
	children, 
	onKafkaSet
}) => {
	const writeToKafka = (type, action) => {
		const actionMapping = {
			'Desktop pop': 1,
			'Desktop pop leave': 1,
			'Desktop pop continue': 2,
			'Mobile pop': 5,
			'Mobile pop leave': 3,
			'Mobile pop continue': 4,
		};
		const platformWord = platform === 'd' ? 'Desktop' : 'Mobile';
		const kafkaAction = actionMapping[`${platformWord} ${action}`];

		onKafkaSet({
			note: 'SABA Survey',
			type, 
			action: kafkaAction
		});
	};

	return (
		<AppContext.Provider value={{ lang, platform, writeToKafka }}>
			{children}
		</AppContext.Provider>
	);
};