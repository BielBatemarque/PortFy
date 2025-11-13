import { StyledButton } from "./styles";
import type { SimpleReactNode } from "../../types/simple-react-node";



export const ActionButton = ({ children }: SimpleReactNode) => {
    return (
        <StyledButton>{children}</StyledButton>
    );
}