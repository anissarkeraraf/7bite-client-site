import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import PopularService from "./PopularService/PopularService";
import ExtraOne from "./ExtraSection/ExtraOne";



const Home = () => {

    const treatments = useLoaderData();
    console.log(treatments)

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl font-medium text-center mt-10">This is out popular treatment</h2>
            <p className="md:w-[550px] mx-auto
             font-medium text-center mb-10">Experience a harmonious blend of therapeutic treatments, yoga sessions, and mindfulness practices in a serene and tranquil environment.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 lg:p-10">
                {
                    treatments.slice(0, 6).map(treatment => <PopularService key={treatment._id} treatment={treatment}></PopularService>)
                }
            </div>
            <div className="flex justify-center mt-8">
                <Link to="/allServices" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">Show All</Link>
            </div>
            <ExtraOne></ExtraOne>
        </div>
    );
};

export default Home;