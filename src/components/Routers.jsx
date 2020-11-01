import React from 'react'
import Home from './Home'
import Works from './Works'
import Products from './Products'
import Teach from './Teach'
import PayMethod from './PayMethod'
import {Switch, Route} from 'react-router-dom'

class Routers extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/works' component={Works} />
                <Route path='/products' component={Products} />
                <Route path='/teach' component={Teach} />
                <Route path='/pay_method' component={PayMethod} />
            </Switch>
        )
    }
}
 
export default Routers 