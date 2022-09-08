import * as React from "react";
import { Routes, Route }  from 'react-router-dom';


import { Callback } from "../components/auth/callback";
import { Logout } from "../components/auth/logout";
import { LogoutCallback } from "../components/auth/logoutCallback";
import { PrivateRoute } from "./privateRoute";
import { Register } from "../components/auth/register";
import { SilentRenew } from "../components/auth/silentRenew";
import { PublicPage } from "../components/publicPage"
import { PrivatePage } from "../components/privatePage"


export const PRoutes = (
     <Routes>
        <Route exact={true} path="/signin-oidc" element={<Callback/>} />
        <Route exact={true} path="/logout" element={<Logout/>} />
        <Route exact={true} path="/logout/callback" element={<LogoutCallback/>} />
        <Route exact={true} path="/register" element={<Register/>} />
        <Route exact={true} path="/silentrenew" element={<SilentRenew/>} />
        <Route path="/dashboard" element={<PrivatePage />}> </Route>
        {/*<Route path="/dashboard" element={<PrivateRoute/>}/>*/}
        <Route path="/" element={<PublicPage/>} />
    </Routes>
);