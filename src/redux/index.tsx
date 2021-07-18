import React from 'react'
import { Provider } from 'react-redux'
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import store from './store'

const ReduxPage = () => {
    const match = useRouteMatch();
    
    return (
        <>
            <Provider store={store} >
            <h2>Redux 二级路由</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to={`${match.url}/home`} >Home</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/about`} >About</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={`${match.url}/about`} exact render={() => <About />} />
                    <Route path={`${match.url}/home`} exact render={() => <Home />} />
                    <Redirect from="/*" to={`${match.url}/home`} />

                </Switch>
            </Provider>
        </>
    )
}
export default ReduxPage