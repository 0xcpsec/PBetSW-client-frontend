import { useState, useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { differenceInMinutes } from 'date-fns';
import smoothscroll from 'smoothscroll-polyfill';

import { RatingIconType, RatingRecommendKind } from '@shared/constants';
import { labelsAtom } from '@atoms/site';
import { feedbackAtom, feedbackStorageAtom, submitTimeStorageAtom } from '@atoms/feedback';
import { useSubmitForm } from '@api/query';
import { surveyService } from '@services/survey-service';
import { uiService } from '@services/ui-service';

import { QuestionCard } from '@components/event/question-card';
import { Button } from '@components/core/button';
import { FieldAlert } from '@components/core/field-alert';
import { RecommendOptions } from '../recommend-options';
import { StarRatingContainer } from '../star-rating-container';

const makeYupShapeBasic = labels => ({
	comment: yup
		.string()
		.max(1000, labels.lbl_SabaSurveyCharactersMore)
});

const makeYupShapeFull = labels => ({
	...makeYupShapeBasic(labels),
	recommendScore: yup
		.number()
		.min(1, labels.lbl_SabaSurveyRequired)
		.required(labels.lbl_SabaSurveyRequired),
	recommendOptions: yup
		.string()
		.required(labels.lbl_SabaSurveyRequired),
	loveScore: yup
		.number()
		.min(1, labels.lbl_SabaSurveyRequired)
		.required(labels.lbl_SabaSurveyRequired)
});

const createFeedbackSchema = labels => 
	yup.object().shape(makeYupShapeFull(labels));

const getRecommendKind = rating => {
	if (rating === 0) {
		return RatingRecommendKind.None;
	} else {
		return rating > 3 ? RatingRecommendKind.Satisfied : RatingRecommendKind.Dissatisfied;
	}
};

export const FeedbackForm = () => {
	const labels = useAtomValue(labelsAtom);
	const feedback = useAtomValue(feedbackAtom);
	const saveFeedbackToStorage = useSetAtom(feedbackStorageAtom);
	const [submitTime, setSubmitTime] = useAtom(submitTimeStorageAtom);
	const [recommendKind, setRecommendKind] = useState(RatingRecommendKind.None);
	const [feedbackError, setFeedbackError] = useState(null);

	const methods = useForm({
		resolver: yupResolver(createFeedbackSchema(labels)),
		values: {
			...feedback,
			recommendOptions: feedback.recommendOptions?.join(',') ?? ''
		},
		shouldFocusError: false
	});

	const { register, handleSubmit, control, getValues, reset, formState: { errors } } = methods;

	const mutation = useSubmitForm();

	const hasRatedRecommend = recommendKind !== RatingRecommendKind.None;

	useEffect(() => {
		setRecommendKind(getRecommendKind(feedback.recommendScore));
	}, [feedback.recommendScore]);

	useEffect(() => {
		const subscription = surveyService.onSaveToStorage().subscribe(() => {
			const formData = getValues();
			formData.recommendOptions = surveyService.convertRecommendOptions(formData.recommendOptions);
			
			if (!formData.recommendOptions) {
				formData.recommendOptions = [];
			}

			saveFeedbackToStorage(JSON.stringify(formData));
		});

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	useEffect(() => {
		smoothscroll.polyfill();
		const elements = Object.keys(errors)
			.map(name => document.getElementsByName(name)[0]?.closest('.survey-form__item'))
			.filter(el => el);
		elements.sort(
			(a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
		);
		elements[0]?.scrollIntoView({ 
			behavior: 'smooth', 
			block: 'center' 
		});
	}, [errors]);

	const onRatingRecommend = rating => {
		const currentKind = getRecommendKind(rating);
		if (currentKind !== recommendKind) {
			setRecommendKind(currentKind);
		}
	};

	const submitForm = data => {
		const formData = { ...data };
		formData.recommendOptions = surveyService.convertRecommendOptions(formData.recommendOptions);

		// Prevent frequent form submissions
		if (submitTime) {
			const differenceMinutes = differenceInMinutes(new Date(), new Date(submitTime));
			if (differenceMinutes < 1) {
				setFeedbackError(labels.lbl_SabaSurveyFrequency);
				return;
			}
		}

		mutation.mutate(formData, {
			onSuccess: async (data) => {
				if (!data.Success) {
					console.error(data.Message);
					setFeedbackError(labels.lbl_SabaSurveyErrorMessage01);
					return;
				};

				reset();
				setSubmitTime(new Date());
				uiService.hideSurveyForm();
				surveyService.displaySuccessToast();
			},
			onError: () => {
				setSubmitTime(new Date());
				setFeedbackError(labels.lbl_SabaSurveyErrorMessage01);
			}
		});
	};

	return (
		<div className="survey-form">
			<FormProvider {...methods}>
				<form>
					<QuestionCard>
						<QuestionCard.Question no={1}>{labels.lbl_SabaSurveyQ01}</QuestionCard.Question>
						<QuestionCard.Answering hasError={errors.recommendScore}>
							<div className="survey-form__row">
								<div className="survey-rank">
									<div className="survey-rank__legend">
										<small>{labels.lbl_SabaSurveyRecomend01}</small>
										<small>{labels.lbl_SabaSurveyRecomend02}</small>
									</div>
									<Controller 
										name="recommendScore"
										control={control}
										render={({ field }) => (
											<StarRatingContainer 
												field={field} 
												amount={5}
												iconType={RatingIconType.Hand}
												onRating={onRatingRecommend}
											/>
										)}
									/>
								</div>

								{errors.recommendScore && <FieldAlert>{errors.recommendScore.message}</FieldAlert>}
							</div>
						</QuestionCard.Answering>
					</QuestionCard>

					{hasRatedRecommend && (
						<QuestionCard>
							<QuestionCard.Question>
								{{
									[RatingRecommendKind.Satisfied]: labels.lbl_SabaSurveyQuestion1,
									[RatingRecommendKind.Dissatisfied]: labels.lbl_SabaSurveyQuestion2
								}[recommendKind] ?? ''}

								<span className="survey-form__topic-info">({labels.lbl_SabaSurveyMiultiple})</span>
							</QuestionCard.Question>
							<QuestionCard.Answering hasError={errors.recommendOptions}>
								<div className="survey-form__row">
									<Controller 
										name="recommendOptions"
										control={control}
										render={({ field }) => (
											<RecommendOptions 
												field={field} 
												recommendKind={recommendKind} 
											/>
										)}
									/>

									{errors.recommendOptions && <FieldAlert>{errors.recommendOptions.message}</FieldAlert>}
								</div>
							</QuestionCard.Answering>
						</QuestionCard>
					)}

					<QuestionCard>
						<QuestionCard.Question no={2}>{labels.lbl_SabaSurveyQ02}</QuestionCard.Question>
						<QuestionCard.Answering hasError={errors.loveScore}>
							<div className="survey-form__row">
								<div className="survey-rank">
									<Controller 
										name="loveScore"
										control={control}
										render={({ field }) => (
											<StarRatingContainer field={field} />
										)}
									/>
								</div>

								{errors.loveScore && <FieldAlert>{errors.loveScore.message}</FieldAlert>}
							</div>
						</QuestionCard.Answering>
					</QuestionCard>
					
					<QuestionCard>
						<QuestionCard.Question 
							no={3}
							isRequired={false}
							description={labels.lbl_SabaSurveyExample}
						>
							{labels.lbl_SabaSurveyProblem}
						</QuestionCard.Question>
						<QuestionCard.Answering hasError={errors.comment}>
							<div className="survey-form__row">
								<textarea 
									className="survey-form__textarea" 
									placeholder={labels.lbl_SabaSurveyAnswer} 
									{...register('comment')} 
								></textarea>

								{errors.comment && <FieldAlert>{errors.comment.message}</FieldAlert>}
							</div>
						</QuestionCard.Answering>
						<div className="survey-form__textarea-text">{labels.lbl_SabaSurveyCharactersBetween}</div>
					</QuestionCard>

					<QuestionCard>
						<QuestionCard.Answering hasError={errors.effectScore}>
							<div className="survey-form__label">{labels.lbl_SabaSurveyInfluence}</div>
							<div className="survey-form__row">
								<div className="survey-rank">
									<Controller 
										name="effectScore"
										control={control}
										render={({ field }) => (
											<StarRatingContainer field={field} />
										)}
									/>
								</div>

								{errors.effectScore && <FieldAlert>{errors.effectScore.message}</FieldAlert>}
							</div>
						</QuestionCard.Answering>
					</QuestionCard>
				</form>
			</FormProvider>
			
			<div className="survey-form__submit">
				<Button 
					onClick={handleSubmit(submitForm)} 
					isDisabled={mutation.isLoading}
				>
					<span className="survey-btn__text">
						{mutation.isLoading ? labels.lbl_SabaSurveySubmitWait : labels.lbl_SabaSurveySubmit02}
					</span>
					<span className="survey-btn__loading"></span>
				</Button>

				{feedbackError ? (
					<div className="survey-submit-error">
						<span className="survey-form__icon-error"></span>
						<span>{feedbackError}</span>
					</div>
				) : null}
			</div>
		</div>
	);
};