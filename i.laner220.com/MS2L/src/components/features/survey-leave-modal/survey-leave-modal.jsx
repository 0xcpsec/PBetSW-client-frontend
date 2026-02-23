import { forwardRef, useImperativeHandle } from 'react';
import { useAtomValue } from 'jotai';

import { useToggle } from '@hooks';
import { labelsAtom } from '@atoms/site';

import { SurveyDialogBase } from '@components/core/survey-dialog-base';

export const SurveyLeaveModal = forwardRef(({ 
	onLeave = () => {}, 
	onContinue = () => {}
}, ref) => {
	const labels = useAtomValue(labelsAtom);
	const { isOn: isShow, setToggle: setIsShow } = useToggle(false);

	useImperativeHandle(ref, () => ({
		open: () => setIsShow(true)
	}));

	const close = () => setIsShow(false);

	const handleContinue = () => {
		onContinue();
		close();
	};

	return (
		<SurveyDialogBase
			isOpen={isShow}
			typeClassName="survey-dialog-leave"
			onClose={close}
		>
			<div className="survey-dialog__title">{labels.lbl_SabaSurveyLeaveTemporarily}</div>
			<div className="survey-dialog__icon"></div>
			<div 
				className="survey-dialog__text" 
				dangerouslySetInnerHTML={{ __html: labels.lbl_SabaSurveyKeepContent }}
			/>
			<div className="survey-dialog__footer">
				<div 
					className="survey-btn-outline"
					onClick={onLeave}
				>
					{labels.lbl_SabaSurveyLeave}
				</div>
				<div 
					className="survey-btn-cancel"
					onClick={handleContinue}
				>
					{labels.lbl_SabaSurveyContinue}
				</div>
			</div>
		</SurveyDialogBase>
	);
});