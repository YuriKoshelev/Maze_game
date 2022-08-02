import React from "react"
import {useSelector} from "react-redux"
import logo from "../resources/img/label.png"
import StyleHeader from "../style/StyleHeader"


const Header = () => {
    
    const {winResult, failResult} = useSelector(state => state.maze)

    return (
        <>
        <StyleHeader>
            <div className="header">
                    <span></span>
                    <div className="title">Лабиринт</div>
                    <span></span>
            </div>
            <div className="subheader">
                <div className="label">
                    <img src={logo} alt="label"/>
                </div>
                <div className="statistics">
                    <div>
                        Выиграл: {winResult}
                        <br/>
                        Проиграл: {failResult}
                    </div> 
                </div> 
            </div>  
        </StyleHeader>   
        </>
        
    )
}

export default Header