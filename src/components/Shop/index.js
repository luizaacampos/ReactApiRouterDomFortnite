import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function Shop() {

    useEffect(() => {
        fetchItems()
    }, []) 

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const res = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
        const data = await res.json()
        setItems(data.data)
    }

  return (
    <div>
        <h1>Items list</h1>
        <div className="list">
            {items.map(item => (
                <h2 key={item.itemId}>
                    <Link className="item" to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h2>
            ))}
        </div>
    </div>
  );
}

export default Shop;