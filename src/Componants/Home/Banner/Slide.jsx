

const Slide = ({ image }) => {
    return (
        <div className="mt-16">
            <div className="w-full bg-center bg-cover h-[300px] md:h-[500px] lg:h-[38rem]" style={{
                backgroundImage: `url(${image})`,
            }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-semibold text-white lg:text-6xl"><span className="text-[#801818] font-bold">Welcome</span> ! to 7bite <br />Healthcare. How can we help?</h1>
                        <p className="md:text-xl font-medium text-white mt-4">First communication with our team to enjoying <br /> your new smile with family and friends</p>
                        <button className=" px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#4245BE] rounded lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">LEARN MORE ABOUT US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;