import { extraDrinks, flavorGroups, menuAdditions, milkChoices } from "@/lib/menu-customization-data";

const label = "mb-3 text-xs font-semibold uppercase tracking-wider text-menu-ink";

export function MenuCustomization({ heading = "Customize." }: { heading?: string }) {
  return (
    <section id="customize" aria-labelledby="customize-heading" className="scroll-mt-40 rounded-xl border border-border-hairline bg-white p-5 sm:p-6 lg:p-8">
      <h2 id="customize-heading" className="mb-6 text-xl font-bold uppercase tracking-tight text-teal-accent">{heading}</h2>

      <div className="mb-6">
        <h3 className={label}>Additions</h3>
        <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {menuAdditions.map((addition) => (
            <div key={addition.name} className="flex justify-between gap-3 border-b border-hairline/40 pb-2">
              <dt className="text-menu-muted">{addition.name}</dt>
              <dd className="shrink-0 font-semibold tabular-nums">{addition.price}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mb-6">
        <h3 className={label}>Alternative Milk</h3>
        <p className="text-sm leading-relaxed text-menu-muted">{milkChoices.map((milk) => milk.name).join(", ")}</p>
      </div>

      <div className="mb-6">
        <h3 className={label}>Extras</h3>
        <dl className="space-y-2 text-sm">
          {extraDrinks.map((drink) => (
            <div key={drink.name} className="flex justify-between gap-3 border-b border-hairline/40 pb-2">
              <dt className="text-menu-muted">{drink.name}{"size" in drink ? ` (${drink.size})` : ""}</dt>
              <dd className="shrink-0 font-semibold tabular-nums">{drink.price}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <h3 className={label}>Flavors</h3>
        <ul aria-label="Available flavors" className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm leading-relaxed text-menu-muted sm:grid-cols-3">
          {flavorGroups.flatMap((group) => group.flavors.map((flavor) => (
            <li key={`${group.name}-${flavor}`}>
              {group.name === "Sugar-free flavors" && !flavor.startsWith("Sf ") ? `Sugar-free ${flavor}` : flavor}
              {group.name === "Seasonal flavors" && <span className="text-xs"> (seasonal)</span>}
            </li>
          )))}
        </ul>
        <p className="mt-4 text-xs italic leading-relaxed text-menu-muted">
          Flavor availability, seasonal selections, and sugar-free options may vary. Please ask in store.
        </p>
      </div>
    </section>
  );
}
