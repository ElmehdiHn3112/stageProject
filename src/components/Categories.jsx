import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategorieCard from './CategorieCard';
function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('https://mocki.io/v1/4b36d40d-fb7e-48e8-9f70-7934fed90463')
            .then(data => {
                setCategories(data.data)
                console.log("categories=>", data)
            }
            );

    }, [])
    return (
        <>
            <div className="padding">

                <h2>categories</h2>
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