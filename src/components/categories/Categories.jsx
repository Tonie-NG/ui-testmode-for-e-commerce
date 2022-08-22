import './categories.css';
import { categories } from "../../data";
import CategoryItems from '../categoriesitems/CategoryItems';

const Categories = () => {
  return (
    <div className="categoriesContainer">
        {categories.map((item) => (
            <CategoryItems item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories