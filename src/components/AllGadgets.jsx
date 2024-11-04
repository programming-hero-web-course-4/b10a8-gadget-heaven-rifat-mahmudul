import { useEffect, useState } from "react"
import Card from "./Card";
import { useParams } from "react-router-dom";
import noData from '../assets/noData.avif'

const AllGadgets = () => {

    const [data, setData] = useState([]);

    const {category} = useParams();

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
        <div>
            {
                data.length === 0 
                
                ? 
    
                <div className="h-[300px]">
                    <img className="h-full rounded-lg" src={noData} alt="" /> 
                </div>
                
                : 
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                    {data.map(item => <Card key={item.product_id} item={item}></Card>)}
                </div>
            }
        </div>
    )
}

export default AllGadgets
