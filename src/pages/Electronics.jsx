import MainGrid from "../components/MainGrid"

export default function Electronics({products}) {
  return (
    <div>
      <h2>Electronics Collection</h2>
      <MainGrid data={products}/>
      
    </div>
  )
}
