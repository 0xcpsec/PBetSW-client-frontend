export const FieldAlert = ({ children }) => (
	<div className="survey-form__error-msg">
		<span className="survey-form__icon-error"></span>
		<span>{children}</span>
	</div>
);