import {GET_MODAL_FORM, OPEN_FULL_CASE, OPEN_SLIDER} from '../actions/index';

const initialState = {
    modalShow: false,
    outSide: false,
    caseUri: [],
    fullCase: false,
    slider: false
};

const salesReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case GET_MODAL_FORM:
            return Object.assign({}, state, {modalShow: action.show});
        case OPEN_FULL_CASE:
            return Object.assign({}, state, {caseUri: action.payload, fullCase: action.show});
        case OPEN_SLIDER:
            return Object.assign({}, state, {caseUri: action.payload, slider: action.show});
        default: return state;
    }
};

export default salesReducer;