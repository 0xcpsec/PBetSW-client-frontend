import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

import { RatingIconType } from '@shared/constants';
import { usePrevious } from '@hooks';

export const StarRating = forwardRef(({ 
	amount = 5, 
	score = 0,
	showScore = false, 
	iconType = RatingIconType.Star, 
	onRating
}, ref) => {
	const [rating, setRating] = useState(score);
	const prevScore = usePrevious(score);

	useImperativeHandle(ref, () => ({
		getRating: () => rating
	}));

	useEffect(() => {
		if (score !== prevScore) {
			setRating(score);
		}
	}, [score, prevScore]);

	const rate = ratingScore => {
		const isCanceled = rating === ratingScore;
		const finalScore = isCanceled ? 0 : ratingScore;
		setRating(finalScore);
		onRating && onRating(finalScore);
	};

	return (
		<div 
			className={`survey-rank__row survey-rank__row--${amount}`}
			role="radiogroup"
		>
			{Array.from({ length: amount }, (v, idx) => (
				<Star 
					key={idx} 
					iconType={iconType} 
					starNo={idx + 1} 
					isSelected={idx < rating} 
					showScore={showScore} 
					onClick={rate} 
				/>
			))}
		</div>
	)
});

const Star = ({ iconType, starNo, isSelected, showScore, onClick }) => {
	const handleClick = () => onClick(starNo);

	return (
		<div 
			className="survey-star"
			role="radio"
			aria-label={starNo}
			data-selected={isSelected}
			onClick={handleClick}
		>
			<span className={`survey-star__icon-${iconType}`}></span>
	
			{showScore && <span className="survey-star__score">{starNo}</span>}
		</div>
	);
};