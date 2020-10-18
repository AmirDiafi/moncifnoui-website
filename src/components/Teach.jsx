import React from 'react'
import profileImg from '../assets/images/profile-2.png'
import SecondaryNavbar from './SecondaryNavbar'
import './stylesheets/teach.css'

class Teach extends React.Component {
    render() { 
        return (
	    <div className="text-center teach">
	    	<SecondaryNavbar />
            <div className='container'>
				<h1>تريد إستشارات و تكوين؟</h1>
				<h4>أنت في المكان المناسب</h4>
				<img 
					className="profile" 
					src={profileImg} 
					alt='moncif' />
				<p className="alert alert-danger">قريبا إن شاء الله</p>
			</div>
	    </div>
         )
    }
}
 
export default Teach