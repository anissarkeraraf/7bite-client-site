
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const ViewDetails = () => {

    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    console.log(details)
    const { imageURL, serviceName, _id, price, description, serviceArea, providerEmail, providerImage, providerName } = details;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target.value;
        const serviceTakingDate = form.serviceTakingDate.value;
        const SpecialInstruction = form.SpecialInstruction.value
        console.log(serviceTakingDate, SpecialInstruction)

    };

    return (
        <div>
            <div className="bg-[#A5A5A5] w-full bg-opacity-50 mb-10 mt-10">
                <h2 className="text-4xl text-center py-5 font-bold">Details of tourist spot : <span className="text-[#C53701] opacity-70">{serviceName}</span></h2>
                <div className="p-28 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="">
                        <img className="rounded-xl p-10 w-1/2 mx-auto" src={imageURL} alt="" />
                    </div>
                    <div className="p-3 ml-80">
                        <div>
                            <span className="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">{price}</span>
                            <p className="text-xl font-medium w-[450px]">{description}</p>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">

                                    <img className="rounded-full w-10 h-10 mr-4" src={providerImage} alt="" />
                                    <p>{providerName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 ml-80">

                        <input     className="bg-[#1F2937] text-white p-3 w-3/5 rounded" type="submit" value="Book Now" />

                    </div>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

        </div>
    );
};

export default ViewDetails;