import { GET_BANNER_MESSAGE } from './actionTypes';
const defaultValue = {
    url: '',
    city: '',
    visity: 0
};

const reducer = (state = defaultValue , action) => {
    switch (action.type) {
        case GET_BANNER_MESSAGE :
            return {
                url: action.data.url,
                city: action.data.city,
                visity: action.data.visity
            };
        default :
            return state;
    }
};

export default reducer;