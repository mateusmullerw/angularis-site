import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './sections/Home/Home';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route  path="/" component={Home} exact/>
        </BrowserRouter>
    )
}

export default Routes;