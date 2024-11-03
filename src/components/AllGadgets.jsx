import { useEffect, useState } from "react"
import Card from "./Card";

const AllGadgets = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {
                data.map(item => <Card key={item.product_id} item={item}></Card>)
            }
        </div>
    )
}

export default AllGadgets
