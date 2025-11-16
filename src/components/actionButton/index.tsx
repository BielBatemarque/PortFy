import { StyledButton } from "./styles";
import type { SimpleReactNode } from "../../types/simple-react-node";

interface ActionButtonProps extends SimpleReactNode {
  primary?: boolean;
}

export const ActionButton = ({ children, primary, ...props }: ActionButtonProps) => {
  return (
    <StyledButton {...props} primary={primary}>
      {children}
    </StyledButton>
  );
};