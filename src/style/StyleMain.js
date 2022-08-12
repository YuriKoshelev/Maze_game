import styled from "styled-components"
import bg from "../resources/img/background.webp"
import './normalize.css'
const StyledMain = styled.section`

.main {
    background: url(${bg});
    position: relative;
}

.container {
    height: 100vh;
    width: 60vw;
    margin: 0 auto;
}

.faded{
        animation-name: faded;
        animation-duration: 2s;
    }
    
@keyframes faded{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

@media (max-width: 1111px) {
    .container {
        height: 100vh;
        width: 100vw;
        margin: 0 auto;
    }
}

@media (max-width: 770px) {
    .rulse {
        width: 90vw;
    }
}

@media (max-width: 600px) {
    .rulse {
        font-size: 13px;
        width: 90vw;
    }
    .container {
        height: 100vh;
        width: 100vw;
        margin: 0 auto;
        .label img {
            transform: translateX(-30%);
        } 
        .statistics {
            transform: translateX(-20%);
        } 
        .level_group {
            transform: translateX(20%);
            .level {
                font-size: 17px;
            }
            .timer {
                font-size: 12px;
            }
        }
        .game_area {
            height: 50vh;
            width: 90%;
            transform: translateX(-2px);
            .cells_groups {
                height: 95%;
                .cells_group {
                    grid-template-columns: 33% 32% 33%;
                    grid-template-rows: 15vh 15vh 15vh;
                }
            }
            .left_lane {
                display: none;
            }
            .numbers {
                grid-template-columns: 33% 32% 33%;
            }
            .btn {
                transform: none;
                margin-top: 1px;
            }
            .win {
                transform: translateX(0);
            }
            .winbtn {
                margin-top: 20px;
            }
        }
        .arrows {
            margin-top: 46px;
            width: 80%;
            transform: translateX(-6%);
        }
    }
}

`
export default StyledMain