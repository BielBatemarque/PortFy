import { theme } from '../../styles/theme';
import styled from "styled-components";

interface StyledButtonProps {
  primary?: boolean;
}


export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${(props) => props.primary ? theme.colors.primary : "#FFF"};
    border: ${(props) => props.primary ? 'none' : `solid 2px ${theme.colors.primary}`};
    color: ${(props) => props.primary ? '#FFF' : `${theme.colors.primary}`};
    font-size: 1rem;
    border-radius: 5px;
    width:220px;
    height: 45px;
`;