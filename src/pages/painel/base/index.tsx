import { Suspense } from "react";
import { MainContainer, MainContent, MainSection } from "./styles";
import Loader from "../../../components/loader";
import { Outlet } from "react-router-dom";

export default function BasePainelScreen() {
    return (
        <MainSection>
            {/* Aqui pode vir um header */}
            <MainContent>
                {/* Aqui pode vir uma sidebar */}
                <MainContainer id="main">
                    opaopaopa
                    <Suspense
                        fallback={
                            <Loader.Conainter>
                                <Loader size="60px" color="red"/>
                            </Loader.Conainter>
                        }
                    >
                        <Outlet />
                    </Suspense>
                    {/* Aqui pode vir um footer  */}
                </MainContainer>
            </MainContent>
        </MainSection>
    );
}