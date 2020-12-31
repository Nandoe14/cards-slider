import React, { useLayoutEffect, useRef, useState } from 'react'
import close from './../../assets/close3.png'
import card1 from './../../assets/card1.jpg'
import card2 from './../../assets/card2.jpg'
import card3 from './../../assets/card3.jpg'
import card4 from './../../assets/card4.jpg'
import card5 from './../../assets/card5.jpg'
import card6 from './../../assets/card6.jpg'
import card7 from './../../assets/card7.jpg'
import card8 from './../../assets/card8.jpg'

export const SliderCard = ({ i, counter, cardClick, setCardClick, gap, howManyCards, titleCardArray, paragraphArray, footerCardArray }) => {

    const [selected, setSelected] = useState(false)

    const cardRef = useRef(null)
    const closeRef = useRef(null)

    const { changeShow } = cardClick

    const backgrounds = [card1, card2, card3, card4, card5, card6, card7, card8]

    // useLayoutEffect(() => {
    //     if (counter === (i + 1)) {
    //         setSelected(true)
    //         if (selected) {
    //             cardRef.current.style.transition = 'transform 1.5s cubic-bezier(0.02, 0.39, 0.6, 0.76), z-index 0s linear 0s'
    //             cardRef.current.style.zIndex = 200
    //         } else {
    //             cardRef.current.style.transition = 'transform 1.5s cubic-bezier(0.02, 0.39, 0.6, 0.76), z-index 0s linear 1.5s'
    //             cardRef.current.style.zIndex = (100 - i)
    //         }
    //     } else {
    //         // cardRef.current.style.transition = 'transform 1.5s cubic-bezier(0.02, 0.39, 0.6, 0.76), z-index 0s linear 0s'
    //         cardRef.current.style.zIndex = (100 - i)
    //     }
    // }, [counter, i, selected])

    const handleCardClick = () => {
        if (counter === (i + 1)) {
            cardRef.current.style.transition = `${!changeShow ? 'transform 0.5s cubic-bezier(0.02, 0.39, 0.6, 0.76)' : 'transform 0.5s cubic-bezier(0.02, 0.39, 0.6, 0.76), z-index 0s linear 0.5s'}`
            cardRef.current.style.transform = `${!changeShow ? `scale(1.25) translate(${(221 - (24 * i))}px, 0px)` : `translate(${(454 - (24 * i)) - ((-296 - parseFloat(gap)) - ((-296 - parseFloat(gap)) * i))}px , 0)`}`
            cardRef.current.style.zIndex = `${!changeShow ? 500 : (100 - i)}`
            closeRef.current.classList.toggle("show")
            setCardClick({
                ...cardClick,
                changeShow: !changeShow
            })
        }
    }

    return (
        <div
            ref={cardRef}
            className="card-slider"
            style={{
                backgroundImage: `url(${backgrounds[i]})`,
                zIndex: `${100 - i}`,
                transform: `${(counter === (i + 1)) ? `translate(${(454 - (24 * i)) - ((-296 - parseFloat(gap)) - ((-296 - parseFloat(gap)) * i))}px , 0)` : `scale(${1 - (i * 0.007)}) rotateX(4deg) rotateY(60deg) rotateZ(1deg) translate(0, ${-(6 * i)}px)`}`,
                marginLeft: `${(i === 0) ? -(((8 * 67) - 24) - (((howManyCards - 2) * (((67 * (parseFloat(gap) + 320)) / 70) + (201 / 70))))) : gap}px`
            }}
            onClick={handleCardClick}
        >
            <h3>{titleCardArray[i]}</h3>
            <div className="para-cont">
                <p>{paragraphArray[i]}</p>
            </div>
            <span>{footerCardArray[i]}</span>
            <img ref={closeRef} className="close" src={close} alt="X" />
        </div>
    )
}