import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { App } from "../App.jsx";
import { ProductList } from "../ProductList.jsx";
import { AboutUs } from "../AboutUs.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paradise Nursery — Green things for your brightest corner" },
      {
        name: "description",
        content:
          "Hand-potted houseplants delivered to your door. Browse leafy statement plants, trailing vines, and succulents at Paradise Nursery.",
      },
      { property: "og:title", content: "Paradise Nursery — Green things for your brightest corner" },
      {
        property: "og:description",
        content:
          "Hand-potted houseplants delivered to your door. Browse leafy statement plants, trailing vines, and succulents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <Navbar />

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-5 pt-8">
        <App />
        <div className="mt-5 flex justify-center"><Link to="/cart" className="rounded-full bg-foreground px-6 py-3 font-bold text-cream">View cart</Link></div>
      </main>

      {/* SHOP */}
      <ProductList />
      <AboutUs />

      {/* FOOTER */}
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
