import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FormPage from './pages/FormPage'
import Home from './pages/Home'
import SuccessPage from './pages/SuccessPage'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/form' component={FormPage} />
                    <Route exact path='/success' component={SuccessPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
