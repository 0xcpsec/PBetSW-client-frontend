import {
    useMutation
} from '@tanstack/react-query';
import {
    useSetAtom
} from 'jotai';
import {
    RESET
} from 'jotai/utils';

import {
    feedbackStorageAtom
} from '@atoms/feedback';
import {
    fetchSubmitForm
} from '@api/event';

export const useSubmitForm = () => {
    const saveStorage = useSetAtom(feedbackStorageAtom);

    return useMutation(fetchSubmitForm, {
        onSuccess: data => {
            if (data.Success) {
                saveStorage(RESET);
            }
        }
    });
};