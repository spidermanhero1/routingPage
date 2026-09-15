import { Route, Routes } from "react-router";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import OurGame from './pages/OurGame/OurGame';
import Contact from './pages/Contact/Contact';
import Media from './pages/Media/Media';
import GameDetail from './pages/GameDetail/GameDetail';
import NotPage from './pages/NotPage/NotPage';
import Privacy from './pages/Privacy/Privacy';

const AppRoutes = () => {

 const navigationRoutes = [
        {path: "/", element: <Home /> },
        {path: "/about", element: <About /> },
        {path: "/contact", element: <Contact /> },
        {path: "/games", element: <OurGame /> },
        {path: "/games/:gameId", element: <GameDetail /> },
        {path: "/media", element: <Media /> },
        {path: "/privacy", element: <Privacy /> },
        {path: "*", element: <NotPage /> }

    ]
    return <Routes>{navigationRoutes.map((route)=> (<Route key={route.path} path={route.path} element={route.element}></Route>))}</Routes>

}

export default AppRoutes 