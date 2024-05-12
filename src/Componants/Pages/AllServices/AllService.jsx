import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const AllService = () => {
    const cards = useLoaderData();


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 mt-16">
                {
                    cards.map(card => <ServiceCard key={card._id} card={card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllService;