import { useState } from 'react'

export const useForm = (initialState = {}, opstate = {
    titleCheck: false,
    contentCheck: false,
    firmCheck: false
}) => {
    const [values, setvalues] = useState(initialState)

    const { titleCheck, contentCheck, firmCheck } = opstate

    const reset = () => {
        setvalues(initialState)
    }

    const handleInputChange = ({ target }) => {
        if (titleCheck || contentCheck || firmCheck) {
            if (target.name === 'title1') {
                setvalues({
                    ...values,
                    title1: target.value,
                    title2: target.value,
                    title3: target.value,
                    title4: target.value,
                    title5: target.value,
                    title6: target.value,
                    title7: target.value,
                    title8: target.value
                })
            }
            if (target.name === 'content1') {
                setvalues({
                    ...values,
                    content1: target.value,
                    content2: target.value,
                    content3: target.value,
                    content4: target.value,
                    content5: target.value,
                    content6: target.value,
                    content7: target.value,
                    content8: target.value
                })
            }
            if (target.name === 'firm1') {
                setvalues({
                    ...values,
                    firm1: target.value,
                    firm2: target.value,
                    firm3: target.value,
                    firm4: target.value,
                    firm5: target.value,
                    firm6: target.value,
                    firm7: target.value,
                    firm8: target.value
                })
            }
        } else {
            setvalues({
                ...values,
                [target.name]: target.value
            })
        }
        if (target.name === 'scale') {
            localStorage.scaleSlider = target.value
        }
    }
    return [values, handleInputChange, reset];
}
