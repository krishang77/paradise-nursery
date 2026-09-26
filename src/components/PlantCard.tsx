import { useCart } from "@/lib/cart";
import { formatPrice, type Plant } from "@/lib/plants";

export function PlantCard({ plant, delay }: { plant: Plant; delay: number }) {
  const { add } = useCart();

  return (
    <div
      className="group animate-rise overflow-hidden rounded-[min(1.5vw,20px)] bg-cream ring-1 ring-border"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={plant.image}
        alt={plant.name}
        loading="lazy"
        width={1024}
        height={1024}
        className="aspect-square w-full object-cover outline-1 -outline-offset-1 outline-black/5"
      />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-xl tracking-tight">{plant.name}</h4>
          <span className="font-mono text-sm font-medium">{formatPrice(plant.price)}</span>
        </div>
        <p className="mt-2 text-sm text-pretty text-muted-foreground">{plant.description}</p>
        <button
          onClick={() => add(plant.id)}
          className="mt-4 w-full rounded-full bg-foreground py-2.5 text-sm font-bold text-cream ring-1 ring-black/5 transition-colors hover:bg-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
