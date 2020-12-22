import React from 'react'
import { Link } from "react-router-dom"

class Page404 extends React.Component {

    render() {
        return (
            <div className="page-not-fond text-center" style={{margin: "50px auto"}}>
                <img 
			width="170" 
			height="170" 
			src="https://drive.google.com/uc?export=view&id=1cMtSRv2c7GqPi6WrKNqpq4iFO_M1qdGP" 
			alt="page Not Found" />
           	<h5>OPPS! 404 Page Note Found</h5>
		<Link 
			className="btn" 
			style={{borderRadius: "30px", 
				background: "transparent", 
				color: "blue", 
				border: "1px solid blue", 
				cursor: "pointer"}}
			to="/">
			Back Home
		</Link>
            </div>
        )
    }
}
 
export default Page404