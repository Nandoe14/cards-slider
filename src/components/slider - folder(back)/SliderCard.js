import React, { useRef, useState } from 'react'
import card1 from './../../assets/card1.jpg'
import card2 from './../../assets/card2.jpg'
import card3 from './../../assets/card3.jpg'
import card4 from './../../assets/card4.jpg'
import card5 from './../../assets/card5.jpg'
import card6 from './../../assets/card6.jpg'
import card7 from './../../assets/card7.jpg'
import card8 from './../../assets/card8.jpg'

export const SliderCard = ({ i, counter }) => {

    const [click, setClick] = useState(false)

    const cardRef = useRef(null)

    const handleClick = () => {
        if (counter === (i + 1)) {
            cardRef.current.style.transform = `${!click ? 'rotateY(180deg)' : ''} translate(${(click ? 1 : -1) * (454 - (24 * i))}px , 0)`
        }
        setClick(!click)
    }

    const titleCardArray = ['Learn from research', 'Take this for you', 'Do not panic', 'Ok this is so good', 'Learn from research', 'Take this for you', 'Do not panic', 'Ok this is so good']
    const footerCardArray = ['Nando', 'Nando', 'Nando', 'Nando', 'Nando', 'Nando', 'Nando', 'Nando']
    const backgrounds = [card1, card2, card3, card4, card5, card6, card7, card8]

    return (
        <div
            ref={cardRef}
            className={`card-slider ${(counter === i) && 'slide-selected'}`}
            style={{
                zIndex: `${100 - i}`,
                transform: `${(counter === (i + 1)) ? `translate(${(454 - (24 * i))}px , 0)` : `scale(${1 - (i * 0.007)}) rotateX(4deg) rotateY(60deg) rotateZ(1deg) translate(0, ${-(6 * i)}px)`}`
            }}
            onClick={handleClick}
        >
            <div className="card-front" style={{ backgroundImage: `url(${backgrounds[i]})` }}>
                <h3>{titleCardArray[i]}</h3>
                <span>{footerCardArray[i]}</span>
            </div>
            <div className="card-back"></div>
        </div>
    )
}
// ${(i === 0) && 'slide-selected'}