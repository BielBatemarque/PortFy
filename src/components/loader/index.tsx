import { LoaderContainer, StyledLoader } from "./styles";

interface LoaderProps {
  size?: string;
  color?: string;
  [key: string]: any; 
};

const Loader = ({ size, color, ...props }: LoaderProps) => {
    return (
      <StyledLoader {...props} size={size} viewBox="0 0 50 50">
        <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            stroke={color || "#fff"}
        />
      </StyledLoader>
    );
};

Loader.Conainter = LoaderContainer;
export default Loader;