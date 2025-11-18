import { ActionButton } from "../../../components/actionButton";
import { Container } from "../../../components/container";
import { Text } from "../../../components/text";
import { Title } from "../../../components/title";
import { HomeImg, SocialMediaContainer, SubTitle } from "./styles";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const HomePage = () => {

    const socialMedias = [
        {
            id: 0,
            name: 'Instagram',
            icon: <FaInstagramSquare size={25}/>
        },
        {
            id: 0,
            name: 'Facebook',
            icon: <FaFacebook size={25}/>
        },
                {
            id: 0,
            name: 'Linkedin',
            icon: <FaLinkedin size={25} />
        },
                {
            id: 0,
            name: 'GitHub',
            icon: <FaGithub size={25} />
        },
    ]

    return (        
        <Container direction="row">
            <Container width="65%"  alignItems="center" padding="10px" gap="8rem">
                <Container padding="20px 50px 50px 150px">
                    <Title>Gabriel Batemarque</Title>
                    <SubTitle>Software Developer</SubTitle>
                    <Text>Olá, sou Gabriel, formado em Análise e Desenvolvimento de Sistemas pelo IFSC – Campus Gaspar. Atuo como desenvolvedor Web Full-Stack, com foco em React, Node.Js e Python.</Text>
                    <Container direction="row" gap="15px" justifyContent="start" marginTop="1rem">
                        <ActionButton primary={true}>Baixar CV</ActionButton>
                        <ActionButton>Fale Comigo!</ActionButton>
                    </Container>                
                </Container>
            </Container>
            <Container width="34%" alignItems="center" padding="10px" gap="8rem">
                <HomeImg src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?fm=jpg&q=60&w=3000" />

                <SocialMediaContainer>
                    {socialMedias?.map(socialMedia => (socialMedia?.icon))}
                </SocialMediaContainer>
            </Container>
        </Container>
    );
}