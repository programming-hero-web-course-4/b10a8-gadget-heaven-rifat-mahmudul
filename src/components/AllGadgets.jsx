import { useEffect, useState } from "react"
import Card from "./Card";
import { useParams } from "react-router-dom";

const AllGadgets = () => {

    const [data, setData] = useState([]);

    const {category} = useParams();
    console.log(category)

    useEffect(() => {
        fetch('/Data.json')
        .then(res => res.json())
        .then(data => {
            if(category){
                const filteredData = data.filter(p => p.category === category);
                setData(filteredData);
            }
            else{
                setData(data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [category])

    return (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {
                data.map(item => <Card key={item.product_id} item={item}></Card>)
            }
        </div>
    )
}

export default AllGadgets
