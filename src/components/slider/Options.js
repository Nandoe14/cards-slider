import React, { useRef } from 'react'

export const Options = ({ cardClick, setCardClick, setcards, howManyCards, scale, gap, handleInputChange, resetScale, resetGap, reset, OptionAllRef, ofRef }) => {

    const OptionRef = useRef(null)
    const InputSNRef = useRef(null)

    const handleClickOp = (e) => {
        e.stopPropagation()
        OptionAllRef.current.classList.toggle('oc-show')
        OptionAllRef.current.classList.toggle('op-opacity')
    }

    const handleClickOpCont = (e) => {
        e.stopPropagation()
        OptionAllRef.current.classList.add('oc-show')
    }

    const handleInputClickSN = () => {
        InputSNRef.current.select()
    }

    const handleClickSetCards = () => {
        ofRef.current.classList.add('of-show')
    }

    const handleScaleClick = () => {
        resetScale()
        localStorage.scaleSlider = 100
    }

    const handleGapClick = () => {
        resetGap()
        localStorage.gapSlider = -296
    }

    const handleSubmitSN = (e) => {
        e.preventDefault()
        if (setcards.length > 0) {
            setCardClick({
                ...cardClick,
                howManyCards: parseFloat(setcards)
            })
            InputSNRef.current.blur()
            reset(0)
        }
    }

    const maxScale = (Math.ceil(-4.3333 * Math.pow(howManyCards, 3) + 90.571 * Math.pow(howManyCards, 2) - 637.52 * howManyCards + 1237.8))// y = 4,3333x3 - 26,429x2 + 60,238x - 2,6

    return (
        <div ref={OptionAllRef} className="options">
            <div ref={OptionRef} className="options-content" onClick={handleClickOpCont}>
                <label onClick={handleScaleClick} title="Reset">Scale the slider</label>
                <span className="scale-span">{scale}</span>
                <input className="scalator" name="scale" type="range" value={scale} min="1" max="200" onChange={handleInputChange} />
                <label onClick={handleGapClick} title="Reset">Set card's gap</label>
                <span className="gap-span">{parseFloat(gap) + 320}</span>
                <input className="scalator" name="gap" type="range" value={gap} min="-323" max={maxScale} onChange={handleInputChange} />
                <form onSubmit={handleSubmitSN}>
                    <label>Set the number of cards</label>
                    <input ref={InputSNRef} className="set-card" name="setcards" type="number" value={setcards} min="2" max="8" onChange={handleInputChange} onClick={handleInputClickSN} />
                    <span>(8 max.)</span>
                </form>
                <span onClick={handleClickSetCards}>Set card's content</span>
            </div>
            <div className="opt-span" onClick={handleClickOp}>
                <span>Options</span>
            </div>
        </div>
    )
}
