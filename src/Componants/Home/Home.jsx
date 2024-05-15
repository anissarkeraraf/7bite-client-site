import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import PopularService from "./PopularService/PopularService";
import ExtraOne from "./ExtraSection/ExtraOne";
import ExtraTwo from "./ExtraSection/ExtraTwo";
import ExtraThree from "./ExtraSection/ExtraThree";
import { Helmet } from "react-helmet";

const Home = () => {
    const [treatments, setTreatments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTreatments = async () => {
            try {
                // console.log("Fetching treatments...");

                const response = await fetch('https://assignment-eleven-server-taupe.vercel.app/service');
                // console.log("Response status:", response.status);

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Fetched data:", data);

                if (!Array.isArray(data)) {
                    throw new Error("Data format is incorrect");
                }

                setTreatments(data);
            } catch (error) {
                console.error("Failed to load treatments", error);
                setError('Failed to load treatments');
            } finally {
                setLoading(false);
            }
        };

        fetchTreatments();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Home | 7Bite</title>
            </Helmet>
            <Banner />
            <h2 className="text-3xl font-medium text-center mt-10">This is our popular treatment</h2>
            <p className="md:w-[550px] mx-auto font-medium text-center mb-10">
                Experience a harmonious blend of therapeutic treatments, yoga sessions, and mindfulness practices in a serene and tranquil environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 lg:p-10">
                {loading ? (
                    <p className="text-center col-span-full">Loading treatments...</p>
                ) : error ? (
                    <p className="text-center col-span-full">{error}</p>
                ) : treatments.length > 0 ? (
                    treatments.slice(0, 6).map(treatment => (
                        <PopularService key={treatment._id} treatment={treatment} />
                    ))
                ) : (
                    <p className="text-center col-span-full">No treatments available at the moment.</p>
                )}
            </div>
            <div className="flex justify-center mt-8">
                <Link to="/allServices" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">
                    Show All
                </Link>
            </div>
            <ExtraOne />
            <ExtraTwo />
            <ExtraThree />
        </div>
    );
};

export default Home;
