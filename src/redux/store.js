import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';

const reducer = combineReducers({
    results,
    suggestions,
    currentItem
});

const initialState = localStorage.getItem('GLOBAL_STATE') ? JSON.parse(localStorage.getItem('GLOBAL_STATE')) : undefined;
const store = createStore(reducer, initialState);

export const saveState = () => {
    const state = store.getState();
    localStorage.setItem('GLOBAL_STATE', JSON.stringify(state));
}

export default store;