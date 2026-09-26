import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { PLANTS, type Plant } from "./plants";
import { addItem, removeItem, updateQuantity } from "../CartSlice.jsx";

export interface CartLine {
  plant: Plant;
  qty: number;
}

type CartState = Record<string, number>;

type CartAction =
  | { type: "add"; id: string }
  | { type: "remove"; id: string }
  | { type: "setQty"; id: string; qty: number };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add":
      return addItem(state, action.id);
    case "remove":
      return removeItem(state, action.id);
    case "setQty": {
      return updateQuantity(state, action.id, action.qty);
    }
  }
}

interface CartContextValue {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  add: (id: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  lastAddedAt: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {});
  const [lastAddedAt, setLastAddedAt] = useState(0);

  const value = useMemo<CartContextValue>(() => {
    const lines = Object.entries(state)
      .map(([id, qty]) => {
        const plant = PLANTS.find((p) => p.id === id);
        return plant ? { plant, qty } : null;
      })
      .filter((l): l is CartLine => l !== null);
    const itemCount = lines.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = lines.reduce((sum, l) => sum + l.qty * l.plant.price, 0);
    return {
      lines,
      itemCount,
      subtotal,
      add: (id) => {
        dispatch({ type: "add", id });
        setLastAddedAt(Date.now());
      },
      remove: (id) => dispatch({ type: "remove", id }),
      setQty: (id, qty) => dispatch({ type: "setQty", id, qty }),
      lastAddedAt,
    };
  }, [state, lastAddedAt]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
