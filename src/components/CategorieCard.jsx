import React from 'react'
import { NavLink } from 'react-router-dom'

const CategorieCard = ({ data }) => {
    return (
        <>
            <div className='card'>
                <NavLink to={`/marbre/${data.nom}`} >
                    <img src={data.img} alt="" />
                </NavLink>
                <h3> {data.nom} </h3>
            </div>
        </>
    )
}

export default CategorieCard