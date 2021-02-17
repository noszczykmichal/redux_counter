import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

export const storeResult = (res) => {

    return (dispatch, getState) => {
        setTimeout(() => { //the dispatch of the action creator delayed to simulate the time needed to get the response from the server
            // const oldCounter = getState().ctr.counter;
            // console.log('oldCounter: ', oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: resElId
    };
};