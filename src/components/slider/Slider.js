import React, { useRef, useState } from 'react'
import { SliderCard } from './SliderCard'
import { Options } from './Options'
import { OptionsForm } from './OptionsForm'
import { BGSlider } from './BGSlider'
import { useCounter } from '../../hooks/useCounter'
import { useForm } from '../../hooks/useForm'
import { titleCardArray } from './../../data/cardContents'
import { paragraphArray } from './../../data/cardContents'
import { footerCardArray } from './../../data/cardContents'
import iRow from '../../assets/pass_i2.svg'
import dRow from '../../assets/pass_d2.svg'

export const Slider = () => {

    if (typeof (Storage) !== "undefined") {

        if (!localStorage.scaleSlider) {
            localStorage.scaleSlider = 100;// Save to local storage the scale value of 100
        }
        if (!localStorage.gapSlider) {
            localStorage.gapSlider = -296;// Save to local storage the gap value of -296
        }
    }

    const OptionAllRef = useRef(null)
    const ofRef = useRef(null)

    const [cardClick, setCardClick] = useState({
        changeShow: false,
        howManyCards: 8,
        cardsContent: {
            titleCardArray,
            paragraphArray,
            footerCardArray
        }
    })
    const { changeShow, howManyCards, cardsContent } = cardClick

    const [value, handleInputChange, resetScale, resetGap] = useForm({
        scale: localStorage.scaleSlider,
        gap: localStorage.gapSlider,
        setcards: ''
    })
    const { scale, gap, setcards } = value

    const cantCards = Array.apply(null, Array(howManyCards)).map((x, i) => i) // [0,1,2,3...,n]

    const n = cantCards.length

    const { counter, increment, decrement, reset, resetn } = useCounter({
        init: 0,
        n
    })

    const handleClickPass = (val) => {
        if (!changeShow) {
            if (val) {
                increment(1)
            } else {
                decrement(1)
            }

            if (counter === 0 && !val) {// Si se da hacia atrás cuando el contador está en 0.
                resetn()// Resetea el contador al último valor
            } else if (counter === n && val) {// Si se da hacia adelante cuando el contador llegó al max.
                reset()// Resetea el contador al primer valor
            }
        }
    }

    const handleClickSlide = () => {
        if (!changeShow) {
            OptionAllRef.current.classList.remove('oc-show')
            OptionAllRef.current.classList.remove('op-opacity')
            ofRef.current.classList.remove('of-show')
        }
    }

    return (
        <div className="slide" onClick={handleClickSlide}>
            <div className="cont" style={{ transform: `scale(${scale / 100})` }}>
                {
                    cantCards.map((unit) =>
                        <SliderCard key={unit} i={unit} counter={counter} cardClick={cardClick} setCardClick={setCardClick} gap={gap} {...cardsContent} />
                    )
                }
            </div>
            {
                (!changeShow)
                &&
                <>
                    <img className="btnld" src={iRow} alt="<" onClick={() => handleClickPass(false)} />
                    <img className="btnrd" src={dRow} alt=">" onClick={() => handleClickPass(true)} />
                    <Options cardClick={cardClick} setCardClick={setCardClick} setcards={setcards} scale={scale} gap={gap} handleInputChange={handleInputChange} resetScale={resetScale} resetGap={resetGap} reset={reset} OptionAllRef={OptionAllRef} ofRef={ofRef} />
                    <OptionsForm howManyCards={howManyCards} cardClick={cardClick} setCardClick={setCardClick} ofRef={ofRef} OptionAllRef={OptionAllRef} {...cardsContent} />
                </>
            }
            <BGSlider />
        </div>
    )
}
