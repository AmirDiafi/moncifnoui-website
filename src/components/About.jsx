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
                        <p>
                            أنا منصف نوي. مقاول حر. مستشار صحة و جمال, واللياقة البدنية. 
			    مقيم  في ولاية باتنة متخرج  من جامعة باتنة 2  تخصص هندسة مدنية .
			    لكن في الأونة الأخيرة  بداية مشوار في عالم البزنس و تسويق منتوجات و بيعها ثم شحن الي مكان الزبون. 
			    و اقوم بتكوين موزعين  و مقاولين احرار معنا في الفريق,				   
                        </p>
			<p> اقدم إستشارات و تدريب متواصل 
في مجال البيع المباشر		 	</p>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default About;