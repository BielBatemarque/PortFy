import { Container } from "../../../components/container";
import { Title } from "../../../components/title";
import { StyledImage } from "./styles";

export const HomePage = () => {
    return (        
        <Container direction="row">
            <Container width="49%">
                <Title>Gabriel <br /> Batemarque</Title>
            </Container>
            <Container width="49%" justifyContent="center" direction="row" padding="10px">
                <StyledImage src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dale" />
            </Container>
        </Container>
    );
}