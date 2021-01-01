import React from 'react'

export const InputsFields = ({ i, handleInputChange, cardsContents }) => {// Inputs constructor

    const {
        title1,
        content1,
        firm1,
        title2,
        content2,
        firm2,
        title3,
        content3,
        firm3,
        title4,
        content4,
        firm4,
        title5,
        content5,
        firm5,
        title6,
        content6,
        firm6,
        title7,
        content7,
        firm7,
        title8,
        content8,
        firm8
    } = cardsContents

    const titlesArray = [title1, title2, title3, title4, title5, title6, title7, title8]
    const contentArray = [content1, content2, content3, content4, content5, content6, content7, content8]
    const firmArray = [firm1, firm2, firm3, firm4, firm5, firm6, firm7, firm8]

    const handleIClick = (e) => {// When click on the inputs with className "title-input"
        e.target.select()
    }

    return (// Returns a package of 3 Inputs with settable name and id in order (1 to n) being "n" the number of cards
        <div className="inputs-fields">
            <div className="label-input">
                <label htmlFor={`title-input${i + 1}`}>{`Set Title (${i + 1})`}</label>
                <input
                    id={`title-input${i + 1}`}
                    className="title-input"
                    type="text"
                    name={`title${i + 1}`}
                    value={titlesArray[i]}
                    minLength="1"
                    maxLength="35"
                    autoComplete="off"
                    required
                    onChange={handleInputChange}
                    onClick={handleIClick}
                />
            </div>
            <div className="label-input">
                <label htmlFor={`content-input${i + 1}`}>{`Set Content (${i + 1})`}</label>
                <input
                    id={`content-input${i + 1}`}
                    className="content-input"
                    type="text"
                    name={`content${i + 1}`}
                    value={contentArray[i]}
                    minLength="1"
                    maxLength="160"
                    autoComplete="off"
                    required
                    onChange={handleInputChange}
                    onClick={handleIClick}
                />
            </div>
            <div className="label-input">
                <label htmlFor={`firm-input${i + 1}`}>{`Set Firm (${i + 1})`}</label>
                <input
                    id={`firm-input${i + 1}`}
                    className="firm-input"
                    type="text"
                    name={`firm${i + 1}`}
                    value={firmArray[i]}
                    minLength="1"
                    maxLength="33"
                    autoComplete="off"
                    required
                    onChange={handleInputChange}
                    onClick={handleIClick}
                />
            </div>
        </div>
    )
}
