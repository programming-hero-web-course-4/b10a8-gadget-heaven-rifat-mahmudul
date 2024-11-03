import { useState } from "react"
import { useEffect } from "react"
import { NavLink } from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('Categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="border border-gray-300 shadow-lg rounded-lg px-3 pt-3 mb-10 sm:mb-0">
            <NavLink to="/" className='block bg-gray-300 mb-5 text-center px-16 py-3 rounded-3xl font-semibold' >
                <button>All Product</button>
            </NavLink>
            {
                categories.map(category => <NavLink to={`/category/:${category.category}`} className='block bg-gray-300 mb-5 text-center px-16 py-3 rounded-3xl font-semibold' key={category.product_id}>{category.category}</NavLink>)
            }
        </div>
    )
}

export default Categories
