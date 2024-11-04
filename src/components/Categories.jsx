import { useState } from "react"
import { useEffect } from "react"
import { NavLink } from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('/Categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="border border-gray-300 shadow-lg rounded-lg px-3 pt-3 mb-10 sm:mb-0">
            {
                categories.map(category => <NavLink to={`/category/${category.category}`} className={({isActive}) => `${isActive ? `bg-purple-600 block text-center px-12 py-3 rounded-3xl font-semibold mb-5` : `block bg-gray-300 mb-5 text-center px-12 py-3 rounded-3xl font-semibold hover:bg-purple-600`}`} key={category.product_id}>{category.category}</NavLink>)
            }
        </div>
    )
}

export default Categories
