import { Route, Routes } from "react-router";
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurGame from './components/pages/OurGame';
import Contact from './components/pages/Contact';
import Media from './components/pages/Media';
import NotPage from "./components/pages/NotPage";

const AppRoutes = () => {

 const navigationRoutes = [
        {path: "/", element: <Home /> },
        {path: "/about", element: <About /> },
        {path: "/contact", element: <Contact /> },
        {path: "/games", element: <OurGame /> },
        {path: "/media", element: <Media /> },
        {path: "*", element: <NotPage /> }

    ]
    return <Routes>{navigationRoutes.map((route)=> (<Route key={route.path} path={route.path} element={route.element}></Route>))}</Routes>

}

export default AppRoutes 