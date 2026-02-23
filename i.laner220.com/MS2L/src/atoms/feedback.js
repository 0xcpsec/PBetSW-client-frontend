import {
    atom
} from 'jotai';
import {
    atomWithStorage
} from 'jotai/utils';

export const feedbackStorageAtom = atomWithStorage('player-feedback-content', null);

export const submitTimeStorageAtom = atomWithStorage('player-feedback-submit-time', null);

export const feedbackAtom = atom(get => {
    const feedbackStorage = get(feedbackStorageAtom);

    if (feedbackStorage) {
        return JSON.parse(feedbackStorage);
    }

    return {
        comment: '',
        recommendScore: 0,
        recommendOptions: [],
        loveScore: 0,
        effectScore: 0
    };
});