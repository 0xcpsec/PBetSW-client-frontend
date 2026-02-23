export const DialogCloseButton = ({ onClick }) => (
	<div 
		className="survey-dialog__btn-close"
		data-testid="dialogCloseBtn"
		onClick={onClick}
	>
		<div className="survey-dialog__icon-close"></div>
	</div>
);