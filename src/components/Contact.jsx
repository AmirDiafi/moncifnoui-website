import React from 'react'
import './stylesheets/contact.css'
import {FaEnvelope, FaPhone, FaWhatsapp} from 'react-icons/fa'

class Contact extends React.Component {

    constructor() {
        super()
        this.goDown = React.createRef()
    }
    render() {
        return (
            <div className="contact text-center">
                <h2 className=" title">
                    تواصل معنا 
                </h2>
		        <div className="info">
                    <div className='item'> 
                        <a href="mailto:amirdiafi2@gmail.com">
                           <FaEnvelope/> barikanoui@gmail.com
                        </a>
                    </div>
                    <hr/>
                    <div className='item'> 
                        <a href="tel:+213665868409">
                            <FaPhone /> +213665868409
                        </a>
                    </div>
                    <hr/>
                    <div className='item'>
                        <a 
                            href="https://linkedin.com/amir_diafi" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaWhatsapp/> Moncif Noui
                        </a>
                    </div>
                </div>
		</div>
        )
    }
}
 
export default Contact 