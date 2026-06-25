import { useState, useEffect } from "react";

export default function FakeAPI() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function db(params) {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setApi(data);
      } catch (error) {
        console.error(error);
      }
    }
    db();
  }, []);

  return (
    <div>
      <p>Estas son las propiedades del API:</p>
      <ul>
        {/* Aseguramos que 'api' exista Y que tenga al menos un producto adentro */}
        {api.length > 0 &&
          Object.keys(api[0]).map((propiedad, i) => (
            <li key={i}>{propiedad}</li>
          ))}
      </ul>
      <p>Objeto Completo:</p>
      {api.map((articulo, i) => (
        <div key={i}>
        <li key={i}>{articulo.title}</li>
        <img src={articulo.image} alt="" />
        </div>
      ))}
    </div>
  );
}
