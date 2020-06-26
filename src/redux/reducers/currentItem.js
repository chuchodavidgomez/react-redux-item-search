import items from '../../data/items';
import { type as findCurrentItem } from '../actions/findCurrentItem';

const initialState = {};

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case findCurrentItem: {
            return items.find(n => n.id === payload);
        }

        default:
            return state
    }
}
