import React from 'react';

const ExtraOneSlide = ({image, text, header}) => {
    return (
        <div className="w-full mt-20 mb-16 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div>
                <img className='w-24 h-24 rounded-full mx-auto transform hover:-rotate-180 transition duration-300' src={image} alt="Rotated Image" />
            </div>
            <div className="py-5 text-center p-5">
                <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{header}</a>
                <span className="text-sm text-gray-700 dark:text-gray-200">{text}</span>
            </div>
        </div>
    );
};

export default ExtraOneSlide;