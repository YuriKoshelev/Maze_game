import React, {useRef, useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import StyleHeader from "../style/StyleHeader"
import logo from "../resources/img/label.webp"
import question from "../resources/img/question.webp"

import {setSelectedCell, failResultUpdate, rulseUpdate} from "../store/sliceGame"

const Header = () => {

    const [idTimer, setIdTimer] = useState(null)
    const refTimer = useRef(null)
    const {winResult, failResult, selectedCell, games, winCell, ruls} = useSelector(state => state.maze)
    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedCell === null && !ruls) {
            setTimer()
        } else {
            refTimer.current.innerText = ''
            clearInterval(idTimer)
        }
    }, [selectedCell, ruls])

    const setTimer = () => {
        let sec = 43 
        
        if (games - failResult > 13) {
            sec = sec - 22 - (games - failResult)     
        } else if (games - failResult > 9) {
            sec = sec - 9 - (games - failResult) * 2 
        } else {
            sec = sec - (games - failResult) * 3
        }

        const id = setInterval(() => {
            
            sec = sec - 1
            
            refTimer.current.innerText = `Осталось: ${sec}`
            if (!sec) {
                clearInterval(id)
                refTimer.current.innerText = ''
                dispatch(setSelectedCell(-1))
                dispatch(failResultUpdate(failResult + 1))
            }      
        }, 1000)
        setIdTimer(id)
    }

    const onClickQuestion = () => {
        if (games - failResult < 8) {
            clearInterval(idTimer)
            dispatch(rulseUpdate(true))
        }
    }

    let level = 0
    if (!selectedCell) {
        level = winResult + 1 
    } else {
        if (selectedCell === winCell) {
            level = winResult
        } else {
            level = winResult + 1
        }
    }
    if (games === 1) level = 1

    return (
        <StyleHeader>
            <div className="header">
                    <span></span>
                    <div className="title">Лабиринт</div>
                    <span></span>
            </div>
            <div className="subheader">
                <div className="level_group">
                    <div className="level">Уровень {level}</div>
                    <div ref={refTimer} className="timer"></div>
                </div>               
                <div className="label">
                    <img src={logo} alt="label"/>
                </div>
                <div className="statistics">
                    <div>
                        <img className="question" 
                             src={question} 
                             alt="question" 
                             onClick={onClickQuestion}/>
                        Выиграл: {winResult}
                        <br/>
                        Проиграл: {failResult}
                    </div> 
                </div> 
            </div>  
        </StyleHeader>        
    )
}

export default Header