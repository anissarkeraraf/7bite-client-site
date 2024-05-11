import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const ServiceCard = ({ card }) => {

    const {user} = useContext(AuthContext);

    const { imageURL, serviceName, price, description, serviceArea, providerEmail, providerImage, providerName } = card;
    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 mt-10 m-5 lg:m-0">

            <div className="relative">
                <img className="w-[600px] h-[250px]" src={imageURL} alt="" />
                <p className="absolute bottom-1 text-white bg-orange-800 w-9 rounded">{price}</p>
            </div>
            <div className="p-6">
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
                
            </div>
        </div>
    );
};

export default ServiceCard;