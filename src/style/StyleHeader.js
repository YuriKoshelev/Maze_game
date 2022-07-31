import styled from "styled-components"

const StyledHeader = styled.section`

.header {
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        background-color: rgb(103, 133, 244);
        width: 33%;
        height: 2px;
    }
    .title {
        background-color:rgb(249, 185, 46) ;
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

.label {
    margin: 0 auto;
    margin-top: 15px;
    img {
        display: block;
        margin: 0 auto;
        height: 2rem;
    }
}

`

export default StyledHeader