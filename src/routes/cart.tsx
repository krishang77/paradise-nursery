import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CartItem } from "../CartItem.jsx";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Paradise Nursery" },
      {
        name: "description",
        content: "Review your plants, adjust quantities, and see your total at Paradise Nursery.",
      },
      { property: "og:title", content: "Your Cart — Paradise Nursery" },
      {
        property: "og:description",
        content: "Review your plants, adjust quantities, and see your total at Paradise Nursery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <Navbar />
      <CartItem />
      <footer className="mt-8 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
          <span className="font-display text-xl tracking-tight">
            PARADISE<span className="text-primary">NURSERY</span>
          </span>
          <p className="font-mono text-xs text-muted-foreground">
            Potted with care · Shipped in recycled boxes
          </p>
        </div>
      </footer>
    </div>
  );
}
