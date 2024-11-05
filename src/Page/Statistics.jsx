import { Helmet } from "react-helmet-async";
import { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { showContext } from "../Provider/ShowProvider";

const Statistics = () => {
    const { cart } = useContext(showContext);

    const data = cart.map(item => ({
        name: item.product_title, 
        price: item.price
    }));

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : $${payload[0].value}`}</p>
                    <p className="desc">This product's price is shown in the chart.</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-[#F7F7F7] max-w-full mt-5 pb-10">
            <Helmet>
                <title>Gadget Heaven || Statistics</title>
            </Helmet>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    layout="horizontal"
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="category" dataKey="name" label={{ value: 'Product', angle: -90, position: 'insideLeft' }} />
                    <YAxis type="number" dataKey="price" label={{ value: 'Price', position: 'insideBottom', offset: -5 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="price" barSize={20} fill="#9333ea" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
