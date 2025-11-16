import styled, { keyframes } from "styled-components";


export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const profileAnimate = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;

interface HomeImgProps {
  src: string;
}

export const HomeImg = styled.div<HomeImgProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 300px;
  height: 300px;
  /* order: 1; */
  justify-self: center;

  box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
  animation: ${profileAnimate} 8s ease-in-out infinite 1s;

  @media screen and (max-width: 992px) {
    width: 250px;
    height: 250px;
    box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
    order: initial;
    justify-self: initial;
  }

  @media screen and (max-width: 350px) {
    width: 180px;
    height: 180px;
  }
`;