import items from '../../data/items';
import { type as findSuggestions } from '../actions/findSuggestions';
const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case findSuggestions: {
            const regex = new RegExp(`^${payload}`, 'i');
            return items.filter(e => regex.test(e.title));
        }

        default:
            return state;
    }
}

