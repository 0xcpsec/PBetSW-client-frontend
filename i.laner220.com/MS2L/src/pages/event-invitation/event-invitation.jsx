import { useEffect } from 'react';
import { SurveyDialogBase } from '@components/core/survey-dialog-base';
import { useAtomValue, useSetAtom } from 'jotai';

import { EventScene, KafkaType } from '@shared/constants';
import { eventSceneAtom, closeSceneAtom, firstTimeStorageAtom } from '@atoms/event';
import { labelsAtom } from '@atoms/site';
import { useAppContext } from '@contexts/app-context';

export const EventInvitation = () => {
	const labels = useAtomValue(labelsAtom);
	const switchScene = useSetAtom(eventSceneAtom);
	const changeFirstTime = useSetAtom(firstTimeStorageAtom);
	const closeScene = useSetAtom(closeSceneAtom);
	const { writeToKafka } = useAppContext();

	useEffect(() => {
		return () => changeFirstTime(false);
	}, []);

	const turnToForm = () => {
		switchScene(EventScene.EventSurvey);
		writeToKafka(KafkaType.Banner, 'pop');
	};

	return (
		<SurveyDialogBase
			isOpen={true}
			typeClassName="survey-dialog-invite"
			hasCloseButton={true}
			onClose={closeScene}
		>
			<div className="survey-dialog__title"></div>
			<div 
				className="survey-dialog__text" 
				dangerouslySetInnerHTML={{ __html: labels.lbl_SabaSurvey1min02 }}
			/>
			<div className="survey-dialog__footer">
				<div 
					className="survey-btn-confirm"
					onClick={turnToForm}
				>
					{labels.lbl_SabaSurveyReplyNow}
				</div>
			</div>
		</SurveyDialogBase>
	);
};