import { useEffect } from 'react';
import { useAtomValue } from 'jotai';

import { useToggle } from '@hooks';
import { labelsAtom } from '@atoms/site';
import { surveyService } from '@services/survey-service';

export const SuccessToast = ({ onEnd }) => {
	const labels = useAtomValue(labelsAtom);
	const { isOn: isShow, setToggle: setIsShow } = useToggle(false);

	useEffect(() => {
		let timerId;
		const subscription = surveyService.onDisplaySuccessToast().subscribe(() => {
			setIsShow(true);
			timerId = setTimeout(
				() => {
					setIsShow(false);
					onEnd && onEnd();
				}, 
				2000
			);
		});

		return () => {
			clearTimeout(timerId);
			subscription.unsubscribe();
		};
	}, []);

	return (
		<div 
			className="survey-toast"
			data-open={isShow}
		>
			<div className="survey-toast__wrap">
				<div className="survey-toast__title">
					<div className="survey-toast__icon"></div>
					{labels.lbl_SabaSurveySubmit01}
				</div>
			</div>
		</div>
	);
};