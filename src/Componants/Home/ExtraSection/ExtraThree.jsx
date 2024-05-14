

const ExtraThree = () => {
    return (
        <div>
            <h1 className="text-5xl font-medium text-center my-10">Booked Appointment With Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:p-5 lg:p-10">
                <div>
                    <img src="https://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/book-image.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-4xl font-medium mb-5">Come & visit us</h1>
                    <p className="mb-5">Proin et euismod tellus, et malesuada lectus. Donec velit nisi, aliquet vitae nisi vel, vulputate dictum sem. Curabitur nec orci ipsum. Proin et ipsum ut libero rhoncus aliquet.</p>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> Your Name :</span>
                            </div>
                            <input type="text" name="serviceName" placeholder="Your Name" className="input input-bordered w-full mb-5" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> Your Email :</span>
                            </div>
                            <input type="text" name="serviceName" placeholder="Your Email" className="input input-bordered w-full mb-5" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> Seletct Appointment Date :</span>
                            </div>
                            <input type="date" name="appointment" id="" className="p-3 border rounded mb-5" />
                        </label>
                    </div>
                    <div>
                        <label for="Description" className="block text-sm text-gray-500 dark:text-gray-300">Additional Message :</label>

                        <textarea className="block mb-5 mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>

                    </div>
                    <input type="submit" value="Book Your Appointment"  className="p-3 bg-[#CA4012] rounded text-white"/>
                </div>
            </div>

        </div>
    );
};

export default ExtraThree;