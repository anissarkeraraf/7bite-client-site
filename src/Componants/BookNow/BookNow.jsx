import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookNow = () => {
    const {books} = useLoaderData();

    const {imageURL} = books;

    return (
        <div>
            <h1>{imageURL}</h1>
        </div>
    );
};

export default BookNow;
