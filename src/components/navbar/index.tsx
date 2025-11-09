import { IoHomeOutline } from "react-icons/io5";
import { NavContainer, NavLink } from "./styles";
import { FaRegAddressBook } from "react-icons/fa6";
import { useMemo } from "react";
import { GrCloudComputer } from "react-icons/gr";
import { IoMdCode } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPage } from "react-icons/md";


export const NavBar = () => {
    const sessionsMenu = useMemo(() => {
        const sessions = [
            {
                key: 'home',
                path: '/',
                active: true,
                icon : (<IoHomeOutline />), 
            },
            {
                key: 'infoMe',
                path: '/me',
                active: false,
                icon: (<FaRegAddressBook />),
            },
            {
                key: 'skills',
                path: '/skills',
                active: false,
                icon: (<GrCloudComputer />),
            },
            {
                key: 'code',
                path: '/code',
                active: false,
                icon: (<IoMdCode />),
            },
            {
                key: 'code',
                path: '/qualify',
                active: false,
                icon: (<MdWorkOutline />),
            },
            {
                key: 'code',
                path: '/projects',
                active: false,
                icon: (<GrProjects />),
            },
            {
                key: 'code',
                path: '/contact',
                active: false,
                icon: (<MdOutlineContactPage />),
            }
        ];

        return sessions;
    }, []);


    return (
        <NavContainer>
            {sessionsMenu.map((menu) => (
                <NavLink to={menu?.path} active={menu?.active}>
                    {menu?.icon}
                </NavLink>
            ))}
        </NavContainer>
    );
}