declare module "*.jsx" {
  import type { ComponentType } from "react";

  export const App: ComponentType;
  export const AboutUs: ComponentType;
  export const ProductList: ComponentType;
  export const CartItem: ComponentType;
  export function addItem(state: Record<string, number>, id: string): Record<string, number>;
  export function removeItem(state: Record<string, number>, id: string): Record<string, number>;
  export function updateQuantity(
    state: Record<string, number>,
    id: string,
    quantity: number,
  ): Record<string, number>;
}
