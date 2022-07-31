import React from "react"
import logo from "../resources/img/label.png"
import StyleHeader from "../style/StyleHeader"

const Header = () => {
    return (
        <>
        <StyleHeader>
            <div className="header">
                    <span></span>
                    <div className="title">Лабиринт</div>
                    <span></span>
                </div>
                <div className="label">
                    <img src={logo} alt="label"/>
                </div>
            <div/>
        </StyleHeader>   
        </>
        
    )
}

export default Header