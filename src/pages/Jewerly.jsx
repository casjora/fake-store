import MainGrid from "../components/MainGrid"
export default function Jewerly({products}) {
  return (
    <div>
      <h2>Jewelry Collection</h2>
      <MainGrid data={products}/>
      
    </div>
  )
}
