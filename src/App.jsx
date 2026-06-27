/* Estados y routing */
import { useState,useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'

/* Paginas de la OPA */
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductDescription from './pages/ProductDescription'

//Componentes necesarios en todas las paginas:
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Footer from './components/Footer'



import './App.css'
//import FakeAPI from './components/FakeAPI'

function App() {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=> {
    async function db(params) {
      
    
    try {
      let response = await fetch("https://fakestoreapi.com/products")
      let data = await response.json()
      setProducts(data)
      
    } catch (error) {
      console.error("Error cargando el API de Fake Store, ",error)
      
    }finally {
      setLoading(false)
    }
    }db()
  },[])

  if (loading){
    return (
      <div>
        <p>Cargando informacion</p>
      </div>
    )}

    /* const filtroElectronics =products.filter(p=>p.category==="electronics")
    const filtroJewerly =products.filter(p=>p.category==="jewelery")
    const filtroMen =products.filter(p=>p.category==="men's clothing")
    const filtroWomen =products.filter(p=>p.category==="women's clothing") */

  

  return (
    <>
      <NavBar/>
      <Banner/>
      <Routes>
        <Route path='/' element={<Home products={products}/>} />
        <Route path='/category/:category' element={<CategoryPage products={products}/>} />
        <Route path='/product/:id' element={<ProductDescription products={products}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
