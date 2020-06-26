import items from '../../data/items';
import { type as findResults } from '../actions/findResults';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case findResults: {
            const regex = new RegExp(`^${payload}`, 'i');
            return items.filter(e => regex.test(e.title));
        }

        default:
            return state;
    }
}
