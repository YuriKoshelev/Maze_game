import styled from "styled-components"
import bg from "../resources/img/background.webp"

const StyledMain = styled.section`

.main {
    background: url(${bg});
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

@media (max-width: 575px) {
    .container {
        height: 100vh;
        width: 100vw;
        margin: 0 auto;
        .game_area {
            height: 50vh;
            width: 90%;
            transform: none;
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