import React, { useRef } from 'react'

export const Options = ({ cardClick, setCardClick, setcards, howManyCards, scale, gap, bgseconds, bgsecondset, handleInputChange, resetScale, resetGap, resetBGTime, reset, OptionAllRef, ofRef }) => {

    const OptionRef = useRef(null)// Catching the div with className "options-content"
    const InputSNRef = useRef(null)// Catching the input with className "set-card"
    const InputSBGRef = useRef(null)// Catching the input with className "set-bgseconds"

    const handleClickOp = (e) => {// When clicking on the input with className "opt-span"
        e.stopPropagation()
        OptionAllRef.current.classList.toggle('oc-show')
        OptionAllRef.current.classList.toggle('op-opacity')
    }

    const handleClickOpCont = (e) => {// When clicking on the div with className "options-content"
        e.stopPropagation()
        OptionAllRef.current.classList.add('oc-show')
    }

    const handleInputClickSBG = () => {// When clicking on the input with className "set-bgseconds"
        InputSBGRef.current.select()
    }

    const handleInputClickSN = () => {// When clicking on the input with className "set-card"
        InputSNRef.current.select()
    }

    const handleClickSetCards = () => {// When clicking on the span to set card's content
        ofRef.current.classList.add('of-show')
    }

    const handleScaleClick = () => {// When clicking on the span to scale the slider
        resetScale()
        localStorage.scaleSlider = 100
    }

    const handleGapClick = () => {// When clicking on the span to set card's gap
        resetGap()
        localStorage.gapSlider = -296
    }

    const handleSubmitSBG = (e) => {// When submitting the form to set background time lapse
        e.preventDefault()
        if (bgsecondset >= 3) {
            setCardClick({
                ...cardClick,
                bgseconds: bgsecondset
            })
            localStorage.BGtimeSlider = bgsecondset * 1000
            InputSBGRef.current.blur()
            resetBGTime()
        }
    }

    const handleSubmitSN = (e) => {// When submitting the form to set the number of cards
        e.preventDefault()
        if (setcards.length > 0 && parseFloat(setcards) >= 2) {
            setCardClick({
                ...cardClick,
                howManyCards: parseFloat(setcards)
            })
            InputSNRef.current.blur()
            reset(0)
            resetGap()
        }
    }

    const maxScale = Math.ceil(-4.3333 * Math.pow(howManyCards, 3) + 90.571 * Math.pow(howManyCards, 2) - 637.52 * howManyCards + 1237.8)// Determines the maximum value for Gap in function of number of cards

    return (
        <div ref={OptionAllRef} className="options">
            <div ref={OptionRef} className="options-content" onClick={handleClickOpCont}>
                <label onClick={handleScaleClick} title="Reset">Scale the slider</label>
                <span className="scale-span">{scale} %</span>
                <input
                    className="scalator"
                    name="scale"
                    type="range"
                    value={scale}
                    min="1"
                    max="200"
                    onChange={handleInputChange}
                />
                <label onClick={handleGapClick} title="Reset">Set card's gap</label>
                <span className="gap-span">{parseFloat(gap) + 320} %</span>
                <input
                    className="scalator"
                    name="gap"
                    type="range"
                    value={gap}
                    min="-323"
                    max={maxScale}
                    onChange={handleInputChange}
                />
                <form onSubmit={handleSubmitSBG}>
                    <label>Set background time lapse (s)</label>
                    <span className="bgseconds-span">{bgseconds} s</span>
                    <input
                        ref={InputSBGRef}
                        className="set-bgseconds"
                        name="bgsecondset"
                        type="number"
                        value={bgsecondset}
                        min="3"
                        max="999"
                        onChange={handleInputChange}
                        onClick={handleInputClickSBG}
                    />
                    <span className="max-inputs">(999 max.)</span>
                </form>
                <form onSubmit={handleSubmitSN}>
                    <label>Set the number of cards</label>
                    <input
                        ref={InputSNRef}
                        className="set-card"
                        name="setcards"
                        type="number"
                        value={setcards}
                        min="2"
                        max="8"
                        onChange={handleInputChange}
                        onClick={handleInputClickSN}
                    />
                    <span className="max-inputs">(8 max.)</span>
                </form>
                <span onClick={handleClickSetCards}>Set card's content</span>
            </div>
            <div className="opt-span" onClick={handleClickOp}>
                <span>Options</span>
            </div>
        </div>
    )
}
