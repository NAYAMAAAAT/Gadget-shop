import React from 'react';

const Piece = ({product}) => {
    const { id,image, name, price } = product

    return (
       
                    
        <div className="card bg-base-100 w-80 shadow-xl h-[380px]">
            <figure className="px-10 pt-10">
                <img 
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{name}</h2>
                <p>{`price: ${price}$`}</p>
                <div className="card-actions">
                    <button className="btn bg-[#9538E2] text-white">View Details
                    </button>
                </div>
            </div>
        </div>
    
    );
};

export default Piece;