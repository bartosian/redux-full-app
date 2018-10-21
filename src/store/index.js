import { createStore } from 'redux';
import storyReducer from '../reducers/Story';

const store = createStore(storyReducer);

export default store;