import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategorieCard from './CategorieCard';
function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('https://mocki.io/v1/c23cddb7-bdca-4548-a1ee-eb8687fb204d')
            .then(data => {
                setCategories(data.data)
                console.log("categories=>", data)
            }
            );

    }, [])
    return (
        <>
            <div className="padding">

                <h2 className='title'>categories</h2>
                <div className='cards'>
                    {
                        categories?.map(c => <CategorieCard key={c.id} data={c} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Categories