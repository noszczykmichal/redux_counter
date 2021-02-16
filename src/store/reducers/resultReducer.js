import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), rValue: action.result })
            }
        case actionTypes.DELETE_RESULT:
            const newArr = state.results.filter(element => element.id !== action.id);
            return {
                ...state,
                results: newArr
            }

    }

    return state;
};

export default resultReducer;