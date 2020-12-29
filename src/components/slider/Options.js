import React, { useRef } from 'react'

export const Options = ({ cardClick, setCardClick, setcards, scale, handleInputChange, reset, OptionAllRef, ofRef }) => {

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

    const handleClickSetCards = () => {
        ofRef.current.classList.add('of-show')
    }

    return (
        <div ref={OptionAllRef} className="options">
            <div ref={OptionRef} className="options-content" onClick={handleClickOpCont}>
                <label>Scale the Slider</label>
                <span>{scale}</span>
                <input className="scalator" name="scale" type="range" value={scale} min="1" max="200" onChange={handleInputChange} />
                <form onSubmit={handleSubmitSN}>
                    <label>Set the number of cards</label>
                    <input ref={InputSNRef} className="set-card" name="setcards" type="number" value={setcards} min="1" max="8" onChange={handleInputChange} onClick={handleInputClickSN} />
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
