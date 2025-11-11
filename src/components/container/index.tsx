import type { ReactNode } from "react";
import { StyledContainer } from "./styles";


type StyledContainerProps = React.ComponentProps<typeof StyledContainer>;

interface ContainerProps extends StyledContainerProps {
    children: ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => {
    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
    );
}