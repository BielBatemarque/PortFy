import styled, { keyframes } from "styled-components";


export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    
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
  max-width: 100%;

  box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
  animation: ${profileAnimate} 8s ease-in-out infinite 1s;

  @media (max-width: 992px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 350px) {
    width: 160px;
    height: 160px;
  }
`;

export const SubTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 1rem;
    padding-left: 5.4rem;
    position: relative;

  &::before{
    background-color: hsl(0, 0%,46%);
    content: "";
    height: 1px;
    left: 0px;
    position: absolute;
    top: 1rem;
    width: 70px;
  }
`;

export const HomeSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 2rem;
    gap: 4rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 992px) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
      padding: 0 1rem;
    }
  }
`;