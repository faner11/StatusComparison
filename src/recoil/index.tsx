import React from 'react'
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import About from './Aubot';
import Home from './Home';

const RecoilPage = () => {
    const match = useRouteMatch();

    return (
        <>
            <RecoilRoot>
                <h2>Recoil 二级路由</h2>
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
            </RecoilRoot>
        </>
    )
}
export default RecoilPage