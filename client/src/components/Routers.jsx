import React from 'react'
import Home from './Home'
import Works from './Works'
import Products from './Products'
import Teach from './Teach'
import PayMethod from './PayMethod'
import Dashboard from './Dashboard'
import Login from './Login'
import {Switch, Route} from 'react-router-dom'
import Page404 from './Page404'

class Routers extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/works' component={Works} />
                <Route path='/products' component={Products} />
                <Route path='/teach' component={Teach} />
                <Route path='/pay_method' component={PayMethod} />
                <Route component={Page404} />
            </Switch>
        )
    }
}
 
export default Routers 