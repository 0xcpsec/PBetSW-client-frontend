import { useAtomValue } from 'jotai';

import { EventScene } from '@shared/constants';
import { eventSceneAtom } from '@atoms/event';

import { EventMain } from '../../event-main';
import { EventInvitation } from '../../event-invitation';

export const AppBody = () => {
	const eventScene = useAtomValue(eventSceneAtom);

	return (
		<>
			{{
				[EventScene.EventSurvey]: <EventMain />,
				[EventScene.SurveyInvitation]: <EventInvitation />
			}[eventScene]}
		</>
	);
};