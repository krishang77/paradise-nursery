import { useEffect, useMemo, useState } from "react";
import { PLANTS, formatPrice } from "./lib/plants";

const CART_KEY = "paradise-nursery-cart";

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartItem() {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const cartProducts = useMemo(() => {
    return cart
      .map((item) => {
        const plant = PLANTS.find((p) => p.id === item.id);

        if (!plant) return null;

        return {
          ...plant,
          quantity: item.quantity,
        };
      })
      .filter(Boolean);
  }, [cart]);

  const totalItems = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const continueShopping = () => {
    window.location.hash = "shop";
  };

  const checkout = () => {
    alert("Coming Soon");
  };

  if (cartProducts.length === 0) {
    return (
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="rounded-2xl border border-border bg-card p-10 text-center">
          <h1 className="font-display text-4xl">
            Your Shopping Cart
          </h1>

          <p className="mt-4 text-muted-foreground">
            Your cart is currently empty.
          </p>

          <button
            type="button"
            onClick={continueShopping}
            className="mt-8 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Paradise Nursery
        </p>

        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Shopping Cart
        </h1>

        <p className="mt-3 text-muted-foreground">
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
        <div className="space-y-4">
          {cartProducts.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-2xl">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Unit Price: {formatPrice(item.price)}
                  </p>

                  <p className="mt-2 font-semibold">
                    Item Total: {formatPrice(itemTotal)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center overflow-hidden rounded-full border border-border">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-4 py-2 text-lg"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span className="min-w-10 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="px-4 py-2 text-lg"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="rounded-full border border-red-300 px-4 py-2 text-sm text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">
            Cart Summary
          </h2>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-muted-foreground">
              Total Items
            </span>

            <strong>{totalItems}</strong>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-muted-foreground">
              Total Price
            </span>

            <strong className="text-xl">
              {formatPrice(cartTotal)}
            </strong>
          </div>

          <button
            type="button"
            onClick={checkout}
            className="mt-6 w-full rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
          >
            Checkout
          </button>

          <button
            type="button"
            onClick={continueShopping}
            className="mt-3 w-full rounded-full border border-border px-5 py-3 font-semibold"
          >
            Continue Shopping
          </button>
        </aside>
      </div>
    </section>
  );
}

export default CartItem;
