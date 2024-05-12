import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const PopularService = ({ treatment }) => {

    const { user } = useContext(AuthContext)
    const { imageURL, _id, serviceName, price, description, serviceArea, providerEmail, providerImage, providerName } = treatment;

    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 mt-10">

            <div className="relative">
                <img className="w-[600px] h-[250px]" src={imageURL} alt="" />
                <p className="absolute bottom-1 text-white bg-orange-800 w-9 rounded">{price}</p>
            </div>
            <div className="p-3">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{serviceName}</span>
                    <p className="text-xl font-medium">{description.slice(0, 50)}</p>

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
                <Link to={`/details/${_id}`}>
                    <input className="bg-[#1F2937] text-white p-3 w-full rounded" type="submit" value="View Detail" />
                </Link>
            </div>
        </div>
    );
};

export default PopularService;