import React from 'react'
import { NavLink } from 'react-router-dom'

const CategorieCard = ({ data }) => {
    return (
        <>
            <NavLink to={`/marbre/${data.nom}`} >
                <div className='card'>
                    <img src={data.img} alt="" />
                    <div className='categorie_container'>
                        <h3 className='categorie_title'> {data.nom} </h3>
                        <img className='categorie_arrow' src={require('../images/categorie_arrow.png')} alt="" />
                        {/* <img className='categorie_arrow' src={require('../images/categorie_arrow_v2.png')} alt="" /> */}
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default CategorieCard