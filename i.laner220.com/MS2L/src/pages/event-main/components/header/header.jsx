import { useAtomValue } from 'jotai';

import { labelsAtom } from '@atoms/site';

export const Header = ({ children }) => {
	const labels = useAtomValue(labelsAtom);

	return (
		<div className="survey-header">
			<div 
				className="survey-header__text" 
				dangerouslySetInnerHTML={{ __html: labels.lbl_SabaSurveyDes }}
			/>
			<div className="survey-kv">
				<div className="survey-kv__star-left"></div>
				<div className="survey-kv__star-right"></div>
				<div className="survey-kv__cloud"></div>
				<div className="survey-kv__clouds"></div>
			</div>

			{children}
		</div>
	);
};