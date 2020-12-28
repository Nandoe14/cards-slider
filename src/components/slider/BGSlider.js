import React, { useEffect, useState } from 'react'
import bgImg1 from './../../assets/back_slider1.jpg'
import bgImg2 from './../../assets/back_slider2.jpg'
import bgImg3 from './../../assets/back_slider3.jpg'
import bgImg4 from './../../assets/back_slider4.jpg'
import bgImg5 from './../../assets/back_slider5.jpg'
import bgImg6 from './../../assets/back_slider6.jpg'
import bgImg7 from './../../assets/back_slider7.jpg'
import bgImg8 from './../../assets/back_slider8.jpg'
import bgImg9 from './../../assets/back_slider9.jpg'
import bgImg10 from './../../assets/back_slider10.jpg'

export const BGSlider = () => {

    const [state, setState] = useState(0)

    const bgImgArray = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6, bgImg7, bgImg8, bgImg9, bgImg10]

    useEffect(() => {
        setTimeout(() => {
            if (state === bgImgArray.length - 1) {
                setState(0)
            } else {
                setState(state + 1)
            }
        }, 3000000)
    }, [state, setState, bgImgArray.length])

    return (
        <div className="background-slider" style={{ backgroundImage: `url(${bgImgArray[state]})` }} >
            {// Utilizado únicamente para pre-descargar las imágenes del background
                bgImgArray.map((u, i) =>
                    <img className="img-desc" key={u} src={bgImgArray[i]} alt="bg" />
                )
            }
        </div>
    )
}
