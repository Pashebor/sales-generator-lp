import {GET_MODAL_FORM, OPEN_FULL_CASE, OPEN_SLIDER, SEND_MESSAGE_SUCCESS, SEND_CLIENTS_SUCCESS, RATE_TYPE} from '../actions/index';

const initialState = {
    modalShow: false,
    outSide: false,
    caseUri: [],
    fullCase: false,
    slider: false,
    responseJson: null,
    clientsResp: null,
    typeRate: ''
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
            return Object.assign({}, state, {responseJson: action.payload});
        case SEND_CLIENTS_SUCCESS:
            return Object.assign({}, state, {clientsResp: action.payload});
        case RATE_TYPE:
            return Object.assign({}, state, {typeRate: action.payload});
        default: return state;
    }
};

export default salesReducer;