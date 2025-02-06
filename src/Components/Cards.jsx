import React, { useEffect, useState } from 'react';
import Piece from './Piece';



const Cards = () => {
   
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                products.map(product => (<Piece key={product.id} product={product}></Piece>

                ))}
        </div>
    )
}


export default Cards;