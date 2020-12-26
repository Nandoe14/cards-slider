import React from 'react'
import card1 from './../../assets/card1.jpg'
import card2 from './../../assets/card2.jpg'
import card3 from './../../assets/card3.jpg'
import card4 from './../../assets/card4.jpg'

export const SliderCard = ({ i }) => {

    const titleCardArray = ['Learn from research', 'Take this for you', 'Do not panic', 'Ok this is so good']
    const footerCardArray = ['Nando', 'Nando', 'Nando', 'Nando']
    const backgrounds = [card1, card2, card3, card4]

    return (
        <div
            className={`card-slider ${(i === 0) && 'slide-selected'}`}
            style={{ backgroundImage: `url(${backgrounds[i]})` }}
        >
            <h3>{titleCardArray[i]}</h3>
            <span>{footerCardArray[i]}</span>
        </div>
    )
}
