import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet";

const AllService = () => {
    const allCards = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCards, setFilteredCards] = useState(allCards);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        const query = searchQuery.toLowerCase();
        // Filter cards based on the search query
        const filtered = allCards.filter(card =>
            card.title?.toLowerCase().includes(query)
        );
        // Update the state with filtered cards
        setFilteredCards(filtered);
    };

    const handleServiceNameClick = (serviceName) => {
        setSearchQuery(serviceName); 
        handleSearchClick(); 
    };

    return (
        <div>
            <Helmet>
                <title>Services | 7Bite</title>
            </Helmet>
            <div className="p-5 mt-16">
                <div className="mb-5 flex">
                    <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                        onClick={handleServiceNameClick}
                        className="ml-2 p-2 bg-blue-500 text-white rounded"
                    >
                        Search
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredCards.map(card => (
                        <ServiceCard key={card._id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllService;
