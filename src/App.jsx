/* Estados y routing */
import { useState,useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'

/* Paginas de la OPA */
import Electronics from './pages/Electronics'
import Home from './pages/Home'
import Jewerly from './pages/Jewerly'
import Men from './pages/Men'
import Women from './pages/Women'

//Componentes necesarios en todas las paginas:
import NavBar from './components/NavBar'
import Banner from './components/Banner'




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

    const filtroElectronics =products.filter(p=>p.category==="electronics")
    const filtroJewerly =products.filter(p=>p.category==="jewelery")
    const filtroMen =products.filter(p=>p.category==="men's clothing")
    const filtroWomen =products.filter(p=>p.category==="women's clothing")

  

  return (
    <>
      <NavBar/>
      <Banner/>
      <Routes>
        <Route path='/' element={<Home products={products}/>} />
        <Route path='/electronics' element={<Electronics products={filtroElectronics} />} />
        <Route path='/jewerly' element={<Jewerly products={filtroJewerly} />} />
        <Route path='/men' element={<Men products={filtroMen} />} />
        <Route path='/women' element={<Women products={filtroWomen} />} />
      </Routes>

    </>
  )
}

export default App
