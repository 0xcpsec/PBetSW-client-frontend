import { useFormContext } from 'react-hook-form';

import { StarRating } from '@components/event/star-rating';

export const StarRatingContainer = ({ field, onRating, ...ratingProps }) => {
	const { setValue } = useFormContext();

	const handleRating = rating => {
		setValue(field.name, rating, { shouldValidate: true });
		onRating && onRating(rating);
	};

	return (
		<>
			<StarRating 
				score={field.value}
				{...ratingProps}
				onRating={handleRating}				
			/>
			<input 
				type="number"
				{...field}
				hidden
				readOnly
			/>
		</>
	);
};