import React from 'react'

const Product = ({ product }) => {
    return (
        <div>
            <div className="product_card">
                <img src={product.img} alt="" />
                <h3> {product.nom} </h3>
            </div>
        </div>
    )
}

export default Product