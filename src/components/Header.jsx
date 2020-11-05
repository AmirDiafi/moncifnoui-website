import React from 'react'
import './stylesheets/header.css'
import {FaChevronDown} from 'react-icons/fa'

class Header extends React.Component {

    constructor() {
        super()
        this.goDown = React.createRef()
    }
    
    componentDidMount() {
        this.goDown.current.addEventListener("click", () => {
             window.scrollTo(0, window.innerHeight/2+150)    
        
        })
    }
    render() {
        return (
            <header className="header" id="home">
		<div className="go-down-icon" ref={this.goDown}><FaChevronDown /></div>
                <div className="content text-right">
		    <h1>مرحبا بك</h1>
		</div>
            </header>
        )
    }
}
 
export default Header;