import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams();
    return (
        <>
            <div className='padding section'>
                <h1>prooduct nbr {id} </h1>
            </div>
        </>
    )
}

export default ProductDetail