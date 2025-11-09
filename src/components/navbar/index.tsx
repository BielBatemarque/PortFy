import { IoHomeOutline } from "react-icons/io5";
import { NavContainer, NavLink } from "./styles";
import { FaRegAddressBook } from "react-icons/fa6";
import { useMemo, useState } from "react";
import { GrCloudComputer } from "react-icons/gr";
import { IoMdCode } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPage } from "react-icons/md";

export const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState("home");

    const sessionsMenu = useMemo(() => {
        const sessions = [
            {
                key: 'home',
                path: '/home',
                icon : (<IoHomeOutline />), 
            },
            {
                key: 'infoMe',
                path: '/me',
                icon: (<FaRegAddressBook />),
            },
            {
                key: 'skills',
                path: '/skills',
                icon: (<GrCloudComputer />),
            },
            {
                key: 'code',
                path: '/code',
                icon: (<IoMdCode />),
            },
            {
                key: 'career',
                path: '/career',
                icon: (<MdWorkOutline />),
            },
            {
                key: 'projects',
                path: '/projects',
                icon: (<GrProjects />),
            },
            {
                key: 'contact',
                path: '/contact',
                icon: (<MdOutlineContactPage />),
            }
        ];

        return sessions;
    }, []);


    return (
        <NavContainer>
            {sessionsMenu.map((menu) => (
                <NavLink to={menu?.path} active={menu?.key == activeMenu} onClick={() => setActiveMenu(menu?.key)}>
                    {menu?.icon}
                </NavLink>
            ))}
        </NavContainer>
    );
}