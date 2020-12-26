import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import iRow from '../../assets/pass_i.svg'
import dRow from '../../assets/pass_d.svg'
import { SliderCard } from './SliderCard'

export const Slider = () => {

    const howManyCards = 4

    const cantCards = Array.apply(null, Array(howManyCards)).map((x, i) => i) // [0,1,2,3...,n]

    const n = cantCards.length - 1

    const { counter, increment, decrement, reset, resetn } = useCounter({
        init: 0,
        n
    })

    const handleClick = (val) => {

        const cards = document.querySelectorAll(".card-slider")

        if (val) {
            increment(1)
        } else {
            decrement(1)
        }

        if (counter === 0) {
            cards[0].classList.toggle("slide-selected")// Deselecciona la primera carta
            if (!val) {// Si se da hacia atrás
                cards[n].classList.toggle("slide-selected")// Deselecciona la última carta
                resetn()// Resetea el contador al último valor
            } else {
                cards[counter + 1].classList.toggle("slide-selected")// Selecciona la siguiente carta
            }
        } else if (counter === n) {
            cards[n].classList.toggle("slide-selected")// Deselecciona la última carta
            if (val) {// Si se da hacia adelante
                cards[0].classList.toggle("slide-selected")// Selecciona la primera carta
                reset()// Resetea el contador al primer valor
            } else {
                cards[counter - 1].classList.toggle("slide-selected")// Selecciona la anterior carta
            }
        } else {
            cards[counter].classList.toggle("slide-selected")// Selecciona la primera carta
            if (val) {// Si se da hacia adelante
                cards[counter + 1].classList.toggle("slide-selected")// Selecciona la siguiente carta
            } else {
                cards[counter - 1].classList.toggle("slide-selected")// Selecciona la anterior carta
            }
        }
    }

    return (
        <>
            <div className="slide">
                <div className="cont">
                    {
                        cantCards.map((unit) =>
                            <SliderCard key={unit} i={unit} />
                        )
                    }
                </div>
                <div className="pass animate__animated animate__bounceInDown">
                    <img className="btnld" src={iRow} alt="<" onClick={() => handleClick(false)} />
                    <img className="btnrd" src={dRow} alt=">" onClick={() => handleClick(true)} />
                </div>
            </div>
        </>
    )
}
