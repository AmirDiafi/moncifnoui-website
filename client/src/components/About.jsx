import React from 'react'
import './stylesheets/about.css'
import {FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'

class About extends React.Component {
    state = {  }
    render() {
        return (
            <div className="about ">
                <div className="row">
                    <div className="head col-md-6">
                        <img src='https://drive.google.com/uc?export=view&id=1uCQv8semsH4nrl0K-N_v1TCuHV4nOYYc' alt=""/>
			<ul className="list-unstyled">
			    <li>
			    <a 
                		href="https://www.facebook.com/profile.php?id=100014100945642" 
                		target="_blank"
                		rel="noopener noreferrer">
                		<FaFacebook/>
            		    </a>
			    </li>
			    <li>
            		    <a 
                		href="https://www.instagram.com/moncif_noui" 
                		target="_blank"
                		rel="noopener noreferrer">
                		<FaInstagram/>
            		    </a>
			    </li>
			    <li>
			    <a 
                		href="https://www.facebook.com/profile.php?id=100014100945642" 
                		target="_blank"
                		rel="noopener noreferrer">
                		<FaLinkedin/>
            		    </a>
			    </li>
			</ul>
                    </div>
                    <div className="body col-md-6">
                        <div>
                            <p> منصف نوي </p>
                            <p>مقيم  في ولاية باتنة متخرج  من جامعة باتنة 2  تخصص هندسة مدنية .  انا فخور بكوني صاحب أعمال في مجال  التسويق بالعلاقات والبيع المباشر.</p>
                            <p>إن مساعدة الناس على خلق حياة بلا حدود هي الآن شغفي الأكبر!</p>
                            <hr/>
                            <p>هواياتي : قراءة ,التأمل ,تعلم اللغات, السفر , التصوير.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default About;