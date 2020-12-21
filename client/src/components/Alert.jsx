import React from 'react'
import './stylesheets/alert.css'
import { RiWifiOffLine } from 'react-icons/ri'

class Alert extends React.Component {

    state = { isOnline: true }

    componentDidMount() {

        this.setState({isOnline: navigator.onLine?true:false})
        window.addEventListener('online', () => this.setState({isOnline: true}))
        window.addEventListener('offline', () => this.setState({isOnline: false}))

    }

    render() {
        return(
            <div className="offline-alert" style={{display: this.state.isOnline?'none':'flex'}}>
                <p className="alert alert-danger"><span><RiWifiOffLine /></span>OOPS!, you are offline</p>
		<button className="btn btn-primary" onClick={()=>window.location.reload()}>Try Again</button>
            </div>
        )
    }
}

export default Alert
