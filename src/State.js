import {atom, selector} from 'recoil';

export const recoilCount = atom({
    key: 'count',
    default: 0,
});