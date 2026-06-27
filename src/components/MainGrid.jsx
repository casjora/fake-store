import { Link } from "react-router-dom";

export default function MainGrid({data}) {
  return (
    <section>
      <div>
        <h2>New Arrivals</h2>
        <span>See All</span>
      </div>
      <div className="grid grid-cols-2">
      {data.map((item,i)=>
      
      (
        <article key={i} >
         <Link to={`/product/${item.id}`}> <img src={item.image} alt={item.id} /></Link>
          <h3>{item.category}</h3>
          <h4>{item.title}</h4>
          <em>{item.price.toFixed(2)}</em>
        </article>
      )
      )}
      </div>
      
    </section>
  )
}
