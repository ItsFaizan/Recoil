import {atom, selector} from 'recoil';

export const recoilCount = atom({
    key: 'count',
    default: 0,
});

export const modifier = atom({
    key: 'modifier',
    default: 0
})

export const recoilSelector = selector({
    key: 'modified-count',
    get: ({get}) => {
        const count = get(recoilCount);
        const currentmodifier = get(modifier);
        return count * currentmodifier;
    }
})