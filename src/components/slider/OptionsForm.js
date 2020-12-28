import React from 'react'
import { useForm } from '../../hooks/useForm'
import { InputsFields } from './InputsFields'

export const OptionsForm = ({ ofRef, howManyCards }) => {

    // const [values, handleInputChange, reset] = useForm

    const cantInput = Array.apply(null, Array(howManyCards)).map((x, i) => i) // [0,1,2,3...,n]

    const handleClick = (e) => {
        e.stopPropagation()
        ofRef.current.classList.add('of-show')
    }

    return (
        <div ref={ofRef} className="options-form" onClick={handleClick}>
            <div className="of-cont">
                <h2>Card's Content Options</h2>
                <div className="same-cont">
                    <div className="label-input-title">
                        <input id="same-title-input" className="title-input" type="checkbox" />
                        <label htmlFor="same-title-input">Set Same Title</label>
                    </div>
                    <div className="label-input-content">
                        <input id="same-content-input" className="content-input" type="checkbox" />
                        <label htmlFor="same-content-input">Set Same Content</label>
                    </div>
                    <div className="label-input-firm">
                        <input id="same-firm-input" className="firm-input" type="checkbox" />
                        <label htmlFor="same-firm-input">Set Same Firm</label>
                    </div>
                </div>
                <form>
                    {
                        cantInput.map((unit) =>
                            <InputsFields key={unit} i={unit} />
                        )
                    }
                    <button>Go!</button>
                </form>
            </div>
        </div>
    )
}
