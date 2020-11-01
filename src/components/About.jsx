import React from 'react'
import './stylesheets/about.css'
import ProfileImage from "../assets/images/profile.jpg"

class About extends React.Component {
    state = {  }
    render() {
        return (
            <div className="about ">
		        <h2 className="title text-center">من أنا</h2>
                <div className="row">
                    <div className="head col-md-4">
                        <img src={ProfileImage} alt=""/>
                    </div>
                    <div className="body col-md-8">
                        <div>
                            <p>أنا اسمي منصف نوي </p>
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