export const QuestionCard = ({ children }) => {
	return (
		<div className="survey-form__item">
			{children}
		</div>
	);
};

const Question = ({ 
	no, 
	description, 
	isRequired = true, 
	children 
}) => {
	return (
		<div className="survey-form__title">
			<div className="survey-form__topic">
				{no ? (
					<div className="survey-form__topic-item">
						{isRequired 
							? <span className="survey-form__topic-require"></span> 
							: null
						}

						<span className="survey-form__topic-number">{no}</span>
					</div>
				) : null}
				
				<div className="survey-form__topic-title">
					{children}
				</div>
			</div>
			
			{description ? (
				<div className="survey-form__topic-legend">
					{description}
				</div>
			) : null}
		</div>
	);
};

const Answering = ({ hasError = false, children }) => {
	return (
		<div 
			className="survey-form__content"
			data-status={hasError ? 'error' : undefined}
		>
			{children}
		</div>
	);
};

const Note = ({ children }) => children;

QuestionCard.Question = Question;
QuestionCard.Answering = Answering;
QuestionCard.Note = Note;