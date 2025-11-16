import { StyledName } from "./styles";

interface ViewNameProps {
    name: string;
}

export const ViewName = ({ name }: ViewNameProps) => {
    return (
        <StyledName>{name}</StyledName>
    );
}