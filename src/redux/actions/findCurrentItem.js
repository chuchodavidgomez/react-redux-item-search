export const type = 'findCurrentItem';

const findCurrentItem = id => ({
    type,
    payload: id
});

export default findCurrentItem;