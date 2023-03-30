import React from 'react'

const CategorieCard = ({ data }) => {
    return (
        <div className='card'>
            <img src={data.img} alt="" />
            <h3> {data.nom} </h3>
        </div>
    )
}

export default CategorieCard