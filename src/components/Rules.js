import React from "react"
import { useSelector, useDispatch } from "react-redux"
import finger_up from "../resources/img/finger_up.webp"
import finger_down from "../resources/img/finger_down.webp"

import {rulseUpdate} from "../store/sliceGame"
import StyledRules from "../style/StyleRules"

const Rules = () => {

    const {ruls} = useSelector(state => state.maze)
    const dispatch = useDispatch()

    const onClickClose = () => {
        dispatch(rulseUpdate(false))
    }

    if (!ruls) return (null)

    return (
        <StyledRules>
            <div className="overlay faded">
                <div className="rulse">
                    <div className="header">Правила игры</div>
                    <div className="descr">Есть поле размером 3 на 3 ячейки. В начале игры в случайную ячейку помещается машинка, и строится маршрут из 10 «ходов» в виде стрелочек (возможные варианты «вверх», «влево», «вниз», «вправо»). 
                    <br/>
                    <br/>
                    Игрок должен на время в уме «пройти» по этим ходам в лабиринте и указать конечную точку машинке кликнув на ячейку. Если игрок не успел нажать на ячейку до истечения времени, то отобразится правильная ячейка и появится кнопка "Повторить". Всего в игре 15 уровней, с каждым уровнем времени на прохождение будет меньше.
                    <br/>
                    <br/>
                    Если выбрана правильная ячейка, то появится смайлик с пальцем вверх.</div>
                    <img src={finger_up} alt="finger_up" />
                    <div className="descr">Если выбрана не правильная ячейка, то появится смайлик с пальцем вниз.</div>
                    <img src={finger_down} alt="finger_down" />
                    <button className="btn"
                            onClick={onClickClose}>
                                Ок
                    </button>
                </div>
            </div>
        </StyledRules>
    )
}

export default Rules