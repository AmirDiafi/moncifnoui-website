import React from 'react'
import SecondaryNavbar from './SecondaryNavbar'
import './stylesheets/teach.css'

class Teach extends React.Component {

    componentDidMount() {
	window.scrollTo(0,0)
    }

    render() { 
        return (
	    <div className="text-center teach">
	    	<SecondaryNavbar />
            <div className='container'>
				<h1>تريد إستشارات و تكوين؟</h1>
				<h4>أنت في المكان المناسب</h4>
				<p className="alert alert-success">قريبا إن شاء الله</p>
				<img 
					className="profile" 
					src='https://drive.google.com/uc?export=view&id=1rsp2--fDQvx0kfvW6SXPrqaofe-2uFN3' 
					alt='moncif' />
			</div>
	    </div>
         )
    }
}
 
export default Teach