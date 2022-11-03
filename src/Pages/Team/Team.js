import React from 'react';
import member1 from '../../assets/images/team/1.jpg';
import member2 from '../../assets/images/team/2.jpg';
import member3 from '../../assets/images/team/3.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Team = () => {
    return (
        <div className='my-20'>
            <div className='text-center mb-10'>
                <p className='text-2xl text-orange-600 font-bold'>Team</p>
                <h2 className='text-5xl font-semibold my-3'>Meet Our Team</h2>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={member1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                            <FaFacebook className='m-1 text-blue-900 text-xl'></FaFacebook>
                            <FaTwitter className='m-1 text-blue-400 text-xl'></FaTwitter>
                            <FaLinkedin className='m-1 text-blue-700 text-xl'></FaLinkedin>
                            <FaInstagram className='m-1 text-pink-600 text-xl'></FaInstagram>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={member2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                            <FaFacebook className='m-1 text-blue-900 text-xl'></FaFacebook>
                            <FaTwitter className='m-1 text-blue-400 text-xl'></FaTwitter>
                            <FaLinkedin className='m-1 text-blue-700 text-xl'></FaLinkedin>
                            <FaInstagram className='m-1 text-pink-600 text-xl'></FaInstagram>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={member3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                            <FaFacebook className='m-1 text-blue-900 text-xl'></FaFacebook>
                            <FaTwitter className='m-1 text-blue-400 text-xl'></FaTwitter>
                            <FaLinkedin className='m-1 text-blue-700 text-xl'></FaLinkedin>
                            <FaInstagram className='m-1 text-pink-600 text-xl'></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;