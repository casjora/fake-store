import MainGrid from "../components/MainGrid"

export default function Home({products}) {
  return (
    <div>
      <div className="flex w-full justify-between px-5">
      <h2>Trending Now</h2>
      <p>Our most popular items this week</p>
      </div>
      <MainGrid data={products}/>
      
    </div>
  )
}
