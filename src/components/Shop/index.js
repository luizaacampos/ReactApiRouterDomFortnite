import React, { useState, useEffect } from 'react'

function Shop() {

    useEffect(() => {
        fetchItems()
    }, []) 

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            'https://fortnite-api.theapinetwork.com/upcoming/get'
        )

        const items = await data.json()
        console.log(items.item)
        setItems(items)
    }

  return (
    <div>
     {items.map(item => (
         <h1>{item.name}</h1>
     ))}
    </div>
  );
}

export default Shop;