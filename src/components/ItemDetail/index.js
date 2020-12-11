import React, { useState, useEffect } from 'react'

import './styles.css'

function Item({match}) {

    useEffect(() => {
        fetchItem()
    }, []) 

    const [item, setItem] = useState({
        images: {}
    })

    const fetchItem = async () => {
        const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const item = await response.json()
        setItem(item.data.item)
    }

  return (
    <div>
        <h1>{item.name}</h1>
        <div className="container">
            <img src={item.images.background} />
            <p>{item.description}</p>
        </div>
    </div>
  );
}

export default Item;