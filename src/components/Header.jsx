import React from 'react'
import './stylesheets/header.css'
import {FaChevronDown, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {ImCog} from 'react-icons/im'

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
		<div className="overlay" style={{zIndex: 0}}></div>
		<div className="go-down-icon" ref={this.goDown}><FaChevronDown /></div>
                <div className="content text-right">
		    <h1 className="text-center">مرحبا بك</h1>
		    <div className="buttons">
		        <Link to='/products' className="btn btn-primary">تصوق الأن <FaShoppingCart/></Link>
		        <Link to='/works' className="btn btn-secondary">إبدأ عملك <ImCog/></Link>
		    </div>
		</div>
            </header>
        )
    }
}
 
export default Header;