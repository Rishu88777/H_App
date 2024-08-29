import React from 'react'
import "./Physicaltherapycart.scss"

export default function Physicaltherapycart({item}) {
    return (
        <div className="physicalcart">
            <div className="excersiename">
                <h1>{item.name}</h1>
                <p>{item.des} </p>
            </div>
            <div className="excersizeimg">
                <img src={item.link} alt="" />
            </div>
        </div>
    )
}
