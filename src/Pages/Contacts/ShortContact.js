import React from 'react';
import {FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

const ShortContact = () => {
    return (
        <div className='bg-black text-white p-20 my-10 rounded-lg flex justify-around'>
            <div className='flex'>
                    <FaCalendarAlt className='text-2xl text-error mr-4 mt-4'></FaCalendarAlt>
                <div>
                    <p>We are open monday-friday</p>
                    <h2 className='text-2xl'>7.00am - 9.00pm</h2>
                </div>
            </div>
            <div className='flex'>
                    <FaPhoneAlt className='text-2xl text-error mr-4 mt-4'></FaPhoneAlt>
                <div>
                    <p>Have a question?</p>
                    <h2 className='text-2xl'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex'>
                    <FaMapMarkerAlt className='text-2xl text-error mr-4 mt-4'></FaMapMarkerAlt>
                <div>
                    <p>Need a repair? our address</p>
                    <h2 className='text-2xl'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default ShortContact;