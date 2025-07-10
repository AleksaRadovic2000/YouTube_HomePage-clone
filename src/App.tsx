import { useState } from "react"
import { CategoryPills } from "./components/CategoryPills"
import { PageHeader } from "./components/PageHeader"
import { categories, videos } from "./data/home"
import { VideoGridItem } from "./components/VideoGridItem"
import { SideBar } from "./components/SideBar"
import { SidebarProvider } from "./contexts/SidebarContext"
function App() {
  const [selectedCategry, setSelectedCategory] = useState(categories[0])
  return (
  <SidebarProvider>
  <div className="max-h-screen flex flex-col w-full">
    <PageHeader/>
    <div className="grid flex-grow-1 overflow-auto" 
    style={{'gridTemplateColumns': 'auto 1fr'}}>
      <SideBar />
      <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories}
          selectedCategory={selectedCategry} onSelect={setSelectedCategory} />
        </div>
        <div className="grid gap-4" 
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'

        }}>
        {videos.map(video => (
          <VideoGridItem key={video.id} {...video}/>
        ))}


        </div>
      </div>

    </div>
  </div>
  </SidebarProvider>
)}

export default App
