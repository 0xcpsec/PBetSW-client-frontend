import clsx from 'clsx';

export const Button = ({ className, isDisabled = false, children, onClick }) => {
	return (
		<div 
			className={clsx('survey-btn', className)}
			data-status={isDisabled ? 'disabled' : undefined}
			onClick={!isDisabled ? onClick : undefined}
		>
			{children}
		</div>
	);
};

export const DetailButton = props => (
	<Button className="survey-btn--detail" {...props} />
);