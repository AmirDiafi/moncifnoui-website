import React from 'react'
import './stylesheets/about.css'
import ProfileImage from "../assets/images/profile.jpeg"

class About extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="about ">
		<h2 className="title text-center">من أنا</h2>
                <div className="row">
                    <div className="head col-4">
                        <img src={ProfileImage} alt=""/>
                    </div>
                    <div className="body col-8">
                        <p>
                            أنا منصف نوي. مقاول حر. مستشار صحة و جمال, واللياقة البدنية.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default About;