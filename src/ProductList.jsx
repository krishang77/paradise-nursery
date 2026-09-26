import { PlantCard } from "./components/PlantCard";
import { CATEGORIES, PLANTS } from "./lib/plants";

export function ProductList() {
  return (
    <section id="shop" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12">
      <div className="mb-8 flex items-end justify-between">
        <div><p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Browse by category</p><h2 className="font-display text-4xl tracking-tight sm:text-5xl">The potting bench</h2></div>
        <span className="hidden font-mono text-xs text-muted-foreground sm:block">{PLANTS.length} species · {CATEGORIES.length} categories</span>
      </div>
      {CATEGORIES.map((category) => (
        <div key={category.id} className="mb-12 last:mb-0">
          <div className="mb-5 flex items-center gap-3"><span className="font-mono text-xs text-primary">{category.index}</span><h3 className="font-display text-2xl tracking-tight">{category.label}</h3><span className="h-px flex-1 bg-border" /></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLANTS.filter((plant) => plant.category === category.id).map((plant, index) => <PlantCard key={plant.id} plant={plant} delay={60 * (index + 1)} />)}
          </div>
        </div>
      ))}
    </section>
  );
}
