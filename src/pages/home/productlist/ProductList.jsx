import { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../../../components/announcement/Announcement";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import Newsletter from "../../../components/newsletter/Newsletter";
import Products from "../../../components/products/Products";
import "./productlist.css";

const ProductList = () => {
  const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  //To get the exact path of a product using the loaction
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      [e.target.name]: value,
    });
  };

  return (
    <div className="productlistContainer">
      <Navbar />
      <Announcement />
      <h1 className="plTitle">
        {category[0].toUpperCase() + category.substring(1)}
      </h1>
      <div className="plFilterContainer">
        <div className="plFilter">
          <div className="plFilterText">Filter</div>
          <select
            name="color"
            id=""
            className="plSelect"
            onChange={handleFilters}
          >
            <option value="" className="plOptions" disabled>
              Color
            </option>
            <option value="white" className="plOptions">
              White
            </option>
            <option value="black" className="plOptions">
              Black
            </option>
            <option value="red" className="plOptions">
              Red
            </option>
            <option value="blue" className="plOptions">
              Blue
            </option>
            <option value="yellow" className="plOptions">
              Yellow
            </option>
            <option value="green" className="plOptions">
              Green
            </option>
          </select>
          <select
            name="size"
            id=""
            className="plSelect"
            onChange={handleFilters}
          >
            <option value="" className="plOptions" disabled>
              Size
            </option>
            <option value="M" className="plOptions">
              M
            </option>
            <option value="L" className="plOptions">
              L
            </option>
            <option value="S" className="plOptions">
              S
            </option>
            <option value="XS" className="plOptions">
              XS
            </option>
            <option value="XL" className="plOptions">
              XL
            </option>
            <option value="XXL" className="plOptions">
              XXL
            </option>
          </select>
        </div>
        <div className="plFilter">
          <div className="plFilterText">Sort</div>
          <select
            name=""
            id=""
            className="plSelect"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest" className="plOptions">
              New Arrivals
            </option>
            <option value="asc" className="plOptions">
              Price (asc)
            </option>
            <option value="desc" className="plOptions">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
