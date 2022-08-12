import styled from "styled-components"

const StyledRules = styled.section`

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, .56);
    z-index: 5;
}

.rulse {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 10px;
    width: 700px;
    text-align: center;
    background-color: darkorange;
    border-radius: 45px;
    color: white;
    .header {
        font-size: 20px;
        font-weight: 600;
    }
    .descr {
        margin-top: 10px;
    }
    img {
        display: block;
        margin: 0 auto;
        width: 20%;
    }
    .btn {
        margin-top: 10px;
        width: 20vh;
        height: 4vh;
        border-style: none;
        border-radius: 45px;
        color: darkorange;
        font-weight: 600;
        cursor: pointer;
    }
}

`

export default StyledRules