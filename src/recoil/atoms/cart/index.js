import { atom } from 'recoil';

export const cartAtom = atom({
    key: 'cart',
    default: { fe: "React", be: null, db: null, deployment: null },
});

export const cartLengthAtom = atom({
    key: 'cartLength',
    get: ({ get }) => {
        const items = get(cartAtom);
        return items.length;
    },
});
