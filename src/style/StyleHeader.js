import styled from "styled-components"
const StyledHeader = styled.section`

.header {
    margin: 0 auto;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        background-color: rgb(103, 133, 244);
        width: 33%;
        height: 2px;
    }
    .title {
        background-color:rgb(249, 185, 46);
        width: 33%;
        height: 30px;
        color: #ffffff;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        line-height: 30px;
        border-radius: 90px;
    }
} 

.subheader {
    display: flex;
    justify-content: center;
    .label {
        margin: 0 auto;
        margin-top: 15px;
        img {
            display: block;
            margin: 0 auto;
            height: 2rem;
            transform: translateX(-40%);
        }
    }
    .statistics {
        display: flex;
        align-items: flex-end;
        transform: translateX(-14vw);
        font-size: 13px;
        color: rgb(179, 125, 9);
        font-weight: 600;
        .question {
            display: block;
            margin: 0 auto;
            width: 4vh;
            cursor: pointer;
        }
    }
    .level_group {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: flex-start;
        transform: translateX(14vw);
        width: 100px; 
        .level {
            color: darkgreen;
            font-weight: 600;
            font-size: 18px;
        }
        .timer {
            color: red;
        }
    }
}



`

export default StyledHeader