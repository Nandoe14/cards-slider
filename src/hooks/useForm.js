import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState)

    const reset = () => {
        setvalues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        })
        if (target.name === 'scale') {
            localStorage.scaleSlider = target.value
        }
    }
    return [values, handleInputChange, reset];
}
