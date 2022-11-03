import React from 'react';
import {FaArrowRight} from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <FaArrowRight className='text-error text-2xl hover:text-black'></FaArrowRight>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;