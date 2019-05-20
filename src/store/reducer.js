import { combineReducers } from 'redux';
import { reducer as bannerReducer } from '../components/banner/store';

const reducer = combineReducers({
    banner: bannerReducer
});

export default reducer;
