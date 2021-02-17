import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({ id: new Date(), rValue: action.result })})

        case actionTypes.DELETE_RESULT:
            const newArr = state.results.filter(element => element.id !== action.id);
            return updateObject(state, {results: newArr});

    }

    return state;
};

export default resultReducer;