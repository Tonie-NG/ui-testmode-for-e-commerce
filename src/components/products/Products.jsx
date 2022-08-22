import axios from "axios";
import { useEffect, useState } from "react";
import { popularProducts } from "../../data";
import Product from "../Product/Product";
import "./products.css";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://tonie-e-commerce-store.herokuapp.com/api/products?category=${category}`
            : "https://tonie-e-commerce-store.herokuapp.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct((previous) =>
        [...previous].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProduct((previous) =>
        [...previous].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProduct((previous) =>
        [...previous].sort((a, b) => a.price - b.price)
      );
    }
  }, [sort]);

  return (
    <div className="productsContainer">
      {category
        ? filteredProduct.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};

export default Products;
