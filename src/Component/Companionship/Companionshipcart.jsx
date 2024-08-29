import React from 'react';
import "./Compainionshipcart.scss";

export default function Companionshipcart({item}) {
  return (
    <div className="companionshipcart">
        <div className="companionmain">
            <div className="left">
                <p>{item.text}</p>
            </div>
            <div className="right">
                <img src={item.image} alt="" />
            </div>
        </div>
    </div>
  )
}
