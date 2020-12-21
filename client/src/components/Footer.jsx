import React from 'react'
import './stylesheets/footer.css'
import {FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'

function Footer() {
    return(
        <footer className='row'>
            <div className="footer-links col col-12">
            <a 
                href="https://www.facebook.com/profile.php?id=100014100945642" 
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook/>
            </a>
            <a 
                href="https://www.instagram.com/moncif_noui" 
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram/>
            </a>
            <a 
                href="https://linkedin.com/in/noui-moncif-376535183" 
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            </div>
            <div className="copy col col-12">
                2020 &copy; Moncif Noui
		        <p className="developer">
                    Designed and Developed By <a href="https://amirdiafi.com">Amir Diafi</a>
                </p>
		<p style={{color: "#bbb"}}>Version 0.1.2</p>
            </div>
            <div className="footer-line"></div>
        </footer>
    )
}

export default Footer