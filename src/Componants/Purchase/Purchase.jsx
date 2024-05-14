import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    console.log(id)

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setProduct(null);
            });
    }, [id]);

    const handleAddDoctorsServices = e => {
        e.preventDefault();

        const form = e.target;
        const serviceId = form.serviceId.value;
        const imageURL = form.imageURL.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const providerEmail = form.providerEmail.value;
        const email = form.email.value;
        const displayName = form.displayName.value;
        const providerName = form.providerName.value;
        const date = form.date.value;
        const address = form.address.value;
        const doctorServices = { imageURL, serviceId, email, displayName, date, address, serviceName, price, providerEmail, providerName };
        console.log(doctorServices);

        if (user.email === providerEmail) {
            return toast('Action not permitted')
        }

        fetch('http://localhost:5000/purchase', {
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
                        text: 'Purchase added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }



    console.log(product);

    return (
        <div className="mt-16">
            {/* <h1 className="text-4xl font-medium text-center mb-10">Book Now Your Service : {product.serviceName}</h1> */}
            {product && (
                <form onSubmit={handleAddDoctorsServices} className="mx-5">
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text"> Service Id :</span>
                                </div>
                                <input type="text" name="serviceId" defaultValue={product._id} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Service Name :</span>
                                </div>
                                <input type="text" name="serviceName" defaultValue={product.serviceName} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="md:w-1/2 mr-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Service Image :</span>
                                </div>
                                <input type="text" name="imageURL" defaultValue={product.imageURL} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Provider Email :</span>
                                </div>
                                <input type="text" name="providerEmail" defaultValue={product.providerEmail} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Provider Name :</span>
                                </div>
                                <input type="text" name="providerName" defaultValue={product.providerName} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Price :</span>
                                </div>
                                <input type="text" name="price" defaultValue={product.price} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {
                        user && <div className="flex mb-8">
                            <div className="md:w-1/2">
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Current User email :</span>
                                    </div>
                                    <input type="text" name="email" defaultValue={user.email} readOnly className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="md:w-1/2 ml-4">
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Current User Name :</span>
                                    </div>
                                    <input type="text" name="displayName" defaultValue={user.displayName} readOnly className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    }
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Service Taking Date :</span>
                                </div>
                                <input type="date" name="date" id="" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Address :</span>
                                </div>
                                <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Purchase" className="p-3 text-white rounded-lg bg-[#7AA93C] w-full" />
                </form>
            )}
            <ToastContainer />
        </div>
    );
};

export default Purchase;
