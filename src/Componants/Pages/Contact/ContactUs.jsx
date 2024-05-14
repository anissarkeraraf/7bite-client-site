import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";


const ContactUs = () => {
    return (
        <div className="mb-20">
            <Helmet>
                <title>Contact | Home Idings</title>
            </Helmet>
                <div className="relative mt-10">

                    <img className="w-full lg:h-[250px]" src="https://i.ibb.co/fM90K0d/conpany-10-770x250.webp" alt="" />
                    <h2 className="absolute top-12 md:top-20 lg:top-24 left-[170px] md:left-[250px] lg:left-[490px] text-white font-semibold text-3xl md:text-5xl lg:text-5xl">Contact Us</h2>
                </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-x-2 mt-20 p-20">
                    <div>
                        <p className="text-5xl">Contact Details</p>
                        <p className="mt-10 opacity-50">If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit our office.</p>
                        <h2 className="text-black font-medium mt-10">Client Support:</h2>
                        <div className="divide-y-2 mr-48">
                            <p className="flex items-center mt-10 text-xl md:text-3xl lg:text-3xl pb-10 duration-700 hover:text-[#BC986B]"><FaPhone className="mr-4 text-xl text-[#BC986B]"></FaPhone>1-800-1234-567</p>

                            <p className="flex items-center text-xl md:text-2xl lg:text-2xl pt-10 pb-10 duration-700 hover:text-[#BC986B]"><TfiEmail className="mr-4 text-xl text-[#BC986B]"></TfiEmail>
                                info@demolink.org</p>

                            <p className="flex text-xl md:text-2xl lg:text-2xl pt-10 duration-700 hover:text-[#BC986B]"><FaLocationDot className="mr-4 text-2xl text-[#BC986B]"></FaLocationDot>
                                3015 Grand Ave, Coconut Grove,Merrick Way, FL 12345</p>
                        </div>
                    </div>
                    <div className=" lg:pl-20 pt-10 lg:pt-0">
                        <p className="text-5xl">Get in Touch</p>
                        <form>
                            <div className="mb-8 mt-10">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div>
                                <button className="pl-7 pr-7 pt-3 pb-3 bg-[#BC986B] duration-700 hover:bg-[#ffc107]">Send Massege</button>
                            </div>
                        </form>
                    </div>

            </div>

        </div>
    );
};

export default ContactUs;