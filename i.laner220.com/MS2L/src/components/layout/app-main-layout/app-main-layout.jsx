import { useEffect, useRef, useState } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import smoothscroll from 'smoothscroll-polyfill';

import { EventScene, KafkaType } from '@shared/constants';
import { eventSceneAtom, closeSceneAtom } from '@atoms/event';
import { surveyService } from '@services/survey-service';
import { uiService } from '@services/ui-service';

import { useAppContext } from '@contexts/app-context';
import { SurveyLeaveModal } from '@components/features/survey-leave-modal';
import { SuccessToast } from '@components/features/success-toast';

export const AppMainLayout = ({ title, children }) => {
	const [scene, switchScene] = useAtom(eventSceneAtom);
	const [isShowContent, setIsShowContent] = useState(true);
	const closeScene = useSetAtom(closeSceneAtom);
	const { writeToKafka } = useAppContext();
	const surveyMainRef = useRef();
	const leaveModalRef = useRef();

	useEffect(() => {
		const subscription = uiService.onScrollLayout().subscribe(targetPosY => {
			smoothscroll.polyfill();
			surveyMainRef.current.scroll({
				top: targetPosY,
				behavior: 'smooth'
			});
		});

		const visibilitySubscription = uiService.onSurveyFormHide().subscribe(() => {
			setIsShowContent(false);
		});

		return () => {
			subscription.unsubscribe();
			visibilitySubscription.unsubscribe();
		};
	}, []);

	const close = () => {
		const actions = {
			[EventScene.EventSurvey]: () => {
				// When the user leaves the event page,
				// first save the user's feedback to localStorage, then display the confirm modal
				surveyService.saveToStorage();
				leaveModalRef.current.open();
			}
		};
		actions[scene] ? actions[scene]() : closeScene();
	};

	const handleLeave = () => {
		writeToKafka(KafkaType.Popup, 'pop leave');
		closeScene();
	};

	const handleContinue = () => {
		writeToKafka(KafkaType.Popup, 'pop continue');
	};

	return (
		<>
			<div 
				ref={surveyMainRef}
				className="survey-main"
				data-open={isShowContent}
			>
				<div className="survey-bar">
					<div 
						className="survey-bar__btn"
						onClick={close}
					>
						<i className="survey-bar__icon"></i>
					</div>
					<div className="survey-bar__title">{title}</div>
				</div>
				<div className="survey-scroller">
					{children}
				</div>
			</div>
			<SurveyLeaveModal 
				ref={leaveModalRef} 
				onLeave={handleLeave} 
				onContinue={handleContinue}
			/>
			<SuccessToast onEnd={closeScene} />
		</>
	);
};