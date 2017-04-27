import {GET_MODAL_FORM, OPEN_FULL_CASE, OPEN_SLIDER, SEND_MESSAGE_SUCCESS} from '../actions/index';

const initialState = {
    modalShow: false,
    outSide: false,
    caseUri: [],
    fullCase: false,
    slider: false,
    responseJson: null
};

const salesReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case GET_MODAL_FORM:
            return Object.assign({}, state, {modalShow: action.show});
        case OPEN_FULL_CASE:
            return Object.assign({}, state, {caseUri: action.payload, fullCase: action.show});
        case OPEN_SLIDER:
            return Object.assign({}, state, {caseUri: action.payload, slider: action.show});
        case SEND_MESSAGE_SUCCESS:
            console.log(action.payload);
            return Object.assign({}, state, {responseJson: action.payload});
        default: return state;
    }
};

export default salesReducer;