import {
    atom
} from 'jotai';
import {
    atomWithStorage
} from 'jotai/utils';

import {
    EventScene
} from '@shared/constants';
import {
    isDispatchedOpenAtom
} from './io';

export const firstTimeStorageAtom = atomWithStorage('player-feedback-first-time-survey', true);

export const eventSceneAtom = atom(EventScene.None);

export const eventDataSceneAtom = atom(get => {
    const firstTimeStorage = get(firstTimeStorageAtom);
    const isDispatchedOpen = get(isDispatchedOpenAtom);

    let scene = EventScene.None;
    const isFirstTimeSurvey = Boolean(
        JSON.parse(firstTimeStorage || 'null')
    );

    if (isFirstTimeSurvey && !isDispatchedOpen) {
        scene = EventScene.SurveyInvitation;
    } else {
        if (isDispatchedOpen) {
            scene = EventScene.EventSurvey;
        }
    }

    return scene;
});

export const initializeEventSceneAtom = atom(null, (get, set, _update) => {
    const eventDataScene = get(eventDataSceneAtom);
    set(eventSceneAtom, eventDataScene);
});

export const closeSceneAtom = atom(null, (get, set, _update) => {
    set(eventSceneAtom, EventScene.None);
    set(isDispatchedOpenAtom, false);
});