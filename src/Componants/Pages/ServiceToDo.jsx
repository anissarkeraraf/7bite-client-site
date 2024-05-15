import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
const BookedService = () => {
    const { user } = useContext(AuthContext);
    const [bookes, setBookes] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-eleven-server-taupe.vercel.app/services/${user.email}`)
                .then(res => res.json())
                .then(data => setBookes(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [user?.email]);

    const handleStatusChange = (id, status) => {
        fetch(`https://assignment-eleven-server-taupe.vercel.app/service/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(updatedItem => {
                setBookes(prevBookes => prevBookes.map(item => 
                    item._id === id ? { ...item, status: updatedItem.status } : item
                ));
            })
            .catch(error => console.error('Error updating status:', error));
    };

    return (
        <div>
            <Helmet>
                <title>Booked Service | 7Bite</title>
            </Helmet>
            <div className="overflow-x-auto mt-20">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Provider Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookes.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center">No bookings found</td>
                            </tr>
                        ) : (
                            bookes.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.serviceName}</td>
                                    <td>{item.date}</td>
                                    <td>{item.price}</td>
                                    <td>{item.providerName}</td>
                                    
                                    <td>
                                        <select
                                            value={item.status}
                                            onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                            className="dropdown-select"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Working">Working</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default BookedService;
