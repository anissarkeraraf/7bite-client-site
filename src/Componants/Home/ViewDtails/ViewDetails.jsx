import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const details = useLoaderData();
    console.log(details)


    return (
        <div>
            <h2 className="text-3xl">Details</h2>
        </div>
    );
};

export default ViewDetails;