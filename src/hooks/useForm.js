import { useState } from 'react'

export const useForm = (initialState = {}, opstate = {// Checkbox initial state (no checked)
    titleCheck: false,
    contentCheck: false,
    firmCheck: false
}) => {

    const [values, setvalues] = useState(initialState)

    const { titleCheck, contentCheck, firmCheck } = opstate

    const resetScale = () => {// Set scale to 100
        setvalues({
            ...values,
            scale: 100
        })
    }

    const resetGap = () => {// Set gap to -296 (24)
        setvalues({
            ...values,
            gap: -296
        })
    }

    const resetBGTime = () => {// Clear the BG time lapse INPUT field
        setvalues({
            ...values,
            bgsecondset: ''
        })
    }

    const titleCheckF = (target) => {// 🔵 Set Same Title function
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

    const contentCheckF = (target) => {// 🔵 Set Same Content function
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

    const firmCheckF = (target) => {// 🔵 Set Same Firm function
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

    const noChecked = (target) => {// No same-mode input checked (and the rest inputs) function
        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleInputChange = ({ target }) => {
        if (titleCheck && !contentCheck && !firmCheck) { // 🔵⚪⚪
            if (target.name === 'title1') {
                titleCheckF(target)
            } else {
                noChecked(target)
            }
        }
        if (!titleCheck && contentCheck && !firmCheck) { // ⚪🔵⚪
            if (target.name === 'content1') {
                contentCheckF(target)
            } else {
                noChecked(target)
            }
        }
        if (!titleCheck && !contentCheck && firmCheck) { // ⚪⚪🔵
            if (target.name === 'firm1') {
                firmCheckF(target)
            } else {
                noChecked(target)
            }
        }
        if (titleCheck && contentCheck && !firmCheck) { // 🔵🔵⚪
            if (target.name === 'title1') {
                titleCheckF(target)
            } else if (target.name === 'content1') {
                contentCheckF(target)
            } else {
                noChecked(target)
            }
        }
        if (!titleCheck && contentCheck && firmCheck) { // ⚪🔵🔵
            if (target.name === 'content1') {
                contentCheckF(target)
            } else if (target.name === 'firm1') {
                firmCheckF(target)
            } else {
                noChecked(target)
            }
        }
        if (titleCheck && !contentCheck && firmCheck) { // 🔵⚪🔵
            if (target.name === 'firm1') {
                firmCheckF(target)
            } else if (target.name === 'title1') {
                titleCheckF(target)
            } else {
                noChecked(target)
            }
        }
        if (titleCheck && contentCheck && firmCheck) { // 🔵🔵🔵
            if (target.name === 'title1') {
                titleCheckF(target)
            } else if (target.name === 'content1') {
                contentCheckF(target)
            } else if (target.name === 'firm1') {
                firmCheckF(target)
            } else {
                noChecked(target)
            }
        }
        if (!titleCheck && !contentCheck && !firmCheck) { // ⚪⚪⚪
            noChecked(target)
        }

        if (target.name === 'scale') {// Save to local storage the modified scale on Options
            localStorage.scaleSlider = target.value
        }
        if (target.name === 'gap') {// Save to local storage the modified card's gap on Options
            localStorage.gapSlider = target.value
        }
    }
    return [values, handleInputChange, resetScale, resetGap, resetBGTime]
}
