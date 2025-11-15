import { ActionButton } from "../../../components/actionButton";
import { Container } from "../../../components/container";
import { Text } from "../../../components/text";
import { Title } from "../../../components/title";
import { SocialMediaContainer, StyledImage } from "./styles";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const HomePage = () => {

    const socialMedias = [
        {
            id: 0,
            name: 'Instagram',
            icon: <FaInstagramSquare />
        },
        {
            id: 0,
            name: 'Facebook',
            icon: <FaFacebook />
        },
                {
            id: 0,
            name: 'Linkedin',
            icon: <FaLinkedin />
        },
                {
            id: 0,
            name: 'GitHub',
            icon: <FaGithub />
        },
    ]

    return (        
        <Container direction="row">
            <Container width="49%" alignItems="center" padding="10px">
                <Title>Gabriel <br /> Batemarque</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad aliquam nisi similique odit placeat facere quos minus architecto nostrum tempore deserunt, dolores excepturi fuga. Sit asperiores nam quis distinctio!</Text>
                <Container direction="row">
                        <ActionButton>bora bill</ActionButton>
                        <ActionButton>bora fio bill</ActionButton>
                </Container>                
            </Container>
            <Container width="49%" alignItems="center" padding="10px" gap="8rem">
                <StyledImage src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dale" />
                <SocialMediaContainer>
                    {socialMedias?.map(socialMedia => (socialMedia?.icon))}
                </SocialMediaContainer>
            </Container>
        </Container>
    );
}