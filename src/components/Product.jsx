import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div>
            <NavLink to={`/produit/${product.id}`} >
                <div className="product_card">
                    <img src={product.img} alt="" />
                    <h3 className='product_title'> {product.nom} </h3>
                    <button>détails</button>
                </div>
            </NavLink>
        </div>
    )
}

export default Product