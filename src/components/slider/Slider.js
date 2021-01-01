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
        } else if (parseFloat(localStorage.gapSlider) > (35 - 320)) {
            localStorage.gapSlider = 24 - 320
        }
        if (!localStorage.BGtimeSlider) {
            localStorage.BGtimeSlider = 20000;// Save to local storage the BG time lapse value of 20000 (20s)
        }
    }

    const OptionAllRef = useRef(null)// Catching the div with className "options" at Options.js
    const ofRef = useRef(null)// Catching the div with className "options-form" at OptionsForm.js

    const [cardClick, setCardClick] = useState({
        changeShow: false,
        howManyCards: 8,
        bgseconds: parseFloat(localStorage.BGtimeSlider) / 1000,
        cardsContent: {
            titleCardArray,
            paragraphArray,
            footerCardArray
        }
    })
    const { changeShow, howManyCards, bgseconds, cardsContent } = cardClick

    const [value, handleInputChange, resetScale, resetGap, resetBGTime] = useForm({
        scale: localStorage.scaleSlider,
        gap: localStorage.gapSlider,
        setcards: '',
        bgsecondset: ''
    })
    const { scale, gap, bgsecondset, setcards } = value

    const cantCards = Array.apply(null, Array(howManyCards)).map((x, i) => i) // [0,1,2,3...,n]

    const n = cantCards.length

    const { counter, increment, decrement, reset, resetn } = useCounter({
        init: 0,
        n
    })

    const handleClickPass = (val) => {// When clicking on the Slider's pass buttons
        if (!changeShow) {
            if (val) {
                increment(1)// Go forward
            } else {
                decrement(1)// Go backward
            }

            if (counter === 0 && !val) {// If it goes backwards when the counter is at 0.
                resetn()// Reset the counter to the last value
            } else if (counter === n && val) {// If it goes forward when the counter reached max.
                reset()// Reset the counter to the first value
            }
        }
    }

    const handleClickSlide = () => {// When clicking on the Slider
        if (!changeShow) {
            OptionAllRef.current.classList.remove('oc-show')
            OptionAllRef.current.classList.remove('op-opacity')
            ofRef.current.classList.remove('of-show')
        }
    }

    return (
        <div className="slide" onClick={handleClickSlide}>
            <div className="slide-cent">
                <div className="cont" style={{ transform: `scale(${scale / 100})` }}>
                    {
                        cantCards.map((unit) =>
                            <SliderCard
                                cardClick={cardClick}
                                counter={counter}
                                gap={gap}
                                howManyCards={howManyCards}
                                i={unit}
                                key={unit}
                                setCardClick={setCardClick}
                                {...cardsContent}
                            />
                        )
                    }
                </div>
                {
                    (!changeShow)
                    &&
                    <>
                        <img className="btnld" src={iRow} alt="<" onClick={() => handleClickPass(false)} />
                        <img className="btnrd" src={dRow} alt=">" onClick={() => handleClickPass(true)} />
                        <Options
                            bgseconds={bgseconds}
                            bgsecondset={bgsecondset}
                            cardClick={cardClick}
                            gap={gap}
                            handleInputChange={handleInputChange}
                            howManyCards={howManyCards}
                            ofRef={ofRef}
                            OptionAllRef={OptionAllRef}
                            reset={reset}
                            resetBGTime={resetBGTime}
                            resetGap={resetGap}
                            resetScale={resetScale}
                            scale={scale}
                            setcards={setcards}
                            setCardClick={setCardClick}
                        />
                        <OptionsForm
                            cardClick={cardClick}
                            howManyCards={howManyCards}
                            ofRef={ofRef}
                            OptionAllRef={OptionAllRef}
                            setCardClick={setCardClick}
                            {...cardsContent}
                        />
                    </>
                }
                <BGSlider bgseconds={bgseconds} />
            </div>
        </div>
    )
}
