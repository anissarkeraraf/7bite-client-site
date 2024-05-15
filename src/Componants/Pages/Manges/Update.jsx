import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const services = useLoaderData();
    console.log(services)
    const { imageURL, _id, serviceName, price, description, serviceArea, providerEmail, providerImage, providerName } = services;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const providerEmail = form.providerEmail.value;
        const providerImage = form.providerImage.value;
        const providerName = form.providerName.value;

        const services = { serviceName, price, serviceArea, providerEmail, providerImage, providerName };
        console.log(services);

        fetch(`https://assignment-eleven-server-taupe.vercel.app/service/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your service updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }


        return (
            <div>
                <Helmet>
                    <title>Update Service | 7Bite</title>
                </Helmet>
                <h1 className="text-4xl font-medium text-center my-10">Update Your Own Service : {serviceName}</h1>
                <form onSubmit={handleUpdate} className="p-5">
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Servic Name :</span>
                                </div>
                                <input type="text" name="serviceName" defaultValue={serviceName} placeholder="Service Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Price :</span>
                                </div>
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Service Area :</span>
                                </div>
                                <input type="text" name="serviceArea" defaultValue={serviceArea} placeholder="Service Area" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Provider Email :</span>
                                </div>
                                <input type="text" name="providerEmail" defaultValue={providerEmail} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Provider Image :</span>
                                </div>
                                <input type="text" name="providerImage" defaultValue={providerImage} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Provider Name :</span>
                                </div>
                                <input type="text" name="providerName" defaultValue={providerName} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:w-full">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">imageURL :</span>
                            </div>
                            <input type="text" name="imageURL" defaultValue={imageURL} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Update" className="p-3 text-white rounded-lg bg-[#7AA93C] w-full mt-10" />
                </form>
            </div>
        );
    };

    export default Update