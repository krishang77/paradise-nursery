import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/plants";

export function CartSection() {
  const { lines, itemCount, subtotal, setQty, remove } = useCart();

  return (
    <section id="cart" className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            (c) — Your potting bench
          </p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Cart</h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </span>
      </div>

      {lines.length === 0 ? (
        <div className="rounded-[min(1.5vw,20px)] bg-cream p-10 text-center ring-1 ring-border">
          <p className="font-display text-2xl tracking-tight">Your cart is empty</p>
          <p className="mt-2 text-sm text-muted-foreground">
            The potting bench is full of plants waiting for a bright corner.
          </p>
          <Link
            to="/"
            hash="shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground ring-1 ring-black/5 transition-colors hover:bg-foreground hover:text-cream"
          >
            Shop the nursery →
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            {lines.map(({ plant, qty }) => (
              <div
                key={plant.id}
                className="flex flex-wrap items-center gap-4 rounded-[min(1.5vw,20px)] bg-cream p-4 ring-1 ring-border"
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-20 shrink-0 rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-display text-lg tracking-tight">{plant.name}</h4>
                  <p className="font-mono text-xs text-muted-foreground">
                    {formatPrice(plant.price)} each
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    aria-label={`Decrease ${plant.name} quantity`}
                    onClick={() => setQty(plant.id, qty - 1)}
                    className="grid size-8 place-items-center rounded-full bg-background text-lg font-bold ring-1 ring-border transition-colors hover:bg-foreground hover:text-cream"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-mono text-sm font-medium">{qty}</span>
                  <button
                    aria-label={`Increase ${plant.name} quantity`}
                    onClick={() => setQty(plant.id, qty + 1)}
                    className="grid size-8 place-items-center rounded-full bg-background text-lg font-bold ring-1 ring-border transition-colors hover:bg-foreground hover:text-cream"
                  >
                    +
                  </button>
                </div>
                <div className="w-16 text-right font-mono text-sm font-medium">
                  {formatPrice(plant.price * qty)}
                </div>
                <button
                  onClick={() => remove(plant.id)}
                  className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-[min(1.5vw,20px)] bg-foreground p-6 text-cream ring-1 ring-black/5">
              <h3 className="mb-5 font-display text-2xl tracking-tight">Order summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-cream/70">Subtotal</span>
                  <span className="font-mono">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream/70">Shipping</span>
                  <span className="font-mono">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream/70">Kraft tags</span>
                  <span className="font-mono">Included</span>
                </div>
              </div>
              <div className="my-5 h-px bg-cream/15"></div>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xl tracking-tight">Total</span>
                <span className="font-display text-4xl tracking-tight text-primary">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <button className="mt-6 w-full rounded-full bg-primary py-3.5 text-base font-bold text-primary-foreground ring-1 ring-black/5 transition-colors hover:bg-cream hover:text-foreground">
                Continue to checkout
              </button>
              <p className="mt-3 text-center text-[11px] text-cream/50">
                Demo only — no payment is processed.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
