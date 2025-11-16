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
            <Container width="65%"  alignItems="center" padding="10px" gap="8rem">
                <Container padding="20px 50px 50px 150px">
                    <Title>Gabriel Batemarque</Title>
                    <SubTitle>Software Developer</SubTitle>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad aliquam nisi similique odit placeat facere quos minus architecto nostrum tempore deserunt, dolores excepturi fuga. Sit asperiores nam quis distinctio!</Text>
                    <Container direction="row" gap="15px" justifyContent="start" marginTop="1rem">
                        <ActionButton primary={true}>bora bill</ActionButton>
                        <ActionButton>bora fio bill</ActionButton>
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