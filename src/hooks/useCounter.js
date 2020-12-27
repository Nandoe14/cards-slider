import { useState } from "react"

export const useCounter = ({ init = 0, n = 0 }) => {

    const [counter, setCounter] = useState(init)

    const increment = (factor = 1) => {
        setCounter(counter + factor)
    }

    const decrement = (factor = 1) => {
        setCounter(counter - factor)
    }

    const reset = (x = 1) => {
        setCounter(x)
    }

    const resetn = () => {
        setCounter(n)
    }

    return {
        counter,
        increment,
        decrement,
        reset,
        resetn
    }

}
