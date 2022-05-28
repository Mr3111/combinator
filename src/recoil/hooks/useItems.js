import { useRecoilValue } from 'recoil';
import { itemsQuery } from '../atoms/items';

export function usePaginatedItemsValue() {
    const PAGE_SIZE = 10;
    const items = useRecoilValue(itemsQuery);

    const getItems = (pageNumber) => {
        const start = (pageNumber - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        return items.slice(start, end);
    };

    return [getItems, items.length];
}
