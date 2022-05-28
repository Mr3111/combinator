import { useRecoilState, useRecoilValue } from "recoil";
import { cartAtom, cartLengthAtom } from "../atoms/cart";

export function useCart() {
  const [itemsInCart, setItemsInCart] = useRecoilState(cartAtom);

  const addItem = (id: string, value: { value: string, label: string }) => {
    setItemsInCart((prevItems: any) => ({ ...prevItems, id: value }));
  };
  return [
    itemsInCart,
    addItem,
  ];
}

export function useCartCount() {
  return useRecoilValue(cartLengthAtom);
}
