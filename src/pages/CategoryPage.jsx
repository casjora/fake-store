import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
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
      <div>
        <div className="flex w-full justify-between px-5">
        <h2>{titulo} Collection</h2>
        <p>Discover our {titulo} items</p>
        </div>
        {categoryOptions.length>0 ?(
          <MainGrid data={categoryOptions}/>
        ):<p>No products found</p> }
        
        
      </div>
    )
}
