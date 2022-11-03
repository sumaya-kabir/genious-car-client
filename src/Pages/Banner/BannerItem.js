import React from 'react';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={image} className="w-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h2 className='text-6xl font-bold text-white'>
                        Affordable
                        <br />
                        Price For Car
                        <br />
                        Servicing
                    </h2>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-white text-xl'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                    <button className="btn btn-error mr-5">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle btn-error">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;