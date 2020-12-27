import React, { useRef } from 'react'
import close from './../../assets/close3.png'
import card1 from './../../assets/card1.jpg'
import card2 from './../../assets/card2.jpg'
import card3 from './../../assets/card3.jpg'
import card4 from './../../assets/card4.jpg'
import card5 from './../../assets/card5.jpg'
import card6 from './../../assets/card6.jpg'
import card7 from './../../assets/card7.jpg'
import card8 from './../../assets/card8.jpg'

export const SliderCard = ({ i, counter, cardClick, setCardClick }) => {

    const cardRef = useRef(null)
    const closeRef = useRef(null)

    const { changeShow } = cardClick

    const handleCardClick = () => {
        if (counter === (i + 1)) {
            cardRef.current.style.transform = `${!changeShow ? `scale(1.25) translate(${(221 - (24 * i))}px, 0px)` : `translate(${454 - (24 * i)}px , 0)`} `
            cardRef.current.style.zIndex = `${!changeShow ? 500 : (100 - i)}`
            cardRef.current.style.transition = `${!changeShow ? 'transform 0.5s cubic-bezier(0.02, 0.39, 0.6, 0.76)' : 'transform 0.5s cubic-bezier(0.02, 0.39, 0.6, 0.76), z-index 0.5s linear'}`
            closeRef.current.classList.toggle("show")
            setCardClick({
                ...cardClick,
                changeShow: !changeShow
            })
        }
    }

    const titleCardArray = ['Rest for a while', 'Take this for you', 'Do not panic', 'Ok this is so good', 'The color of life', 'Ok we need this', 'And so every time', 'We imagine a world']
    const paragraphArray = ['A day of duty done, a day of rest begun.', 'The best time for new beginnings is now.', 'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.', 'Sometimes you will never know the value of a moment until it becomes a memory.', 'Small steps in the right direction can turn out to be the biggest step of your life.', 'Those who don\'t believe in magic will never find it.', 'Difficult roads often lead to beautiful destinations.', 'Imagine is not just a word, it\'s a full phrase which helps people to create a world where hope supersedes truth and dream becomes reality.']
    const footerCardArray = ['Nando', 'Nando', 'Nando', 'Nando', 'Nando', 'Nando', 'Nando', 'Nando']
    const backgrounds = [card1, card2, card3, card4, card5, card6, card7, card8]

    return (
        <div
            ref={cardRef}
            className={`card-slider ${(counter === i) && 'slide-selected'}`}
            style={{
                backgroundImage: `url(${backgrounds[i]})`,
                zIndex: `${100 - i}`,
                transform: `${(counter === (i + 1)) ? `translate(${(454 - (24 * i))}px , 0)` : `scale(${1 - (i * 0.007)}) rotateX(4deg) rotateY(60deg) rotateZ(1deg) translate(0, ${-(6 * i)}px)`}`
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