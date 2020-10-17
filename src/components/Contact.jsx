import React from 'react'
import './stylesheets/contact.css'
import {FaTwitter, FaLinkedin} from 'react-icons/fa'

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
                    <div className='item'> E-mail: <a href="mailto:amirdiafi2@gmail.com">
                            barikanoui@gmail.com
                        </a>
                    </div>
                    <hr/>
                    <div className='item'> Mobile: <a href="tel:+213665868409">
                            +213665868409
                        </a>
                    </div>
                    <hr/>
                    <div className='item'>
                        <a 
                            href="https://twitter.com/amir_diafiU" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaTwitter/> Amir Diafi
                        </a>
                    </div>
                    <hr/>
                    <div className='item'>
                        <a 
                            href="https://linkedin.com/amir_diafi" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin/> Amir Diafi
                        </a>
                    </div>
                </div>
		</div>
        )
    }
}
 
export default Contact 