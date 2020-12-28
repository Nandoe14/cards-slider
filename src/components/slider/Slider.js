import React, { useEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import iRow from '../../assets/pass_i.svg'
import dRow from '../../assets/pass_d.svg'
import { SliderCard } from './SliderCard'
import { useForm } from '../../hooks/useForm'
import { Options } from './Options'
import { OptionsForm } from './OptionsForm'
import { BGSlider } from './BGSlider'

export const Slider = () => {

    if (typeof (Storage) !== "undefined") {

        if (!localStorage.scaleSlider) {
            localStorage.scaleSlider = 10;// Guarda el valor de la escala del Slider en el localStorage
        }
    }

    const OptionAllRef = useRef(null)

    const [cardClick, setCardClick] = useState({
        changeShow: false,
        howManyCards: 8
    })
    const { changeShow, howManyCards } = cardClick

    const [value, handleInputChange] = useForm({
        scale: localStorage.scaleSlider,
        setcards: ''
    })
    const { scale, setcards } = value

    const cantCards = Array.apply(null, Array(howManyCards)).map((x, i) => i) // [0,1,2,3...,n]

    const n = cantCards.length

    const { counter, increment, decrement, reset, resetn } = useCounter({
        init: 0,
        n
    })

    const handleClickPass = (val) => {

        // const cards = document.querySelectorAll(".card-slider")

        if (!changeShow) {
            if (val) {
                increment(1)
            } else {
                decrement(1)
            }

            if (counter === 0) {
                // cards[0].classList.toggle("slide-selected")// Deselecciona la primera carta
                if (val) {// Si se da hacia adelante
                    // cards[counter + 1].classList.toggle("slide-selected")// Selecciona la siguiente carta
                } else {
                    // cards[n].classList.toggle("slide-selected")// Deselecciona la última carta
                    resetn()// Resetea el contador al último valor
                }
            } else if (counter === n) {
                // cards[n].classList.toggle("slide-selected")// Deselecciona la última carta
                if (val) {// Si se da hacia adelante
                    // cards[0].classList.toggle("slide-selected")// Selecciona la primera carta
                    reset()// Resetea el contador al primer valor
                } else {
                    // cards[counter - 1].classList.toggle("slide-selected")// Selecciona la anterior carta
                }
            } else {
                // cards[counter].classList.toggle("slide-selected")// Selecciona la primera carta
                if (val) {// Si se da hacia adelante
                    // cards[counter + 1].classList.toggle("slide-selected")// Selecciona la siguiente carta
                } else {
                    // cards[counter - 1].classList.toggle("slide-selected")// Selecciona la anterior carta
                }
            }
        }
    }

    const handleClickSlide = () => {
        if (!changeShow) {
            OptionAllRef.current.classList.remove('oc-show')
            OptionAllRef.current.classList.remove('op-opacity')
        }
    }

    return (
        <div className="slide" onClick={handleClickSlide}>
            <div className="cont" style={{ transform: `scale(${scale / 10})` }}>
                {
                    cantCards.map((unit) =>
                        <SliderCard key={unit} i={unit} counter={counter} cardClick={cardClick} setCardClick={setCardClick} />
                    )
                }
            </div>
            {
                (!changeShow)
                &&
                <>
                    <div className="pass animate__animated animate__bounceInDown">
                        <img className="btnld" src={iRow} alt="<" onClick={() => handleClickPass(false)} />
                        <img className="btnrd" src={dRow} alt=">" onClick={() => handleClickPass(true)} />
                    </div>
                    <Options cardClick={cardClick} setCardClick={setCardClick} setcards={setcards} scale={scale} handleInputChange={handleInputChange} reset={reset} OptionAllRef={OptionAllRef} />
                    <OptionsForm />
                </>
            }
            <BGSlider />
        </div>
    )
}
