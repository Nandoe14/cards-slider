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

export const BGSlider = ({ bgseconds }) => {// Background Changer Component

    const [state, setState] = useState(0)

    const bgImgArray = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6, bgImg7, bgImg8, bgImg9, bgImg10]

    useEffect(() => {
        setTimeout(() => {// Setting the cycle to change the Slider background image
            if (state === bgImgArray.length - 1) {
                setState(0)
            } else {
                setState(state + 1)
            }
        }, bgseconds * 1000)
    }, [state, setState, bgImgArray.length, bgseconds])

    return (
        <div className="background-slider" style={{ backgroundImage: `url(${bgImgArray[state]})` }} >
            {// Used only to pre-download background images
                bgImgArray.map((u, i) =>
                    <img className="img-desc" key={u} src={bgImgArray[i]} alt="bg" />
                )
            }
        </div>
    )
}
