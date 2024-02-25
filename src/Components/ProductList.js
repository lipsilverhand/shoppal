import { useCallback, useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch";
import Loading from "../assests/giphy.gif";

export const ProductList = () => {

    const [url, setUrl] = useState("http://localhost:8000/products");

    const { data: products, loading } = useFetch(url);

    
  return (
    <section>
        <div className="filter">
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?available=true")}>In Stock</button>
        </div>

        { loading && <p className="loading"><img src={Loading} alt="" /></p>}

        { products && products.map((product) => (
            <div className="card" key={product.id}>
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                    <span className="price">${product.price}</span>
                    <span className={product.available ? "instock" : "outstock"}>{product.available ? "In Stock" : "Unavailable"}</span>
                </p>
            </div>
        )) }
    </section>
  )
}
