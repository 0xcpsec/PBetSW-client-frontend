import clsx from 'clsx';

import { DialogCloseButton } from '@components/core/dialog-close-button';

export const SurveyDialogBase = ({ 
	isOpen, 
	typeClassName, 
	hasCloseButton = false, 
	children, 
	onClose 
}) => {
	return (
		<div 
			className="survey-modal"
			data-open={isOpen}
		>
			<div className={clsx('survey-dialog', typeClassName)}>
				<div className="survey-dialog__wrap">
					{children}
				</div>
				
				{hasCloseButton && <DialogCloseButton onClick={onClose} />}
			</div>
		</div>
	);
};