import * as React from "react";
import { useRoutes } from "react-router-dom"
import Details from "./Pages/Details";
import Home from "./Pages/Home/Index";
import Menu from "./Pages/Home/menu";
import Favorite from "./Pages/Favorites";

function App() {
    let element = useRoutes([
        {
            path: "/",
            element: <Menu />,
            children: [{
                path: "/Home",
                element: <Home/>
            },{
                path: "/details/:id",
                element: <Details />,
            },{
                path:"/Favorites",
                element: <Favorite />,
            }
        ]
        }
    ]);

    return element;
}

export default App;