import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddService = () => {

    const { user } = useContext(AuthContext);

    const handleAddDoctorsServices = e => {
        e.preventDefault();
        const form = e.target;
        const imageURL = form.imageURL.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const providerEmail = form.providerEmail.value;
        const providerImage = form.providerImage.value;
        const providerName = form.providerName.value;
        const doctorServices = { imageURL, serviceName, price, description, serviceArea, providerEmail, providerImage, providerName };
        console.log(doctorServices);

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(doctorServices)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spots added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className=" mt-20 bg-base-200 p-4 md:p-8 lg:p-10">
            <h2 className="text-4xl font-medium text-center mb-10">Make your own services</h2>
            <form onSubmit={handleAddDoctorsServices}>
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">imageURL :</span>
                            </div>
                            <input type="text" name="imageURL" placeholder="imageURL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> Service Name :</span>
                            </div>
                            <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> Price :</span>
                            </div>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Service Area :</span>
                            </div>
                            <input type="text" name="serviceArea" placeholder="Service Area" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> Description :</span>
                            </div>
                            <input type="text" name="description" placeholder=" Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Provider Email :</span>
                            </div>
                            <input type="email" name="providerEmail" defaultValue={user.email} placeholder="Provider Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Provider Image :</span>
                            </div>
                            <input type="text" name="providerImage" defaultValue={user.photoURL} placeholder="Provider Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Provider Name :</span>
                            </div>
                            <input type="text" name="providerName" defaultValue={user.displayName} placeholder="Provider Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add" className="p-3 text-white rounded-lg bg-[#7AA93C] w-full" />
            </form>
        </div>
    );
};

export default AddService;