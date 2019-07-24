import { HashRouter as Router,Route,Redirect,Switch } from 'react-router-dom'
import App from '../App'
import Home from '../Views/Homepage'
import Paging from '../Views/Paging'
import Shopcar from '../Views/Shopcar'
import Mine from '../Views/Mine'
import Detail from '../Views/Detail'
import React from 'react'


const router = <Router>
    <App>   
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/paging" component={Paging}/>
            <Route path="/shopcar" component={Shopcar}/>
            <Route path="/mine" component={Mine}/>
            <Route path="/detail/:id" component={Detail}/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </App>
</Router>

export default router;

// vue   hash           history
// react HashRouter     BrowserRouter

