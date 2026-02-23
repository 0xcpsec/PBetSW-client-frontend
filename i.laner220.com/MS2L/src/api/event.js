import {
    cookielessFetcher
} from '@api/fetcher';

export const fetchSubmitForm = async (feedback) => {
    return await cookielessFetcher('CustomerSurvey/SubmitFeedback', {
        method: 'POST',
        body: JSON.stringify({
            feedback
        })
    });
};