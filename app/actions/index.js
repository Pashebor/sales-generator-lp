import {requestCallback} from '../utils/ajax';

/*CONSTANTS*/
export const GET_MODAL_FORM = 'showModal';
export const OPEN_FULL_CASE = 'openCase';
export const OPEN_SLIDER = 'openSlider';
export const SEND_MESSAGE_SUCCESS = 'sendRequestCallback';
/*ACTIONS*/

export const showModal = (logicValue) => {
  return{
      type: GET_MODAL_FORM,
      show: logicValue
  }
};

export const openCase = (uri, logicValue) => {
    return {
        type: OPEN_FULL_CASE,
        payload: uri,
        show: logicValue
    }
};

export const openSlider = (uri,logicValue) => {
   return {
       type: OPEN_SLIDER,
       payload: uri,
       show: logicValue
   }
};

/*ASYNC ACTIONS*/

export const sendRequestCallback = (response) => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: response
    }
};

export const sendCallback = formData => {
    return dispatch => {
        return requestCallback('http://localhost/sales-generator-lp/build/send_mail.php', formData)
            .then(json => {
                dispatch(sendRequestCallback(json));
            })
            .catch(err => console.log('error'));
    }
};


