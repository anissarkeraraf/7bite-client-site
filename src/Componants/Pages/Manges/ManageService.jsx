import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageService = () => {

    const { user } = useContext(AuthContext);
    // console.log(user.email)
    const [manages, setManages] = useState([]);
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setManages(data)
            })
    }, [manages])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/service/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            const updatedValues = values.filter(item => item._id !== id);
                            setValues(updatedValues);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Spot deleted successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="mt-16">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Service Area</th>
                            <th>price</th>
                            <th>Provider Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manages.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.serviceName}</td>
                                <td>{item.serviceArea}</td>
                                <td>{item.price}</td>
                                <td>{item.providerName}</td>
                                <td>
                                    <Link to={`/update/${item._id}`}>
                                        <button className="bg-[#33B249] mb-1 md:mb-0 mr-2 text-white rounded p-1">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(item._id)} className="bg-[#33B249] text-white rounded p-1">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;