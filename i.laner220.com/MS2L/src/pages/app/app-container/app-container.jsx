import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { EventScene } from '@shared/constants';
import { labelsAtom } from '@atoms/site';
import { eventSceneAtom, initializeEventSceneAtom, firstTimeStorageAtom } from '@atoms/event';
import { isDispatchedOpenAtom } from '@atoms/io';
import { fetchResources } from '@api/site';

export const AppContainer = ({ lang, children }) => {
	const [labels, setLabels] = useAtom(labelsAtom);
	const eventScene = useAtomValue(eventSceneAtom);
	// Can't remove this line, it will initialize the firstTimeStorageAtom
	const firstTimeStorage = useAtomValue(firstTimeStorageAtom);
	const initializeEventScene = useSetAtom(initializeEventSceneAtom);
	const setIsDispatchedOpen = useSetAtom(isDispatchedOpenAtom);

	useEffect(() => {
		initializeEventScene();
	}, []);

	useEffect(() => {
		fetchResources(lang)
			.then(data => setLabels(data?.Data))
			.catch(error => console.error(error));
	}, [lang]);

	useEffect(() => {
		const openPlayerFeedback = () => {
			setIsDispatchedOpen(true);
			initializeEventScene();
		};
		document.addEventListener('open-player-feedback', openPlayerFeedback, false);

		return () => {
			document.removeEventListener('open-player-feedback', openPlayerFeedback, false);
		};
	}, [eventScene]);

	if (eventScene === EventScene.None || !labels) {
		return null;
	}

	return children;
};