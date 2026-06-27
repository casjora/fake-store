import { useParams } from "react-router-dom"
import MainGrid from "../components/MainGrid"

export default function CategoryPage({products}) {
  const {category}=useParams()

  const categoryOptions = products.filter(product => {
    const apiCategory = product.category.toLowerCase()
    const urlCategory = category.toLowerCase()

    return apiCategory.startsWith(urlCategory)
  })
  
  const titulo = `${category.charAt(0).toUpperCase()}${category.slice(1)}`



  return (
      <div className="py-6">
        <div className="flex w-full justify-between px-5 my-5">
        <h2 className="text-2xl font-bold">{titulo} Collection</h2>
        <p className="text-gray-500">Discover our {titulo} items</p>
        </div>
        {categoryOptions.length>0 ?(
          <MainGrid data={categoryOptions}/>
        ):<p>No products found</p> }
        
        
      </div>
    )
}
