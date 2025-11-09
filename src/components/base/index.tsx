import { Suspense } from "react";
import { MainContainer, MainContent, MainSection } from "../../pages/painel/base/styles";
import Loader from "../loader/index";
import { Outlet } from "react-router-dom";

export default function BaseViewPortifolio () {
    return (
         <MainSection>
            {/* Aqui pode vir um header */}
            <MainContent>
                {/* Aqui pode vir uma sidebar */}
                <MainContainer id="main">
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