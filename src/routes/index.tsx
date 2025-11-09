import { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Loader from "../components/loader";
import BasePainelScreen from "../pages/painel/base";
import { MePage } from "../pages/views/me";
import { SkillsPage } from "../pages/views/skills";
import { CareerPage } from "../pages/views/career";
import { HomePage } from "../pages/views/home";

const ViewPage = lazy(() => import('../pages/views/index'));
const PainelHomePage = lazy(() => import('../pages/painel/home'));
const PainelLoginPage = lazy(() => import('../pages/painel/login'));


export const AppRoutes = () => {
    return (
        <Suspense
            fallback={
                <Loader.Conainter>
                    <Loader color="red" size="60px" />
                </Loader.Conainter>
            }
        >
            <Routes>
                {/* Rotas de visualização do portifólio */}
                <Route path="/" element={<ViewPage />}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="me" element={<MePage />} />
                    <Route path="skills" element={<SkillsPage />} />
                    <Route path="career" element={<CareerPage />} />
                </Route>

                {/* Rotas do painel de controle */}
                <Route path="painel" element={<BasePainelScreen />}>
                    <Route path="login" element={<PainelLoginPage />}/>
                    <Route path="home" element={<PainelHomePage />} />
                </Route>
            </Routes>
        </Suspense>
    );
}