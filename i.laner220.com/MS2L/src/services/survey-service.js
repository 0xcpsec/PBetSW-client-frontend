import {
    Subject
} from 'rxjs';

const surveySubject = new Subject();
const successToastSubject = new Subject();

const saveToStorage = () => surveySubject.next();

const onSaveToStorage = () => surveySubject.asObservable();

const displaySuccessToast = () => successToastSubject.next();

const onDisplaySuccessToast = () => successToastSubject.asObservable();

const convertRecommendOptions = inputOptions =>
    inputOptions ? .split(',').filter(Boolean).map(Number) ? ? [];

export const surveyService = {
    saveToStorage,
    onSaveToStorage,
    displaySuccessToast,
    onDisplaySuccessToast,
    convertRecommendOptions
};