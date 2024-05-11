import { useLoaderData } from "react-router-dom";

const AllServices = () => {
    const { items } = useLoaderData();
    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    {/* Render content for each item here */}
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    {/* You can add more elements to display other properties of the item */}
                </div>
            ))}
        </div>
    );
};

export default AllServices;
