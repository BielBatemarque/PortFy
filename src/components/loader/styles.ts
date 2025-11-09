import styled from "styled-components";

interface LoaderContainerProps {
    width?: string;
    height?: string;
}

interface StyledLoaderProps {
  size?: string;
  margin?: string;
}


export const StyledLoader = styled.svg<StyledLoaderProps>`
  animation: rotate 2s linear infinite;
  margin: ${({ margin }: StyledLoaderProps) => margin || "-25px 0 0 -25px"};
  width: ${({ size }: StyledLoaderProps) => size || "20px"};
  height: ${({ size }: StyledLoaderProps) => size || "20px"};

  & .path {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

`;

export const LoaderContainer = styled.div<LoaderContainerProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "90vh"};
  display: flex;
  justify-content: center;
  align-items: center;
`;