import React from 'react';
import './App.css';
import Routers from './components/Routers'
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer'
class App extends React.Component {

componentDidMount() {
    console.log('mounted')
    const script = document.createElement('script')
    script.src = "https://apps.elfsight.com/p/platform.js"
    script.async = "true"
    document.body.appendChild(script)
}

render() {
return (
    <Router>
      <Routers />
      <div className="elfsight-app-dcaa717e-eca6-4a5b-bff9-85e647f42958"></div>
      <Footer />
    </Router>
  )
}
}

export default App
