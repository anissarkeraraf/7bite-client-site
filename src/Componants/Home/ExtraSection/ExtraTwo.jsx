import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

const ExtraTwo = () => {
    const [extra, setExtra] = useState([]);

    useEffect(() => {
        fetch('/public/extraTwo.json')
            .then(res => res.json())
            .then(data => {
                setExtra(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(extra);

    return (
        <div>
            <h1 className="text-5xl font-medium text-center mt-10 mb-5">LATEST NEWS</h1>
            <p className="md:text-xl md:w-[700px] mx-auto text-center">Read our latest news from the company or general medical news. Feel free to ask questions in comments for any news you find interesting.</p>
            {extra.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                    {extra.map((item, index) => (
                        <div key={item.id} className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img className="w-full h-[200px]" src={item.image} alt="" />
                            <div className="py-5">
                                <p className="flex items-center"><MdOutlineUpdate className="text-xl mr-3" /><span>{item.date}</span></p>

                                <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{item.title}</a>
                                <span className="text-sm text-gray-700 dark:text-gray-200">{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default ExtraTwo;
