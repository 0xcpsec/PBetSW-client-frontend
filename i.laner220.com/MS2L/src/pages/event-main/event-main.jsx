import { useAtomValue } from 'jotai';

import { labelsAtom } from '@atoms/site';

import { AppMainLayout } from '@components/layout/app-main-layout';
import { Header } from './components/header';
import { FeedbackForm } from './components/feedback-form';

export const EventMain = () => {
	const labels = useAtomValue(labelsAtom);

	return (
		<AppMainLayout title={labels.lbl_SabaFeedback}>
			<Header />
			<FeedbackForm />
		</AppMainLayout>
	);
};