import { useState } from 'react'
import Showcase from '../core/ui/Showcase'
import { componentsList } from '../config/registry'

export default function ComponentsLibrary() {
  const dynamicCategories = [...new Set(componentsList.map((i) => i.category))]
  const categories = dynamicCategories.sort((a, b) => {
    if (a === 'Getting Started') return -1
    if (b === 'Getting Started') return 1
    return a.localeCompare(b)
  })

  const [activeCategory, setActiveCategory] = useState(categories[0] || '')
  
  // Filtra per categoria e ordina: i componenti "featured" (la versione Jackal) vanno in cima
  const filteredItems = componentsList
    .filter((i) => i.category === activeCategory)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })

  return (
    <div className="mx-auto flex max-w-7xl items-start gap-8 px-6 py-12">
      <aside className="sticky top-28 hidden w-56 shrink-0 flex-col gap-2 lg:flex">
        <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-back">
          Categories
        </h3>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              activeCategory === cat 
                ? 'bg-earth font-medium text-sand' 
                : 'text-back hover:bg-earth/50 hover:text-sand'
            }`}
          >
            {cat}
          </button>
        ))}
      </aside>

      <main className="min-w-0 flex-1 flex flex-col gap-12">
        <div className="border-b border-earth pb-8">
          <h2 className="text-3xl font-bold text-sand">
            {activeCategory}
          </h2>
          <p className="mt-2 text-back">
            {activeCategory === 'Getting Started' 
              ? 'Everything you need to set up and use Jackal UI components.'
              : 'Explore previews, click "Show code" and paste it into your project.'}
          </p>
        </div>
        
        <div className="flex flex-col gap-16">
          {filteredItems.map((item) => (
            item.isDoc ? (
              <div key={item.id} className="text-sand/90">
                {item.component}
              </div>
            ) : (
              <Showcase 
                key={item.id} 
                title={item.title} 
                description={item.description} 
                code={item.code}
              >
                {item.component}
              </Showcase>
            )
          ))}
        </div>
      </main>
    </div>
  )
}