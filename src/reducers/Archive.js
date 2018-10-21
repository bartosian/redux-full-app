import { STORY_ARCHIVE }  from '../constants/actionTypes';
const INITIAL_STATE = [];

function applyStoryArchive(state, action) {
    return [...state, action.id];
}

function archiveReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case STORY_ARCHIVE: {
            return applyStoryArchive(state, action);
        }
        default: return state;
    }
}

export  default archiveReducer;