import React from 'react'
import profileImg from '../assets/images/profile-2.png'

class Teach extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='text-center works container'>
		<h1>تريد إستشارات و تكوين؟</h1>
	        <h4>أنت في المكان المناسب</h4>
		<img src={profileImg} alt='moncif' />
		<p className="alert alert-danger">قريبا إن شاء الله</p>
  	    </div>
         );
    }
}
 
export default Teach