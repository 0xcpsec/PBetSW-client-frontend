import {
    Subject
} from 'rxjs';

const scrollLayoutSubject = new Subject();
const surveyVisibilitySubject = new Subject();

const scrollLayoutTop = () => scrollLayoutSubject.next(0);

const scrollToSurvey = () => {
    const element = document.getElementsByClassName('survey-form__head')[0];
    if (element) {
        scrollLayoutSubject.next(element.offsetTop - 40);
    }
};

const onScrollLayout = () => scrollLayoutSubject.asObservable();

const hideSurveyForm = () => surveyVisibilitySubject.next();

const onSurveyFormHide = () => surveyVisibilitySubject.asObservable();

export const uiService = {
    scrollLayoutTop,
    scrollToSurvey,
    onScrollLayout,
    hideSurveyForm,
    onSurveyFormHide
};