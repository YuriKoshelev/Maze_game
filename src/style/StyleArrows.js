import styled from "styled-components"


const StyleArrows = styled.section`

.arrows {
    margin: 0 auto;
    margin-top: 60px;
    height: 20vh;
    width: 50%;
    transform: translateX(-4%);
    &_group {
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 9vh 9vh;
        gap: 10px;
    }
    &_arrow {
        display: flex;
        align-items:center;
        background-color:#3460fc;
        border-radius: 10px;
        color: transparent;
        text-shadow: 0 0 0;
        img {
            display: block;
            margin: 0 auto;
            width: 60%;
            max-height: 95%;
            user-select: none;
        }
    }
}

.animate__zoomIn {
  animation-name: zoomIn;
  animation-duration: 3s;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

`

export default StyleArrows