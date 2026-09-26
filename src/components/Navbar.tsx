import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

export function Navbar() {
  const { itemCount, lastAddedAt } = useCart();
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!lastAddedAt) return;
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 650);
    return () => clearTimeout(t);
  }, [lastAddedAt]);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-2xl leading-none tracking-tight">
          PARADISE<span className="text-primary">NURSERY</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium sm:flex">
          <a href="/#shop" className="transition-colors hover:text-primary">
            Shop
          </a>
          <a href="/#shop" className="transition-colors hover:text-primary">
            Collections
          </a>
          <a href="/#shop" className="transition-colors hover:text-primary">
            Care Guides
          </a>
        </nav>
        <Link
          to="/cart"
          className="relative inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-cream ring-1 ring-black/5"
        >
          <span className="text-base leading-none">🪴</span>
          <span>Cart</span>
          <span
            key={lastAddedAt}
            className={`grid size-5 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground ${pulse ? "animate-badge" : ""}`}
          >
            {itemCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
