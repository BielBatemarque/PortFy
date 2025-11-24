import { HomeSection } from "./styles";
import { SubTitle, HomeImg, SocialMediaContainer } from "./styles";
import { ActionButton } from "../../../components/actionButton";
import { Title } from "../../../components/title";
import { Text } from "../../../components/text";
import { FaInstagramSquare, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export const HomePage = () => {

    const socialMedias = [
        { id: 1, icon: <FaInstagramSquare size={25} /> },
        { id: 2, icon: <FaFacebook size={25} /> },
        { id: 3, icon: <FaLinkedin size={25} /> },
        { id: 4, icon: <FaGithub size={25} /> },
    ];

    return (
        <HomeSection id="home">
            <div className="container">

                {/* Coluna esquerda */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                    <Title>Gabriel Batemarque</Title>

                    <SubTitle>Software Developer</SubTitle>

                    <Text>
                        Olá, sou Gabriel, formado em Análise e Desenvolvimento de Sistemas 
                        pelo IFSC – Campus Gaspar. Atuo como desenvolvedor Web Full-Stack, 
                        com foco em React, Node.Js e Python.
                    </Text>

                    <div style={{ display: "flex", gap: "15px", marginTop: "1rem" }}>
                        <ActionButton primary>Baixar CV</ActionButton>
                        <ActionButton>Fale Comigo!</ActionButton>
                    </div>
                </div>

                {/* Coluna direita */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                    <HomeImg src="https://pbs.twimg.com/profile_images/983018479644303361/UD5uocVf_400x400.jpg" />

                    <SocialMediaContainer>
                        {socialMedias.map(item => item.icon)}
                    </SocialMediaContainer>
                </div>

            </div>
        </HomeSection>
    );
};