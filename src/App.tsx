import { useState } from "react"
import { CategoryPills } from "./components/CategoryPills"
import { PageHeader } from "./components/PageHeader"
import { categories } from "./data/home"
function App() {
  const [selectedCategry, setSelectedCategory] = useState(categories[0])
  return <div className="max-h-screen flex flex-col">
    <PageHeader/>
    <div className="grid  flex-grow-1 overflow-auto" 
    style={{'gridTemplateColumns': 'auto 1fr'}}>
      <div>Sidebar</div>
      <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 bg-white-500 z-10 pb-4">
          <CategoryPills categories={categories}
          selectedCategory={selectedCategry} onSelect={setSelectedCategory} />
        </div>
      </div>
    </div>
  </div>
}

export default App
