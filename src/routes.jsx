import { Route, Routes } from "react-router";
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurGame from './components/pages/OurGame';
import Contact from './components/pages/Contact';
import Steam from './components/pages/Steam';
import NotPage from "./components/pages/NotPage";

const AppRoutes = () => {

    const navigationRoutes = [
        {path: "/", element: <Home /> },
        {path: "/about", element: <About /> },
        {path: "/contact", element: <Contact /> },
        {path: "/games", element: <OurGame /> },
        {path: "/steam", element: <Steam /> },
        {path: "*", element: <NotPage /> }

    ]
    return <Routes>{navigationRoutes.map((route)=> (<Route key={route.path} path={route.path} element={route.element}></Route>))}</Routes>

}