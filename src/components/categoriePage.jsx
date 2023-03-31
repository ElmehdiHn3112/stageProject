import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';

const CategoriePage = () => {
    const { categorie } = useParams()
    const [marbles, setMarbles] = useState([]);
    useEffect(() => {
        axios.get('https://mocki.io/v1/102d5fe3-d5f6-4fe3-91ae-a3ac94d5c2a5')
            .then(marbres => {
                setMarbles(marbres.data.filter(m => m.categorie === categorie));
            })
    })
    return (
        <>
            <div className='padding section'>
                <h1>
                    {categorie}

                </h1>
                <div className="products">
                    {
                        marbles.map(m => <Product product={m} />)
                    }
                </div>
            </div>
        </>
    )
}

export default CategoriePage