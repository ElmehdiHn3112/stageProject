import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Product from './Product';

const Products = (props) => {
    const [marbles, setMarbles] = useState([]);
    useEffect(() => {
        axios.get('https://mocki.io/v1/102d5fe3-d5f6-4fe3-91ae-a3ac94d5c2a5')
            .then(marbles => setMarbles(marbles.data))
    })
    return (
        <>
            <div className="padding">
                <h2>Products</h2>
                <div className='products'>
                    {
                        marbles?.map((m, i) => i > props.nbr ? "" : <Product product={m} />)
                    }
                </div>

            </div>
        </>
    )
}

export default Products