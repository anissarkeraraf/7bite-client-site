import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://assignment-eleven-server-taupe.vercel.app/service/${id}`);
                console.log("Response status:", response.status);

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Fetched data:", data);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Failed to load product');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddDoctorsServices = async (e) => {
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
            return toast('Action not permitted');
        }

        try {
            const response = await fetch('https://assignment-eleven-server-taupe.vercel.app/purchase', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(doctorServices)
            });

            const data = await response.json();
            console.log(data);

            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Purchase added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                form.reset();
            }
        } catch (error) {
            console.error('Error adding purchase:', error);
            toast('Failed to add purchase');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    return (
        <div className="mt-16">
            <form onSubmit={handleAddDoctorsServices} className="mx-5">
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Service Id :</span>
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
                {user && (
                    <div className="flex mb-8">
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
                )}
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
            <ToastContainer />
        </div>
    );
};

export default Purchase;
