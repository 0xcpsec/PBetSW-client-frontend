export const CheckList = ({ 
	options = [],
	textProp,
	valueProp,
	checkedItems = [],
	onChange
}) => {
	return options.map(item => (
		<div
			key={`check_${item[valueProp]}`} 
			className="survey-form__input"
			data-selected={checkedItems.includes(item[valueProp])}
			onClick={onChange(item)}
		>
			<span className="survey-form__input-checkbox"></span>
			<span className="survey-form__input-label">{item[textProp]}</span>
		</div>
	));
};