const initialState = [];

const salesReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case 'ALL':
            let images;
            return images = action.payload;
        default: return state;
    }
};

export default salesReducer;