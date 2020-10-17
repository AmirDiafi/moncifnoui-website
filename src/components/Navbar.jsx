import React from 'react'
import './stylesheets/navbar.css'

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar">
                <div className="logo">
                    <span>MON</span>CIF
                </div>
                <ul className='list-unstyled'>
                    <li>
                        <a href="#home">
                            الرئيسية
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            حول
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            الخدمات
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials">
                            الشهادات
                        </a>
                    </li>
                    <li>
                        <a href="#companies">
                            شركائنا
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
 
export default Navbar;