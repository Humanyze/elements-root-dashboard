import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import AxiosRequestService from 'Src/redux/AxiosRequestService';
import PARTICIPANTS_ACTION_TYPES from 'Redux/participants/participantsActionTypes';

import { participantsFetchError, participantsFetchSuccess } from 'Src/redux/participants/participantsActions';

import { setViewableFields } from 'Src/redux/participants-ui/participantsUIActions';
import { getBearerToken } from 'Src/redux/auth/authReducer';

const initialLoadEpic = (action$, store) =>
    action$.ofType(PARTICIPANTS_ACTION_TYPES.LOAD_PARTICIPANTS_REQUESTED)
        .switchMap(({ payload: { datasetId, perPage = 20, page = 1 } }) => {

            const offset = (page - 1) * perPage;
            const bearerToken = getBearerToken(store.getState());

            return Observable.from(AxiosRequestService.participants.getParticipantsByDatasetId(datasetId, {
                perPage,
                offset
            }, bearerToken))
                .mergeMap(({ data }) => {

                    const fieldSettingParticipant = data.participants[0] || {};

                    const viewableFields = getViewableFields(fieldSettingParticipant);

                    const participantsById = mapDataById(data.participants);
                    const participantIds = Object.keys(participantsById);

                    return Observable.of(
                        setViewableFields(viewableFields),
                        participantsFetchSuccess({
                        participantsById,
                        participantIds,
                        totalParticipantCount: data.meta.total_count
                    }));
                })
                .takeUntil(action$.ofType(PARTICIPANTS_ACTION_TYPES.LOAD_PARTICIPANTS_CANCELLED))
                .catch(error => Observable.of(participantsFetchError(error)));
        });

const loadAllEpic = (action$, store) =>
    action$.ofType(PARTICIPANTS_ACTION_TYPES.LOAD_PARTICIPANTS_REQUESTED)
        .mergeMap(({ payload: { datasetId } }) =>
            Observable.from(AxiosRequestService.participants.getAllParticipantsByDatasetId(datasetId, getBearerToken(store.getState())))
                .map(({ data }) => {

                    const participantsById = mapDataById(data.participants);
                    const participantIds = Object.keys(participantsById);

                    return participantsFetchSuccess({
                        participantsById,
                        participantIds,
                        totalParticipantCount: data.meta.total_count
                    });
                })
                .takeUntil(action$.ofType(PARTICIPANTS_ACTION_TYPES.LOAD_PARTICIPANTS_CANCELLED))
                .catch(error => Observable.of(participantsFetchError(error)))
        );


export default combineEpics(initialLoadEpic, loadAllEpic);





const restrictedFields = [
    'creator',
    'dataset',
    'dggt_hash',
    'id',
    'primary_team_id',
    'resource_uri',
    'uuid'
];

const orderedRequiredFields = [
    'email',
    'alias',
    'gender',
    'manager',
    'teams_managed',
    'timezone',
    'working_hours_start',
    'working_hours_end',
    'primary_team_name',
    'active_badge',
    'active_digital'
];

const getViewableFields = (participant) => {
    const customKeys = Object.keys(participant).filter(key => restrictedFields.indexOf(key) === -1 && orderedRequiredFields.indexOf(key) === -1);
    return [...orderedRequiredFields, ...customKeys];
};

const mapDataById = (data) =>
    data.reduce((acc, participant) => ({
        ...acc,
        [participant.id]: participant
    }), {});

