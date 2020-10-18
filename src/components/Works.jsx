import React from 'react'
import profileImg from '../assets/images/profile-2.png'
import './stylesheets/works.css'
import SecondaryNavbar from './SecondaryNavbar'

class Works extends React.Component {
    state = {  }
    render() { 
        return (
	    <div className="text-center works">
	    <SecondaryNavbar />
            <div className='container'>
		<h1>تريد فرصة عمل؟</h1>
	        <h4>أنت في المكان المناسب</h4>
			<img 
				className="profile" 
				src={profileImg} alt='moncif' 
			/>
			<p className="alert alert-danger">قريبا إن شاء الله</p>
  	    </div>
  	    </div>
         )
    }
}
 
export default Works