import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFoundPage from "../pages/NotFoundPage";
import PostIdPages from "../pages/PostIdPages";
import * as PropTypes from "prop-types";
import PrivatePage from "../pages/PrivatePage";
import Login from "../pages/Login";

function PrivateRoute(props) {
    return null;
}

PrivateRoute.propTypes = {children: PropTypes.node};
const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
        ?
            <Routes>
                <Route path="private" element={<PrivatePage/>}/>
            </Routes>
        :
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route exact path="/posts" element={<Posts/>}/>
                <Route exact path="/posts/:id" element={<PostIdPages/>}/>
                <Route path="private" element={<PrivatePage children/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/" element={<Posts to="/" replace />}/>
            </Routes>
    );
};

export default AppRouter;






{/*{routes.map(route =>*/}
{/*    <Route*/}
{/*        component={route.component}*/}
{/*        path={route.path}*/}
{/*        exact={route.exact}*/}
{/*    />*/}
{/*)}*/}