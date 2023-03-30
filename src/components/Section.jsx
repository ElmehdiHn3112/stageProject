import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Categories from './Categories';


const Section = () => {

    const [imgs, setImgs] = useState(
        [
            'https://assets-eu-01.kc-usercontent.com/4bcd4284-882f-015b-bd2a-77aa699bbf21/c7d75e74-98db-418f-b81e-0d33f05cc44f/FC%20-THERESIDENT-114702-BRACHOTlang.png?w=1920&q=75&fm=webp',

            'https://saharamarbre.ma/wp-content/uploads/2022/03/GrandesDallesEffetMarbres-desktop.jpg',
            "https://assets-eu-01.kc-usercontent.com/4bcd4284-882f-015b-bd2a-77aa699bbf21/cb9a3a97-83f0-4e30-9eb0-8819e9f4e8ae/Hero-QuarryCameleon.jpg?w=1920&q=75&fm=webp",


            'https://ariastonegallery.com/wp/wp-content/uploads/2019/10/Aria_Stone_Gallery_Andrea_Smith_Designs_Calacatta_Gold_Extra_Bianco_Rhino_Marble_Bathroom_07.jpg',


        ]);
    const [nbr, setNbr] = useState(0);
    const next = () => {
        console.log(nbr)
        if (nbr === 2) {
            setNbr(0)
        }
        setNbr(nbr + 1);

    }
    const previous = () => {
        console.log(nbr)
        if (nbr === 0) {
            setImgs(2)
        }
        setNbr(nbr - 1);

    }





    return (
        <>

            <div className='header'>
                <div className="header--dark_background">

                </div>
                <img className='cover' src={imgs[nbr]} alt="" />
                <div className='header--description'>
                    <span className='header--description_name'>Najah Marbre</span>
                    {/* <h2 className='header--description_quote'>le meilleure marbre dans le maroc</h2> */}
                    <h2 className='header--description_quote'>
                        La beauté intemporelle de la pierre naturelle.
                    </h2>
                    <h3>le groupe de Najah Marbre et fondé en 1997 dans la capitale Rabat</h3>
                    <button className='header--description_contactez-nous'>contactez-nous</button>
                </div>
                <div className="btns">
                    <div className='arrows-container'>

                        <button disabled={nbr === 0} onClick={previous}>
                            <img src={require('../images/left_arrow.png')} alt="" />
                        </button>
                        <button disabled={nbr === 2} onClick={next}>
                            <img src={require('../images/right_arrow.png')} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <Categories />

        </>
    )
}

export default Section