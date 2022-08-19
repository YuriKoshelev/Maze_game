import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import StyleArrows from "../style/StyleArrows"

import up_arrow from "../resources/img/up-arrow.webp"
import down_arrow from "../resources/img/down-arrow.webp"
import right_arrow from "../resources/img/right-arrow.webp"
import left_arrow from "../resources/img/left-arrow.webp"

import {startUpdate} from '../store/sliceGame' 

const Arrows = () => {

    const [arrows, setArrows] = useState([])
    const dispatch = useDispatch()
    const {route, winResult} = useSelector(state => state.maze)

    useEffect(() => {

        updateArrows()

    }, [route])

    const updateArrows = () => {
        
        const newArrow = []
        let arrow = null
        route.forEach((elem, i) => {
            if (elem === '0') arrow = up_arrow
            if (elem === '1') arrow = right_arrow
            if (elem === '2') arrow = down_arrow
            if (elem === '3') arrow = left_arrow

            newArrow.push(<div key={i} className="arrows_arrow animate__zoomIn">
                    <img src={arrow} alt="arrow"/>
                    </div>)

        })

        function showArrow (index) {
            
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (index === 10) reject(false)
                    setArrows((prev) => {
                        return [...prev, newArrow.at(index)]
                    })
                    resolve(true)
                }, 500)
            })

            promise.then(() => {
                showArrow(index + 1)
            }).catch(() => {
                dispatch(startUpdate(true))
            })

        }

        setArrows([])
        showArrow(0)

    }

    if (winResult === 15) return (null)

    return (
        <StyleArrows>
            <div className="arrows">
                <div className="arrows_group">
                    {arrows}
                </div>
            </div>
        </StyleArrows>  
    )
}

export default Arrows