import React from 'react'
import './stylesheets/footer.css'
import {FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa'

function Footer() {
    return(
        <footer className='row'>
            <div className="footer-links col col-12">
            <a 
                href="https://twitter.com/amir_diafiU" 
                target="_blank"
                rel="noopener noreferrer">
                <FaTwitter/>
            </a>
            <a 
                href="https://www.linkedin.com/in/amirdiafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaYoutube/>
            </a>
            <a 
                href="https://www.youtube.com/channel/UCgbqyUzyD2IfqYoc0RcS2MA" 
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook/>
            </a>
            <a 
                href="https://github.com/AmirDiafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram/>
            </a>
            <a 
                href="https://github.com/AmirDiafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            </div>
            <div className="copy col col-12">
                2020 &copy; Moncif Noui
		<p className="developer">Designed and Developed By <a href="https://amirdiafi.com"> Amir Diafi </a> </p>
            </div>
            <div className="footer-line"></div>
        </footer>
    )
}

export default Footer