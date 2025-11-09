import { IoHomeOutline } from "react-icons/io5";
import { NavContainer } from "./styles";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa6";

export const NavBar = () => {


    return (
        <NavContainer>
            <Link to='/'>
                <IoHomeOutline />
            </Link>
            <Link to='/'>
                <FaBook color="blue"/>
            </Link>
            <Link to='/'>
                <FaRegAddressBook />
            </Link>
        </NavContainer>
    );
}