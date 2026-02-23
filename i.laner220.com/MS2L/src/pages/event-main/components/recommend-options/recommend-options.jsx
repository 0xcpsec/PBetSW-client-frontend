import { useState, useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { useFormContext } from 'react-hook-form';

import { RatingRecommendKind } from '@shared/constants';
import { labelsAtom } from '@atoms/site';
import { feedbackAtom } from '@atoms/feedback';
import { usePrevious } from '@hooks';
import { surveyService } from '@services/survey-service';

import { CheckList } from '@components/core/check-list';

const composeTitleOptions = labels => item => ({
	...item,
	title: labels[item.title]
});

const getRecommendOptions = (recommendKind, labels) => {
	return {
		[RatingRecommendKind.Satisfied]: [
			{ no: 1, title: 'lbl_SabaSurveyChoice01' },
			{ no: 2, title: 'lbl_SabaSurveyChoice02' },
			{ no: 3, title: 'lbl_SabaSurveyChoice03' },
			{ no: 4, title: 'lbl_SabaSurveyChoice04' },
			{ no: 5, title: 'lbl_SabaSurveyChoice05' },
			{ no: 6, title: 'lbl_SabaSurveyChoice06' },
			{ no: 7, title: 'lbl_SabaSurveyChoice07' },
			{ no: 8, title: 'lbl_SabaSurveyChoice08' }
		].map(composeTitleOptions(labels)),
		[RatingRecommendKind.Dissatisfied]: [
			{ no: 9, title: 'lbl_SabaSurveyChoice09' },
			{ no: 10, title: 'lbl_SabaSurveyChoice10' },
			{ no: 11, title: 'lbl_SabaSurveyChoice11' },
			{ no: 12, title: 'lbl_SabaSurveyChoice12' },
			{ no: 13, title: 'lbl_SabaSurveyChoice13' },
			{ no: 14, title: 'lbl_SabaSurveyChoice14' },
			{ no: 15, title: 'lbl_SabaSurveyChoice15' },
			{ no: 16, title: 'lbl_SabaSurveyChoice16' }
		].map(composeTitleOptions(labels))
	}[recommendKind] ?? [];
};

export const RecommendOptions = ({ field, recommendKind }) => {
	const feedback = useAtomValue(feedbackAtom);
	const labels = useAtomValue(labelsAtom);
	const [checkedItems, setCheckedItems] = useState(feedback.recommendOptions);
	const options = getRecommendOptions(recommendKind, labels);
	const prevRecommendKind = usePrevious(recommendKind);

	const { setValue } = useFormContext();

	useEffect(() => {
		if (prevRecommendKind && recommendKind !== prevRecommendKind) {
			setCheckedItems([]);
			setValue(field.name, '');
		}
	}, [recommendKind, prevRecommendKind, field.name]);

	useEffect(() => {
		const items = surveyService.convertRecommendOptions(field.value);
		setCheckedItems(items);
	}, [field.value]);

	const updateChecked = item => () => {
		let updatedList = [...checkedItems];

		if (checkedItems.includes(item.no)) {
			updatedList = updatedList.filter(no => no !== item.no);
		} else {
			updatedList.push(item.no);
		}

		setValue(field.name, updatedList.join(','), { shouldValidate: true });
	};

	return (
		<>
			<CheckList 
				options={options}
				textProp="title"
				valueProp="no"
				checkedItems={checkedItems}
				onChange={updateChecked}
			/>
			<input 
				type="text"
				{...field}
				hidden
				readOnly
			/>
		</>
	);
};