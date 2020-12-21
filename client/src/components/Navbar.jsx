import React from 'react'
import './stylesheets/navbar.css'

class Navbar extends React.Component {
    state = {  }
    render() { 
        let location = window.location.hash
        return (
            <nav className="navbar">
                <div className="logo">
                    <a  href="#home">
                        <span>MON</span>CIF
                    </a>
                </div>
                <ul className='list-unstyled'>
                    <li>
                        <a className={location==="#home"?"active":null} href="#home">
                            الرئيسية
                        </a>
                    </li>
                    <li>
                        <a className={location==="#about"?"active":null} href="#about">
                            حول
                        </a>
                    </li>
                    <li>
                        <a className={location==="#services"?"active":null} href="#services">
                            الخدمات
                        </a>
                    </li>
                    <li>
                        <a className={location==="#testimonials"?"active":null} href="#testimonials">
                            الشهادات
                        </a>
                    </li>
                    <li>
                        <a className={location==="#companies"?"active":null} href="#companies">
                            شركائنا
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
 
export default Navbar;