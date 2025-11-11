import styled from "styled-components";
import { Link } from 'react-router-dom';

interface NavLinksPros {
    backGroud?: string;
    color?: string;
    active?: boolean;
}

export const NavContainer = styled.nav`
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    bottom: 2rem;
    left: calc(50%);
    transform: translateX(-50%);
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
`;

export const NavLink = styled(Link)<NavLinksPros>`
    background: ${(props) => props.active ?  "#3acf7dff" : "transparent"};
    color: ${(props) => props.active ? "#1f1f38" :  "rgba(255, 255, 255, 0.6)"};
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    font-size: 1.1rem;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`;

// :root {
//   --color-bg: #1f1f38;
//   --color-bg-variant: #2c2c6c;
//   --color-primary: #4db5ff;
//   --color-primary-variant: rgba(77, 181, 255, 0.4);
//   --color-white: #fff;
//   --color-light: rgba(255, 255, 255, 0.6);
//   --transition: all 400ms ease;
//   --container-width-lg: 75%;
//   --container-width-md: 86%;
//   --container-width-sm: 90%;
// Normal CSS
// nav {
//   background: rgba(0, 0, 0, 0.3);
//   width: max-content;
//   padding: 0.7rem 1.7rem;
//   z-index: 2;
//   position: fixed;
//   bottom: 2rem;
//   left: calc(50%);
//   transform: translateX(-50%);
//   display: flex;
//   gap: 0.8rem;
//   border-radius: 3rem;
//   backdrop-filter: blur(15px);
// }
// nav a {
//   background: transparent;
//   padding: 0.8rem;
//   border-radius: 50%;
//   display: flex;
//   color: var(--color-light);
//   font-size: 1.1rem;
// }
// nav a:hover {
//   background: rgba(0, 0, 0, 0.3);
// }
// nav a.active {
//   background: var(--color-primary);
//   color: var(--color-bg);
// }
