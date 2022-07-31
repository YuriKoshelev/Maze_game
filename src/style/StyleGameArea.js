import styled from "styled-components"

const StyleGameArea = styled.section`

.game_area {
    height: 50vh;
    width: 65%;
    margin: 0 auto;
    margin-top: 15px;
    transform: translateX(-4%);
    .numbers {
        display: grid;
        grid-template-columns: 4% 32% 32% 32%;
        gap: 5px;
        .number {
            background-color:rgb(137, 161, 248);
            text-align: center;
            color:#ffffff;
        }
    }
    .btn {
        display: block;
        margin: 0 auto;
        margin-top: 5px;
        height: 30px;
        width: 130px;
        border-style: none;
        border-radius: 45px;
        background-color: rgb(213, 156, 33);
        color: #ffffff;
        font-size: 15px;
        font-weight: 900;
        text-align: center;
        cursor: pointer;
        transform: translateX(19%);
        :hover {
            background-color:rgb(229, 168, 37) ;
        }
    }
}
 
.cells_groups {
    margin: 0 auto;
    margin-top: 5px; 
}

.cells_group {
    display: grid;
    grid-template-columns: 4% 32% 32% 32%;
    grid-template-rows: 16vh 16vh 16vh;
    gap: 5px;
    .number {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:rgb(137, 161, 248);
        color:#ffffff;
    }
    .cell {
        background-color:rgb(203, 150, 250);
        display: flex;
        align-items:center;
        cursor: pointer;
    }
    .win {
        background-color: green; 
    }
    .lose {
        background-color: #cd0303; 
    }
}

.car {
    display: block;
    margin: 0 auto;
    height: 40%;
    color: transparent;
    text-shadow: 0 0 0;
}

.finger {
    display: block;
    margin: 0 auto;
    height: 90%;
    color: transparent;
    text-shadow: 0 0 0;
}

.faded{
        animation-name: faded;
        animation-duration: 2s;
    }

.faded_cell{
        animation-name: faded;
        animation-duration: .5s;
    }
    
@keyframes faded{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

`

export default StyleGameArea