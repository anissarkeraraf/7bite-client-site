import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import ServiceCard from "./ServiceCard";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AllService = () => {
    const [cards, setCards] = useState([]); // Ensure cards is always an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://assignment-eleven-server-taupe.vercel.app/service')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Services | 7Bite</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 mt-16">

                {
                    cards.map(card => (
                        <div className=" overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 mt-10">

                        <div className="relative">
                            <img className="w-[600px] h-[250px]" src={card.imageURL} alt="" />
                            <p className="absolute bottom-1 text-white bg-orange-800 w-9 rounded">{card.price}</p>
                        </div>
                        <div className="p-3">
                            <div>
                                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{card.serviceName}</span>
                                <p className="text-xl font-medium">{card.description.slice(0, 50)}</p>
            
                            </div>
            
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {
                                            user && <>
                                                <img className="rounded-full w-10 h-10 mr-4" src={user.photoURL} alt="" />
                                                <p>{user.displayName}</p>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <Link to={`/details/${card._id}`}>
                                <input className="bg-[#1F2937] text-white p-3 w-full rounded" type="submit" value="View Detail" />
                            </Link>
                        </div>
                    </div>
                    ))
                }

            </div>
        </div>
    );
};

export default AllService;
