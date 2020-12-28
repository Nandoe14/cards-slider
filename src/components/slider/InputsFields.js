import React from 'react'

export const InputsFields = ({ i }) => {

    return (
        <div className="inputs-fields">
            <div className="label-input">
                <label htmlFor={`title-input${i + 1}`}>{`Set Title (${i + 1})`}</label>
                <input id={`title-input${i + 1}`} className="title-input" type="text" minLength="1" maxLength="35" required />
            </div>
            <div className="label-input">
                <label htmlFor={`content-input${i + 1}`}>{`Set Content (${i + 1})`}</label>
                <input id={`content-input${i + 1}`} className="content-input" type="text" minLength="1" maxLength="160" required />
            </div>
            <div className="label-input">
                <label htmlFor={`firm-input${i + 1}`}>{`Set Firm (${i + 1})`}</label>
                <input id={`firm-input${i + 1}`} className="firm-input" type="text" minLength="1" maxLength="33" required />
            </div>
        </div>
    )
}
