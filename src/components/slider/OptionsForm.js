import React, { useLayoutEffect, useState } from 'react'
import { InputsFields } from './InputsFields'
import { useForm } from '../../hooks/useForm'

export const OptionsForm = ({ ofRef, howManyCards, cardClick, setCardClick, titleCardArray, paragraphArray, footerCardArray, OptionAllRef }) => {

    const [opstate, setOpState] = useState({
        titleCheck: false,
        contentCheck: false,
        firmCheck: false
    })

    const { titleCheck, contentCheck, firmCheck } = opstate

    const [cardsContents, handleInputChange] = useForm({
        title1: titleCardArray[0],
        content1: paragraphArray[0],
        firm1: footerCardArray[0],
        title2: titleCardArray[1],
        content2: paragraphArray[1],
        firm2: footerCardArray[1],
        title3: titleCardArray[2],
        content3: paragraphArray[2],
        firm3: footerCardArray[2],
        title4: titleCardArray[3],
        content4: paragraphArray[3],
        firm4: footerCardArray[3],
        title5: titleCardArray[4],
        content5: paragraphArray[4],
        firm5: footerCardArray[4],
        title6: titleCardArray[5],
        content6: paragraphArray[5],
        firm6: footerCardArray[5],
        title7: titleCardArray[6],
        content7: paragraphArray[6],
        firm7: footerCardArray[6],
        title8: titleCardArray[7],
        content8: paragraphArray[7],
        firm8: footerCardArray[7]
    }, opstate)

    const { title1, content1, firm1, title2, content2, firm2, title3, content3, firm3, title4, content4, firm4, title5, content5, firm5, title6, content6, firm6, title7, content7, firm7, title8, content8, firm8 } = cardsContents

    const cantInput = Array.apply(null, Array(howManyCards)).map((x, i) => i) // [0,1,2,3...,n] n = howManyCards

    const handleOFClick = (e) => {// When clicking on the div with className "options-form"
        e.stopPropagation()
        ofRef.current.classList.add('of-show')
    }

    const handleButtonClick = (e) => {// When clicking on the form button
        e.stopPropagation()
        ofRef.current.classList.remove('of-show')
        OptionAllRef.current.classList.remove('oc-show')
        OptionAllRef.current.classList.remove('op-opacity')
    }

    const handleSubmit = (e) => {// When submitting the form to set Card's Content
        e.preventDefault()
        setCardClick({
            ...cardClick,
            cardsContent: {
                titleCardArray: [title1, title2, title3, title4, title5, title6, title7, title8],
                paragraphArray: [content1, content2, content3, content4, content5, content6, content7, content8],
                footerCardArray: [firm1, firm2, firm3, firm4, firm5, firm6, firm7, firm8]
            }
        })
    }

    const handleCheckChange = ({ target }) => {// When changes the check-state of Checkbox Inputs
        setOpState({
            ...opstate,
            [target.name]: target.checked
        })
    }

    useLayoutEffect(() => {// Changing some properties of the first Input for each card's sections
        if (titleCheck) {
            document.querySelector("#title-input1").style.border = '2px solid #0260d1'
            document.querySelector("#title-input1").focus()
            document.querySelector("#title-input1").select()
        } else {
            document.querySelector("#title-input1").style.border = '1px solid rgba(255, 255, 255, 0.7)'
        }
        if (contentCheck) {
            document.querySelector("#content-input1").style.border = '2px solid #0260d1'
            document.querySelector("#content-input1").focus()
            document.querySelector("#content-input1").select()
        } else {
            document.querySelector("#content-input1").style.border = '1px solid rgba(255, 255, 255, 0.7)'
        }
        if (firmCheck) {
            document.querySelector("#firm-input1").style.border = '2px solid #0260d1'
            document.querySelector("#firm-input1").focus()
            document.querySelector("#firm-input1").select()
        } else {
            document.querySelector("#firm-input1").style.border = '1px solid rgba(255, 255, 255, 0.7)'
        }
    }, [titleCheck, contentCheck, firmCheck])

    return (
        <div ref={ofRef} className="options-form" onClick={handleOFClick}>
            <div className="of-cont">
                <h2>Card's Content Options</h2>
                <div className="same-cont">
                    <div className="label-input-title">
                        <input
                            id="same-title-input"
                            name="titleCheck"
                            className="title-input"
                            type="checkbox"
                            onChange={handleCheckChange}
                        />
                        <label htmlFor="same-title-input">Set Same Title</label>
                    </div>
                    <div className="label-input-content">
                        <input
                            id="same-content-input"
                            name="contentCheck"
                            className="content-input"
                            type="checkbox"
                            onChange={handleCheckChange}
                        />
                        <label htmlFor="same-content-input">Set Same Content</label>
                    </div>
                    <div className="label-input-firm">
                        <input
                            id="same-firm-input"
                            name="firmCheck"
                            className="firm-input"
                            type="checkbox"
                            onChange={handleCheckChange}
                        />
                        <label htmlFor="same-firm-input">Set Same Firm</label>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    {
                        cantInput.map((unit) =>
                            <InputsFields
                                key={unit}
                                i={unit}
                                handleInputChange={handleInputChange}
                                cardsContents={cardsContents}
                            />
                        )
                    }
                    <button onClick={handleButtonClick}>Go!</button>
                </form>
            </div>
        </div>
    )
}
