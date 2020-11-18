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
		        <div className="info" dir="ltr">
                    <div className='item'> 
			<FaEnvelope/>
			<br />
                        <a href="mailto:dz.flp.mino@gmail.com">
                           dz.flp.mino@gmail.com
                        </a>
                    </div>
                    <hr/>
                    <div className='item tel'> 
			<FaPhone />
                        <div>
			    <a href="tel:+213556374256">
                            +213556374256
                        </a>
                        <br/>
			<a href="tel:+213662585829">
                             +213662585829
                        </a>
			</div>
                    </div>
                    <hr/>
                    <div className='item whatsapp'>
			<FaWhatsapp/>
                        <div className="">
			    <a 
                            href="https://wa.me/213556374256" 
                            target="_blank"
                            rel="noopener noreferrer">
                            +213556374256
                        </a>
                        <br/>
			<a 
                            href="https://wa.me/213662585829" 
                            target="_blank"
                            rel="noopener noreferrer">
                            +213662585829
                        </a>
			</div>
                    </div>
                </div>
		</div>
        )
    }
}
 
export default Contact 