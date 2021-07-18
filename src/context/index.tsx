import React, { useReducer } from 'react'
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import About from './Aubot'
import Home from './Home'
import HomeContext, { dataInit as homeDataInit, reducer as HomeReducer } from './store/HomeContext'
import AubotContext, { dataInit as aubotDataInit, reducer as AubotReducer } from './store/AubotContext'
const Context = () => {
    const [homeState, setHomeState] = useReducer(HomeReducer, homeDataInit)
    const [aubotState, setAubotState] = useReducer(AubotReducer, aubotDataInit)
    const match = useRouteMatch();
    return <>
        <HomeContext.Provider value={{ state: homeState, setState: setHomeState }}>
            <AubotContext.Provider value={{ state: aubotState, setState: setAubotState }}>
                <h2>useContext + useReducer 二级路由</h2>
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
            </AubotContext.Provider>
        </HomeContext.Provider>
    </>
}
export default Context


